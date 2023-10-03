import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const onclickEmoji = () => {
    onEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="button" type="button" onClick={onclickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
