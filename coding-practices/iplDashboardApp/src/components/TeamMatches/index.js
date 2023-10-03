import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesData: []}

  componentDidMount() {
    this.getTeamsMatchesDetails()
  }

  getTeamsMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        date: eachItem.date,
        firstInnings: eachItem.first_innings,
        id: eachItem.id,
        manOfTheMatch: eachItem.man_of_the_match,
        matchStatus: eachItem.match_status,
        result: eachItem.result,
        secondInnings: eachItem.second_innings,
        umpires: eachItem.umpires,
        venue: eachItem.venue,
      })),
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  getTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    return (
      <>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-match-list">
          {recentMatches.map(eachItem => (
            <MatchCard recentMatchesDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </>
    )
  }

  getLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-container ${id}`}>
        {isLoading ? this.getLoader() : this.getTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
