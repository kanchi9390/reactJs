import './index.css'

const CommentItem = props => {
  const {commentDetails, onLike, onDelete} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails
  const logo = name[0]
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColor = isLiked ? 'bg-blue' : 'bg-white'

  const onClickLike = () => {
    onLike(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="comment-container">
      <div className="logo-container">
        <h1 className={initialClassName}>{logo}</h1>
        <div>
          <div className="commenter-container">
            <p className="user-name">{name}</p>
            <p className="time">{date}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="like-del-container">
        <button type="button" onClick={onClickLike} className="button1">
          <img src={likeImgUrl} alt="like" />
          <p className={likeColor}>Like</p>
        </button>
        <button
          type="button"
          onClick={onClickDelete}
          className="button1"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
