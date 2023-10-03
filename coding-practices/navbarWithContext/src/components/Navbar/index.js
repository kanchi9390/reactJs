import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navBackground = isDarkTheme ? 'dark-nav-bg' : 'light-nav-bg'

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const routeItem = isDarkTheme ? 'dark-text' : 'light-text'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const breakColor = isDarkTheme ? 'dark-line' : 'light-line'

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return (
        <>
          <nav className={`nav-container ${navBackground}`}>
            <Link to="/">
              <img src={logoUrl} alt="website logo" className="logos" />
            </Link>
            <ul>
              <li>
                <Link to="/" className={`route-item ${routeItem}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`route-item ${routeItem}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              onClick={onClickToggleTheme}
              type="button"
              className="button"
              data-testid="theme"
            >
              <img src={themeUrl} alt="theme" className="logos" />
            </button>
          </nav>
          {!isDarkTheme && <hr className={`break-line ${breakColor}`} />}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
