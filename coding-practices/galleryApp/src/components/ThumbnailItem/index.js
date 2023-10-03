import './index.css'

const ThumbnailItem = props => {
  const {eachImgDetails, onThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = eachImgDetails

  const clickThumbnail = () => {
    onThumbnail(thumbnailAltText)
  }

  const activeClassName = isActive ? '' : 'thumbnail'
  return (
    <li>
      <button type="button" onClick={clickThumbnail} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
