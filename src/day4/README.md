# Day 4 work
refresh the ES6 feature and further the react with ES6

## JavaScript ES6
* Arrows
* classes
* enhanced object literals
* template strings
* destructring


### Arraws
Arrows are the function definition using => syntax. It just the lambda function in other language and more consistent syntax repsents in the mordern javascript function definition.

var odds = evens.map(v => v+1)
var nums = evens.map(v,i => v+i)

more info: (MDN arrow functions)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions]

### classes
Javascript have no object oriented language features, the classes syntax introduced in ES6 is the syntax sugar of the object prototypes, more convienent to define the object and the object behaviors.

class ShoppingCart extends Cart {
  constructor(cart) {
    super（cart）
  }
  addToCart(cart){
    ...
  }
  static defaultCard() {

  }
}
more info: [MDN classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### object literals
objects literal is the list of the key/value pair of the attributes associate with the object, enclosed in curly braces({}).

  var car = { myCar: 'VW', getCar: ()=> "Mat"}

more info on [object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)

### template strings
Template string provide the sugar for the string constructing, you can use the template strings to define the string template, and pass the variables to the string, instantiate it and return the actuall string on runtime.

var name = 'bob'
var hello = `Hello ${name}`

### destructring
destrucuring allows binding using pattern matching, support the match for an array and object.

var [a,,,b] = [1,2,3,4] // a=1, b=4
var {op,lhs,rhs} = getAsTNode() // op = Node.op
more info: [MDN destrucring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
### Default + Rest + Spread
in the function call, the callee-evaluated default value and the object provide as the array of parameters.
function f(x,y=12) { return x+y} // f(2) = 14
function f(x,...y) { return x * y.length}

### Iterators + For..Of
Like the java iterators, iterator object iterate itself.
for (var n of items) { }

### Generators
Generators simplify iterator authoring using the function* and yield,Generator are subtypes of iterators that includes the next and throw key word, those values will flow back the generator.
### Proxies
Proxies enable create the object with the full range of the access for the host object, just like the aspect object programming, you can use proxy to define the object logging/profiling etc.


// Proxy a normal object
let target = {}
  var handler = {
    get: (receive,name) {
      return `Hello,${name}`
    }
  }
  let p = new Proxy(target,handler)
  p.world === 'Hello world!'

  there are traps available for all of the runtime-level method

  var handler =
{
  get:...,
  set:...,
  has:...,
  deleteProperty:...,
  apply:...,
  construct:...,
  getOwnPropertyDescriptor:...,
  defineProperty:...,
  getPrototypeOf:...,
  setPrototypeOf:...,
  enumerate:...,
  ownKeys:...,
  preventExtensions:...,
  isExtensible:...
}

### Promises
Asyn programming is the natural in nodejs, and promise simplify the call hell of  the async program.

var p =  timeout(1000).then( ()=> {
  return timeout(2000)
  }).then( ()=> throw new Error('timeout'))
  .catch( err=> console.log(err))
