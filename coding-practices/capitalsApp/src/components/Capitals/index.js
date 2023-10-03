import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  render() {
    const {activeCapital} = this.state
    const result = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapital,
    )
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select
              onChange={this.onChangeCapital}
              value={activeCapital}
              className="select-box"
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  value={eachCountry.id}
                  key={eachCountry.id}
                  className="option"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h1 className="country">{result.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
