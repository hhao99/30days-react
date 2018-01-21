import React, { Component } from 'react'
import {
  Button,
  ButtonToolbar,
  Alert,
  Label,
  Grid,
  Row,
  Col,
} from 'react-bootstrap'

const StopWatch = (props)=> {
  return(
    <div>
    <Grid>
      <Row className='show-grid'>
        <Col xs={6} md={8}>
          <h1> Day1: stop watch </h1>
          <h2>
            <Label bsStyle='primary'>{props.time.toLocaleString()}</Label>
          </h2>

        </Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={6} md={8}>
          <ButtonToolbar>
            <Button onClick={props.onStart}>Start</Button>
            <Button onClick={props.onStop}>Stop</Button>
          </ButtonToolbar>
          <Alert>{props.message}</Alert>
        </Col>
      </Row>
    </Grid>

    </div>
  )
}

class Day1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      isCounting: false,
    }
    this._startWatch = this._startWatch.bind(this)
    this._stopWatch = this._stopWatch.bind(this)
  }

  _startWatch () {
    console.log('start the timer')
    if( !this.state.isCounting) {
      let timerID = setInterval(
        ()=> {
          this.setState({
            time: new Date(),
          })
        } , 1000
      )
      this.setState({
        isCounting: true,
        timerID: timerID,
        message: 'timer is started'
      })
    }
  }

  _stopWatch() {
    console.log("stop the timer")
    if(this.state.isCounting) {
      clearInterval(this.state.timerID)
      this.setState({
        isCounting: false,
        message: 'timer is stopped'
      })
    }
  }
  render() {

    return (
      <StopWatch
        time={this.state.time}
        onStart={this._startWatch}
        onStop={this._stopWatch}
        message={this.state.message}
        />
    )
  }
}


export default Day1;
