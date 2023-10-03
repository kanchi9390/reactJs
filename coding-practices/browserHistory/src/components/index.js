import './index.css'

const SearchItem = props => {
  const {searchDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = searchDetails
  const deleteHistoryItem = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="search-item-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={deleteHistoryItem}
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchItem
