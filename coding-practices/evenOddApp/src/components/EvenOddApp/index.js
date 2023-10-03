import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    function getRandomInt() {
      return Math.floor(Math.random() * (100 - 0) + 0)
    }
    this.setState(prevState => ({count: prevState.count + getRandomInt()}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        {count % 2 === 0 ? (
          <p className="even-odd">Count is Even</p>
        ) : (
          <p className="even-odd">Count is Odd</p>
        )}
        <button onClick={this.onIncrement} type="button" className="button">
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
