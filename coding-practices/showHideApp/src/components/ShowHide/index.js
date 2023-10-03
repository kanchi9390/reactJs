import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="cards">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide FirstName
            </button>
            {firstName ? null : <p className="name">Joe</p>}
          </div>
          <div className="cards">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide LastName
            </button>
            {lastName ? null : <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
