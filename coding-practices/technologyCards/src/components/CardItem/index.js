import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  const cardsClassName = `cards ${className}`
  return (
    <li className={cardsClassName}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
