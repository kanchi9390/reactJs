import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="main-container">
        <div className="bg-card-container">
          <div className="profile-container">
            <p className="logo">S</p>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance-h1">Your Balance</p>
            <div>
              <p className="balance">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-h1">Withdraw</p>
          <p className="withdraw-h2">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                onWithdraw={this.onWithdraw}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
