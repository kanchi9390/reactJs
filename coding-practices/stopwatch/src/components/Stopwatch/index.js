import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {seconds: 0, minutes: 0, isTimerRunning: false}
  }

  onStart = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  onStop = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.timerId)
      this.setState({
        isTimerRunning: false,
      })
    }
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({
        seconds: 0,
        minutes: prevState.minutes + 1,
        isTimerRunning: true,
      }))
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
        isTimerRunning: true,
      }))
    }
  }

  onReset = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.timerId)
    }
    this.setState({seconds: 0, minutes: 0, isTimerRunning: false})
  }

  render() {
    const {seconds, minutes} = this.state
    const secondsText = seconds > 9 ? seconds : `0${seconds}`
    const minutesText = minutes > 9 ? minutes : `0${minutes}`
    return (
      <div className="main-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="timer-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p className="stopwatch-label">Timer</p>
          </div>
          <h1 className="stopwatch-timer">
            {minutesText}:{secondsText}
          </h1>
          <div>
            <button className="button b1" type="button" onClick={this.onStart}>
              Start
            </button>
            <button className="button b2" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button className="button b3" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
