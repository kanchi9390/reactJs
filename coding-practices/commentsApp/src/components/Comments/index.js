import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []
class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    console.log(commentsList)
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredCommentsList})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const lengthOfList = commentsList.length
    return (
      <div className="main-container">
        <h1 className="heading">Comments</h1>
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-img"
          />
          <div className="input-container">
            <p className="description-1">
              Say something about 4.0 Technologies
            </p>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="input-name"
                value={name}
                name={name}
                onChange={this.onChangeName}
              />
              <textarea
                cols="30"
                rows="7"
                placeholder="Your Comment"
                className="input-comment"
                value={comment}
                name={comment}
                onChange={this.onChangeComment}
              />
              <button
                type="button"
                className="button"
                onClick={this.onAddComment}
              >
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr />
        <p>
          <span className="count">{lengthOfList}</span>comments
        </p>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              onLike={this.onLike}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
