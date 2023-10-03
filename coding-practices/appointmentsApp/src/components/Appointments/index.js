import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem'

const initialAppointmentsList = []
class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    title: '',
    date: '',
    onStar: false,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onClickStarred = () => {
    this.setState(prevState => ({onStar: !prevState.onStar}))
  }

  isFavourite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {appointmentsList, title, date, onStar} = this.state
    const filteredAppointmentsList = onStar
      ? appointmentsList.filter(
          eachAppointment => eachAppointment.isStarred === true,
        )
      : appointmentsList
    const starClass = onStar ? 'star-btn2' : 'star-btn1'

    return (
      <div className="main-container">
        <div className="card">
          <div className="input-container">
            <div>
              <h1 className="heading">Add Appointment</h1>
              <form>
                <label className="labels" htmlFor="Title">
                  TITLE
                </label>
                <input
                  type="text"
                  id="Title"
                  className="input-class"
                  value={title}
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                />
                <label className="labels" htmlFor="Date">
                  DATE
                </label>
                <input
                  type="date"
                  id="Date"
                  className="input-class"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <br />
                <button
                  type="button"
                  className="add-btn"
                  onClick={this.addAppointment}
                >
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-img"
            />
          </div>
          <hr />
          <div className="starred-btn-container">
            <h1 className="heading">Appointments</h1>
            <button
              type="button"
              className={starClass}
              onClick={this.onClickStarred}
            >
              Starred
            </button>
          </div>
          <ul>
            {filteredAppointmentsList.map(eachAppointment => (
              <AppointmentItem
                AppointmentDetails={eachAppointment}
                isFavourite={this.isFavourite}
                key={eachAppointment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
