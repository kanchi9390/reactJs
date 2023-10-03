import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, forksCount, issuesCount, starsCount, name} = repoDetails
  return (
    <li className="repo-item-container">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <h1 className="repo-heading">{name}</h1>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icons"
        />
        <p className="counts">{starsCount} stars</p>
      </div>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icons"
        />
        <p className="counts">{forksCount} forks</p>
      </div>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icons"
        />
        <p className="counts">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
