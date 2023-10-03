import {v4 as uuidv4} from 'uuid'
import './index.css'
import {Component} from 'react'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const initialMoneyDetails = {balance: 0, income: 0, expense: 0}
const initialTransactionList = []

class MoneyManager extends Component {
  state = {
    moneyDetails: initialMoneyDetails,
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionList: initialTransactionList,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddTransaction = () => {
    const {title, amount, type, moneyDetails} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    let changeMoneyDetails = null
    if (type === transactionTypeOptions[0].optionId) {
      changeMoneyDetails = {
        balance: moneyDetails.balance + parseInt(amount),
        income: moneyDetails.income + parseInt(amount),
        expense: parseInt(moneyDetails.expense),
      }
    } else {
      changeMoneyDetails = {
        balance: moneyDetails.balance - parseInt(amount),
        income: parseInt(moneyDetails.income),
        expense: moneyDetails.expense + parseInt(amount),
      }
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
      moneyDetails: changeMoneyDetails,
    }))
  }

  onDelete = id => {
    const {transactionList, moneyDetails} = this.state
    const filteredTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    const deletedTransaction = transactionList.filter(
      eachTransaction => eachTransaction.id === id,
    )
    console.log(deletedTransaction[0].type)
    let changeMoneyDetails = null
    if (deletedTransaction[0].type === transactionTypeOptions[0].optionId) {
      changeMoneyDetails = {
        balance: moneyDetails.balance - parseInt(deletedTransaction[0].amount),
        income: moneyDetails.income - parseInt(deletedTransaction[0].amount),
        expense: parseInt(moneyDetails.expense),
      }
    } else {
      changeMoneyDetails = {
        balance: moneyDetails.balance + parseInt(deletedTransaction[0].amount),
        income: parseInt(moneyDetails.income),
        expense: moneyDetails.expense - parseInt(deletedTransaction[0].amount),
      }
    }
    this.setState({
      transactionList: filteredTransactionList,
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
      moneyDetails: changeMoneyDetails,
    })
  }

  render() {
    const {moneyDetails, transactionList, title, amount, type} = this.state
    return (
      <div className="main-container">
        <div className="user-container">
          <h1 className="user-name">Hi,Richard</h1>
          <p className="greeting">
            Welcome back to your
            <span className="span"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails moneyDetails={moneyDetails} />
        <div className="transactions-container">
          <div>
            <form className="transaction-input">
              <h1 className="heading">Add Transaction</h1>
              <label htmlFor="TITLE" className="labels">
                TITLE
              </label>
              <input
                type="text"
                id="TITLE"
                placeholder="TITLE"
                className="input-box"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="AMOUNT" className="labels">
                AMOUNT
              </label>
              <input
                type="text"
                id="AMOUNT"
                className="input-box"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="TYPE" className="labels">
                TYPE
              </label>
              <select
                onChange={this.onChangeType}
                id="TYPE"
                value={type}
                className="input-box"
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="add-btn"
                onClick={this.onAddTransaction}
              >
                Add
              </button>
            </form>
          </div>
          <div className="transaction-table-container">
            <h1 className="heading">History</h1>
            <div className="transaction-table">
              <div className="table-headings-container">
                <p className="table-headings">Title</p>
                <p className="table-headings">Amount</p>
                <p className="table-headings">Type</p>
              </div>
              <ul>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    onDelete={this.onDelete}
                    key={eachTransaction.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
