import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {onEmoji: true}

  clickEmoji = () => {
    this.setState({onEmoji: false})
  }

  render() {
    const {onEmoji} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="main-container">
        {onEmoji ? (
          <div className="feedback-card">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emojis">
              {emojis.map(eachEmoji => {
                const {name, imageUrl, id} = eachEmoji
                return (
                  <li className="emoji-container" key={id}>
                    <button
                      type="button"
                      onClick={this.clickEmoji}
                      className="button"
                    >
                      <img
                        src={imageUrl}
                        alt={name}
                        className="emoji"
                        key={id}
                      />
                    </button>
                    <p className="emoji-name">{name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <div className="feedback-card">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="heading">Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
