import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props
  const isBestScore = score === 12

  const onclickPlayAgain = () => {
    onPlayAgain()
  }

  return isBestScore ? (
    <div className="win-lose-bg">
      <div className="score-container">
        <h1 className="heading">You Won</h1>
        <p className="heading2">Best Score</p>
        <p className="current-score">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onclickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="win-lose-img"
        />
      </div>
    </div>
  ) : (
    <div className="win-lose-bg">
      <div className="score-container">
        <h1 className="heading">You Lose</h1>
        <p className="heading2">Score</p>
        <p className="current-score">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onclickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="win-lose-img"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
