import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logo-name">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link to="/" className="logo-name">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="logo-name">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="logo-name">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
