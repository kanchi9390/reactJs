import './index.css'

const AppointmentItem = props => {
  const {AppointmentDetails, isFavourite} = props
  const {id, title, date, isStarred} = AppointmentDetails
  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onFavourite = () => {
    isFavourite(id)
  }

  return (
    <li className="appointment-container">
      <div className="star-container">
        <p className="title">{title}</p>
        <button
          type="button"
          onClick={onFavourite}
          data-testid="star"
          className="button"
        >
          <img src={starUrl} alt="star" className="star" />
        </button>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}
export default AppointmentItem
