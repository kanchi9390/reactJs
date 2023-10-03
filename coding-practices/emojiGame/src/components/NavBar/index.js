import './index.css'

const NavBar = props => {
  const {score, topScore, isEmojiIn} = props

  return isEmojiIn ? (
    <div className="navbar navbar1">
      <div className="navbar-score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="score">Emoji Game</h1>
      </div>
    </div>
  ) : (
    <div className="navbar">
      <div className="navbar-score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="score">Emoji Game</h1>
      </div>
      <div className="navbar-score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
