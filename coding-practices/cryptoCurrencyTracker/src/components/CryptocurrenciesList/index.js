import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedCryptoData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    console.log(updatedCryptoData)
    this.setState({cryptoData: updatedCryptoData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-image"
            />
            <ul className="table-container">
              <li className="heading-item">
                <p className="table-heading">Coin Type</p>
                <div className="heading-item">
                  <p className="table-heading">USD</p>
                  <p className="table-heading">EURO</p>
                </div>
              </li>
              {cryptoData.map(eachItem => (
                <CryptocurrencyItem
                  cryptoDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
