import React, { Component } from 'react'
import { createStore } from 'redux'

const reducer = (state=0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const store = createStore(reducer)

class Day2 extends Component {
  constructor(props) {
    super(props)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.state = {
      msg: 'no msg',
    }
  }
  log(msg) {
    this.setState({
      msg: msg
    })
  }
  onIncrement() {
    this.log('increment')
    store.dispatch({ type: 'INCREMENT'})
  }
  onDecrement() {
    this.log('decrement')
    store.dispatch({ type: 'DECREMENT'})
  }
  render() {
    return (
      <div>
        <h1>Day2: Redux</h1>
        <h3>Clicked:
          <button onClick={this.onIncrement}>+</button>
            {  store.getState()}
          <button onClick={this.onDecrement}>-</button>
            times
          </h3>
        <div>
            <h3>{this.state.msg}</h3>
        </div>

      </div>

    )
  }


}

export default Day2
