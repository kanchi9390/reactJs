import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="coin-container">
        <img src={currencyLogo} alt={currencyName} className="coin-logo" />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="coin-container">
        <p className="coin">{usdValue}</p>
        <p className="coin">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
