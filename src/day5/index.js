import React, { Component } from 'react'




const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=4a172ab437d9871cb95cd47d26676729'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      msg: 'no msg',
    }
    this.getWeather = this.getWeather.bind(this)

  }

  componentWillMount() {
    this.getWeather()
  }
  getWeather() {
    fetch(url)
    .then( resp => resp.json())
    .then( json=> {
      console.log(json)
      this.setState({
        data: json,
      })
    }).catch(err=> {
      this.setState({
        msg: err.toString()
      })
    })
  }

  render() {
    let weather
    if(this.state.data.weather) {
      weather = this.state.data.weather[0]

      return (
      <div>
        <h2>Day5 Weather </h2>
        <h3>
          <li>
            name : London
          </li>

            <li>
              condition : {weather.main}
            </li>

              <li>
                description : {weather.description}
              </li>
        </h3>

      </div>
    )

  }else{
    return (
      <div>
        <h2>Day5 Weather App</h2>
        <h4> {this.state.msg} </h4>
      </div>
    )
  }

    console.log(this.state.data)

  }

}



export default Weather
