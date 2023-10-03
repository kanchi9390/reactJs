import './index.css'

const ImageItem = props => {
  const {imageDetails, onImageItem} = props
  const {thumbnailUrl, id} = imageDetails
  const onImage = () => {
    onImageItem(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-item" />
      </button>
    </li>
  )
}

export default ImageItem
