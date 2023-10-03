import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, teamImageUrl, id} = teamDetails
    return (
      <li>
        <Link to={`/team-matches/${id}`} className="team-card">
          <img src={teamImageUrl} alt={`${name}`} className="team-img" />
          <p className="team-name">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
