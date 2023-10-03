import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, lettersInput: ''}

  onChangeLettersInput = event => {
    const letters = event.target.value
    this.setState({lettersInput: letters, count: letters.length})
  }

  render() {
    const {count, lettersInput} = this.state
    return (
      <div className="main-container">
        <div className="letters-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="description" htmlFor="input">
            Enter the phrase
          </label>
          <input
            type="text"
            id="input"
            className="letters-input"
            placeholder="Enter the phrase"
            value={lettersInput}
            onChange={this.onChangeLettersInput}
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
