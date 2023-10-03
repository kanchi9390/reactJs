import './index.css'

const CardSection = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="banner-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default CardSection
