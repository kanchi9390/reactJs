import {BsSearch} from 'react-icons/bs'
import './index.css'

const SearchInput = props => {
  const {
    screenType,
    searchInput,
    onChangeSearchInput,
    onClickSearchIcon,
  } = props

  const onSearch = event => {
    onChangeSearchInput(event.target.value)
  }

  const onSearchIcon = () => {
    onClickSearchIcon()
  }

  return (
    <div className={`search-container ${screenType}`}>
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange={onSearch}
      />
      <button
        type="button"
        data-testid="searchButton"
        className="search-icon"
        onClick={onSearchIcon}
      >
        <BsSearch />
      </button>
    </div>
  )
}
export default SearchInput
