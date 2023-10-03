import {Component} from 'react'
import './index.css'

const eventStatusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderNoActiveEvent = () => (
    <div className="activity-container">
      <p className="no-event-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegister = () => (
    <div className="activity-container activity">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-reg-img"
      />
      <p className="yet-to-reg-p">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  renderRegistered = () => (
    <div className="activity-container activity">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationsClosed = () => (
    <div className="activity-container activity">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-reg-img"
      />
      <h1 className="registered-heading">Registrations Are Closed Now!</h1>
      <p className="yet-to-reg-p">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {eventStatus} = this.props
    switch (eventStatus) {
      case eventStatusConstants.yetToRegister:
        return this.renderYetToRegister()
      case eventStatusConstants.registered:
        return this.renderRegistered()
      case eventStatusConstants.registrationsClosed:
        return this.renderRegistrationsClosed()
      default:
        return this.renderNoActiveEvent()
    }
  }
}

export default ActiveEventRegistrationDetails
