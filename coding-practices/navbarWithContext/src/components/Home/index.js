import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBackground = isDarkTheme ? 'dark-bg' : 'light-bg'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeHeading = isDarkTheme ? 'dark-text' : 'light-text'
      return (
        <>
          <Navbar />
          <div className={`home-container ${homeBackground}`}>
            <img src={homeImg} alt="home" className="container-img" />
            <h1 className={`home-heading ${homeHeading}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
