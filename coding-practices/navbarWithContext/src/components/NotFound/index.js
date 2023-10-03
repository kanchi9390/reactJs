import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBg = isDarkTheme ? 'dark-bg' : 'light-bg'
      const textColor = isDarkTheme
        ? 'dark-not-found-text'
        : 'light-not-found-text'
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notFoundBg}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="container-img"
            />
            <h1 className={`not-found-h ${textColor}`}>Lost Your Way?</h1>
            <p className={`not-found-p ${textColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
