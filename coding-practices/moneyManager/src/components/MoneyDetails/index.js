import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {balance, income, expense} = moneyDetails
  return (
    <div className="money-details-container">
      <div className="money-card card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-img"
        />
        <div>
          <p className="title">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="money-card card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-img"
        />
        <div>
          <p className="title">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="money-card card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-img"
        />
        <div>
          <p className="title">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
