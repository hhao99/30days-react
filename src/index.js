import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Day1 from './day1/'


const App = ()=> {
  console.log('app')
  return(
    <div>
      <h1> 30 days of the React </h1>

      <Day1 />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))