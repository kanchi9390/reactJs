import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBackground = isDarkTheme ? 'dark-bg' : 'light-bg'
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutHeading = isDarkTheme ? 'dark-text' : 'light-text'
      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBackground}`}>
            <img src={aboutImg} alt="about" className="container-img" />
            <h1 className={`about-heading ${aboutHeading}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
