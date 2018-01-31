import React, { Component } from 'react'

const apiKey = '4a172ab437d9871cb95cd47d26676729'
const url='api.openweathermap.org/data/2.5/weather?q=London&appid='
const url2='http://api.com/products.json'
class Day5 extends Component {
  _getWeather() {
    fetch(url2,{
      json: true,
      Access-Control-Allow-Origin: true,
    })
    .then( response => {
      return response.json()
    })
    .then( json=> {
      console.log(json)
    })
    .catch(err=> console.log(err))


  }
  componentDidMount() {
      this._getWeather()
  }
  render() {

    return (
      <div>
        <h1>Day5 Weather App </h1>
      </div>
    )
  }
}

export default Day5
