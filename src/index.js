import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'bootstrap'

import Day1 from './day1/'
import Day2 from './day2/'
import Day3 from './day3/'
import Day5 from './day5/'
const App = ()=> {
  console.log('app')
  return(
    <div className="container">
      <h1> 30 days of the React </h1>
      <Day1 />
      <Day2 />
      <Day3 />
      <h2> Day4 ES6 recap</h2>
      <Day5 />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
