// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-container">
      <div className="blog-title-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
      <hr className="break-line" />
    </li>
  )
}

export default BlogItem
