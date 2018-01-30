import React, { Component } from 'react'

const apiKey = '4a172ab437d9871cb95cd47d26676729'
const url='api.openweathermap.org/data/2.5/weather?q=London&appid='
class Day5 extends Component {
  _getWeather() {
    console.log(url+apiKey)
    fetch(url+apiKey)
      .then( response => {
        console.log(response)
        response.json() }
      )
      .then( json => {
        console.log(json)
      })
      .catch(err => {
        console.log(err)
      })

  }
  render() {
    this._getWeather()
    return (
      <div>
        <h1>Day5 Weather App </h1>
      </div>
    )
  }
}

export default Day5
