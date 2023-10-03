import './index.css'

const EventItem = props => {
  const {cardDetails, onClickEventImage, activeImage} = props
  const {imageUrl, name, location, registrationStatus, id} = cardDetails
  const activeImageClass = activeImage === id ? 'image-border' : ''

  const onEventImage = () => {
    onClickEventImage(registrationStatus, id)
  }

  return (
    <li className="event-card">
      <button type="submit" className="event-img-btn" onClick={onEventImage}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-img ${activeImageClass}`}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
