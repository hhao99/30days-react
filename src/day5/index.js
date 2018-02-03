import React, { Component } from 'react'



let city = 'Beijing'
let url = 'https://api.openweathermap.org/data/2.5/weather?appid=4a172ab437d9871cb95cd47d26676729&q='

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      msg: 'no msg',
      city: '',
    }
    this.getWeather = this.getWeather.bind(this)
    this.queryWeather = this.queryWeather.bind(this)

  }

  componentDidMount() {
  //  this.getWeather(url+city)
  }
  componentDidCatch(err,info) {
    this.setState({ hasError: true})
    this.setState({msg: info})
    console.log(err,info)
  }
  getWeather(url2) {
    fetch(url2)
    .then( resp => resp.json())
    .then( json=> {
      this.setState({
        data: json,
      })
    }).catch(err=> {
      this.setState({
        msg: err.toString()
      })
    })
  }

  queryWeather(e) {
    e.preventDefault()
    console.log(this.city.value)

    this.getWeather(url+this.city.value)
  }

  render() {
    let weatherinfo
    if(this.state.data) {
      let weather = this.state.data.weather[0]
      let main = this.state.data.main
      let city = this.state.data.name
      weatherinfo = (
      <div>
        <h2>Day5 Weather </h2>
        <h3>
          <li>
            name : {city}
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
    weatherinfo =(
      <div>
        <h4> {this.state.msg} </h4>
      </div>
    )
  }
  return (
    <div>
      {weatherinfo}
      <form onSubmit={(e)=> this.queryWeather(e)}>
        <input type='text'

            ref={ input => this.city = input}
          />
        <input type='button' value="Query" onClick={this.queryWeather}></input>
      </form>
     </div>
  )
}
}



export default Weather
