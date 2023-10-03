import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isRegistration: true,
    firstNameValue: '',
    lastNameValue: '',
    showFirstNameError: false,
    showLastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameValue: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameValue: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstNameValue} = this.state
    if (firstNameValue === '') {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
  }

  onBlurLastName = () => {
    const {lastNameValue} = this.state
    if (lastNameValue === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({showLastNameError: false})
    }
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {firstNameValue, lastNameValue} = this.state
    if (lastNameValue === '' && firstNameValue === '') {
      this.setState({showLastNameError: true, showFirstNameError: true})
    } else if (firstNameValue === '') {
      this.setState({showFirstNameError: true})
    } else if (lastNameValue === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({
        isRegistration: false,
        firstNameValue: '',
        lastNameValue: '',
      })
    }
  }

  onClickAnotherBtn = () => {
    this.setState({isRegistration: true, firstNameValue: '', lastNameValue: ''})
  }

  render() {
    const {
      isRegistration,
      firstNameValue,
      lastNameValue,
      showFirstNameError,
      showLastNameError,
    } = this.state
    const firstNameClassName = showFirstNameError ? 'required-input' : ''
    const lastNameClassName = showLastNameError ? 'required-input' : ''

    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        {isRegistration ? (
          <form className="form-container" onSubmit={this.onClickSubmit}>
            <label className="labels" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              className={`input-box ${firstNameClassName}`}
              value={firstNameValue}
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {showFirstNameError && <p className="required-msg">Required</p>}
            <label className="labels" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              className={`input-box ${lastNameClassName}`}
              value={lastNameValue}
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {showLastNameError && <p className="required-msg">Required</p>}
            <input type="Submit" className="submit-btn" />
          </form>
        ) : (
          <div className="success-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-img"
            />
            <p className="submit-msg">Submitted Successfully</p>
            <button
              type="button"
              className="another-btn"
              onClick={this.onClickAnotherBtn}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
