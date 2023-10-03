import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdraw} = props
  const {value} = denominationDetails

  const withdrawAmount = () => {
    onWithdraw(value)
  }

  return (
    <li>
      <button className="withdraw-btn" type="button" onClick={withdrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
