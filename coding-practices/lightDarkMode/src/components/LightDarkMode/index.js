import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isMode: true}

  onLight = () => {
    this.setState({isMode: false})
  }

  onDark = () => {
    this.setState({isMode: true})
  }

  render() {
    const {isMode} = this.state

    return (
      <div className="main-container">
        {isMode ? (
          <div className="dark-mode-card">
            <h1 className="dark-heading">Click To Change Mode</h1>
            <button
              onClick={this.onLight}
              type="button"
              className="light-mode-btn"
            >
              Light Mode
            </button>
          </div>
        ) : (
          <div className="light-mode-card">
            <h1 className="light-heading">Click To Change Mode</h1>
            <button
              onClick={this.onDark}
              type="button"
              className="dark-mode-btn"
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
