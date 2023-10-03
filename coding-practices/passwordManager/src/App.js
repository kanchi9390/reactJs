import {v4 as uuidv4} from 'uuid'
import './App.css'
import {Component} from 'react'

const logoBgList = [
  'yellow',
  'light-green',
  'orange',
  'green',
  'red',
  'sky-blue',
]

const initialPasswordsList = []
class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isShow: false,
    passwordsList: initialPasswordsList,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  addPassword = () => {
    const {website, username, password, passwordsList} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState({
      passwordsList: [...passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredPasswordsList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordsList: filteredPasswordsList})
  }

  showPassword = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      searchInput,
      isShow,
    } = this.state

    const resultPasswordsList = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const isPasswords = resultPasswordsList.length === 0

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="first-card">
          <form className="inputs-container">
            <h1 className="inputs-heading">Add New Password</h1>
            <div className="input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-img"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-img"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-img"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <button
              type="submit"
              className="input-btn"
              onClick={this.addPassword}
            >
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="second-card">
          <div className="second-card-heading">
            <h1 className="inputs-heading">
              Your Passwords{' '}
              <p className="count">{resultPasswordsList.length}</p>
            </h1>
            <div className="input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-img"
              />
              <input
                type="search"
                className="input"
                placeholder="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr />
          <form className="show-password-container">
            <input
              type="checkbox"
              id="show-password"
              onChange={this.showPassword}
            />
            <label htmlFor="show-password" className="show-password">
              Show Passwords
            </label>
          </form>
          {isPasswords ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="inputs-heading">No Passwords</p>
            </div>
          ) : (
            <ul>
              {resultPasswordsList.map(eachPassword => (
                <li className="password-container" key={eachPassword.id}>
                  <h1
                    className={`password-heading ${
                      logoBgList[Math.ceil(Math.random() * 6)]
                    }`}
                  >
                    {eachPassword.website[0].toUpperCase()}
                  </h1>
                  <div>
                    <p className="p-content">{eachPassword.website}</p>
                    <p className="p-content">{eachPassword.username}</p>
                    {isShow ? (
                      <p className="p-content">{eachPassword.password}</p>
                    ) : (
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                        alt="stars"
                        className="stars"
                      />
                    )}
                  </div>
                  <button
                    type="button"
                    className="del-btn"
                    data-testid="delete"
                    onClick={() => this.deletePassword(eachPassword.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      alt="delete"
                      className="del-img"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
