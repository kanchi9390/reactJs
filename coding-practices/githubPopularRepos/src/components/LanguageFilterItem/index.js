import './index.css'

const LanguageFilterItem = props => {
  const {languageItemDetails, updateActiveLanguageId, activeLanguageId} = props
  const {language, id} = languageItemDetails

  const activeClass = activeLanguageId === id ? 'active-language' : ''

  const onClickLanguage = () => {
    updateActiveLanguageId(id)
  }

  return (
    <li className="language-item">
      <button className="language-btn" type="button" onClick={onClickLanguage}>
        <p className={`language-heading ${activeClass}`}>{language}</p>
      </button>
    </li>
  )
}

export default LanguageFilterItem
