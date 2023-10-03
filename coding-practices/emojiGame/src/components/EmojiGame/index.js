import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
const initialGamesList = []
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    gamesList: initialGamesList,
    currentEmoji: -1,
    isEmojiIn: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmoji = id => {
    const {gamesList} = this.state
    const {emojisList} = this.props
    const isGame = gamesList.includes(id)

    if (isGame) {
      this.setState(prevState => ({
        gamesList: [...gamesList],
        score: prevState.score,
        currentEmoji: id,
        isEmojiIn: true,
      }))
    } else {
      const gamesLength = gamesList.length
      if (emojisList.length - 1 === gamesLength) {
        this.setState(prevState => ({
          gamesList: [...gamesList, id],
          score: prevState.score + 1,
          currentEmoji: id,
          isEmojiIn: true,
        }))
      } else {
        this.setState(prevState => ({
          gamesList: [...gamesList, id],
          score: prevState.score + 1,
          currentEmoji: id,
          isEmojiIn: false,
        }))
      }
    }
  }

  onPlayAgain = () => {
    const {score, topScore} = this.state
    const maxScore = score > topScore ? score : topScore
    this.setState({
      score: 0,
      gamesList: initialGamesList,
      currentEmoji: -1,
      topScore: maxScore,
      isEmojiIn: false,
    })
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, topScore, isEmojiIn, currentEmoji, gamesList} = this.state
    console.log(currentEmoji)
    console.log(gamesList)

    return (
      <div>
        <NavBar score={score} topScore={topScore} isEmojiIn={isEmojiIn} />
        <div className="bg-container">
          {isEmojiIn ? (
            <WinOrLoseCard
              isLoss={isEmojiIn}
              score={score}
              topScore={topScore}
              onPlayAgain={this.onPlayAgain}
            />
          ) : (
            <ul>
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onEmoji={this.onEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
