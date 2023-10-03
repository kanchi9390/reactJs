import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    activeCategoryId,
    activeRatingId,
    updateActiveCategoryId,
    updateActiveRatingId,
    updateSearchInput,
    onEnterSearchInput,
    searchInput,
    onClickClearBtn,
  } = props

  const onChangeSearchInput = event => {
    updateSearchInput(event)
  }

  const onClear = () => {
    onClickClearBtn()
  }

  const onClickEnter = event => {
    if (event.key === 'Enter') {
      console.log('Hello')
      onEnterSearchInput()
    }
  }

  const renderSearchContainer = () => (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        value={searchInput}
        onChange={onChangeSearchInput}
        onKeyDown={onClickEnter}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const renderCategories = () => (
    <>
      <h1 className="filter-group-heading">Category</h1>
      <div className="category-container">
        {categoryOptions.map(each => {
          const activeCategoryIdClass =
            activeCategoryId === each.categoryId ? 'active-class' : ''
          const onClickCategory = () => {
            updateActiveCategoryId(each.categoryId)
          }
          return (
            <button
              type="button"
              className={`filter-group-btn ${activeCategoryIdClass}`}
              onClick={onClickCategory}
              key={each.categoryId}
            >
              <p>{each.name}</p>
            </button>
          )
        })}
      </div>
    </>
  )

  const renderRatings = () => (
    <>
      <h1 className="filter-group-heading">Rating</h1>
      {ratingsList.map(each => {
        const activeRatingIdClass =
          activeRatingId === each.ratingId ? 'active-class' : ''
        const onClickRating = () => {
          updateActiveRatingId(each.ratingId)
        }
        return (
          <button
            type="button"
            className={`stars-container ${activeRatingIdClass} button`}
            onClick={onClickRating}
            key={each.ratingId}
          >
            <img
              src={each.imageUrl}
              alt={`rating ${each.ratingId}`}
              className="rating-img"
            />
            <p className={`rating-p ${activeRatingIdClass}`}>& up</p>
          </button>
        )
      })}
    </>
  )

  return (
    <div className="filters-group-container">
      {renderSearchContainer()}
      {renderCategories()}
      {renderRatings()}
      <button type="button" onClick={onClear} className="clear-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
