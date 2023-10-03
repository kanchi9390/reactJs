import './index.css'

const transactionList = props => {
  const {transactionDetails, onDelete} = props
  const {id, title, amount, type} = transactionDetails
  const type1 = type.slice(1).toLowerCase()
  const type2 = type[0] + type1

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="transaction-container">
      <p className="transactions">{title}</p>
      <p className="transactions">Rs {amount}</p>
      <p className="transactions">{type2}</p>
      <button
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-btn"
        />
      </button>
    </li>
  )
}
export default transactionList
