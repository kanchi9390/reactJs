import './index.css'
import {Component} from 'react'

const initialTime = 25
class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: initialTime,
      minutes: initialTime,
      isTimerRunning: false,
      seconds: 0,
    }
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  onPause = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      seconds: prevState.seconds,
      minutes: prevState.minutes,
      isTimerRunning: false,
    }))
  }

  onReset = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.timerId)
      this.setState({
        seconds: 0,
        minutes: initialTime,
        time: initialTime,
        isTimerRunning: false,
      })
    } else {
      this.setState({
        seconds: 0,
        minutes: initialTime,
        time: initialTime,
        isTimerRunning: false,
      })
    }
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 0) {
      const {minutes} = this.state
      if (minutes === 0) {
        this.onReset()
      } else {
        this.setState(prevState => ({
          seconds: 59,
          minutes: prevState.minutes - 1,
        }))
      }
    } else {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    }
  }

  onIncrementTime = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.setState(prevState => ({
        time: prevState.time + 1,
        minutes: prevState.time + 1,
      }))
    }
  }

  onDecrementTime = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.setState(prevState => ({
        time: prevState.time - 1,
        minutes: prevState.time - 1,
      }))
    }
  }

  render() {
    const {time, minutes, isTimerRunning, seconds} = this.state
    const timerStatus = isTimerRunning ? 'Running' : 'Paused'
    const secondsText = seconds <= 9 ? `0${seconds}` : seconds
    const minutesText = minutes <= 9 ? `0${minutes}` : minutes
    return (
      <div className="main-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="bg-container">
            <div className="timer-bg">
              <h1 className="timer">
                {minutesText}:{secondsText}
              </h1>
              <p className="timer-status">{timerStatus}</p>
            </div>
          </div>
          <div className="timer-set-container">
            <div className="timer-container">
              {isTimerRunning ? (
                <div className="timer-container">
                  <button
                    type="button"
                    className="time-set-btn"
                    onClick={this.onPause}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                      className="icons"
                    />
                    <p className="icon-label">Pause</p>
                  </button>
                </div>
              ) : (
                <div className="timer-container">
                  <button
                    type="button"
                    className="time-set-btn"
                    onClick={this.onStart}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                      className="icons"
                    />
                    <p className="icon-label">Start</p>
                  </button>
                </div>
              )}
              <div className="timer-container">
                <button
                  type="button"
                  className="time-set-btn"
                  onClick={this.onReset}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icons"
                  />
                  <p className="icon-label">Reset</p>
                </button>
              </div>
            </div>
            <p className="timer-limit">Set Timer Limit</p>
            <div className="timer-container">
              <button
                className="time-set-btn"
                type="button"
                onClick={this.onDecrementTime}
              >
                -
              </button>
              <p className="time-card">{time}</p>
              <button
                className="time-set-btn"
                type="button"
                onClick={this.onIncrementTime}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
