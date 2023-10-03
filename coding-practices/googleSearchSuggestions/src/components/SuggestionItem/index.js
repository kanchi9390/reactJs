import './index.css'

const SuggestionItem = props => {
  const {searchDetails, onArrow} = props
  const {suggestion} = searchDetails

  const clickArrow = () => {
    onArrow(suggestion)
  }
  return (
    <li className="suggestion-element">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={clickArrow}
      />
    </li>
  )
}

export default SuggestionItem
