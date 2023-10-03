import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {gamesData: [], isLoading: true}

  componentDidMount() {
    this.getGamesData()
  }

  getGamesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedGamesData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({gamesData: updatedGamesData, isLoading: false})
  }

  getLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {gamesData, isLoading} = this.state

    return (
      <div className="main-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          this.getLoader()
        ) : (
          <ul className="games-container">
            {gamesData.map(each => (
              <TeamCard teamDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
