import './index.css'

const FaqItem = props => {
  const {faqDetails, isFaqHideList, onIcon} = props
  const {questionText, answerText, id} = faqDetails
  const isHideOrShow = isFaqHideList.includes(id)
  const iconUrl = isHideOrShow
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const iconAlt = isHideOrShow ? 'minus' : 'plus'

  const onToggleBtn = () => {
    onIcon(id)
  }

  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="toggle-btn" onClick={onToggleBtn}>
          <img src={iconUrl} alt={iconAlt} className="toggle-icon" />
        </button>
      </div>
      {isHideOrShow && (
        <>
          {' '}
          <hr className="break-line" />
          <p className="answer">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
