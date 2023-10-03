import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchesDetails
  const matchStatusClass = matchStatus === 'Won' ? 'Won' : 'Lost'

  return (
    <li className="recent-match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-match-img"
      />
      <p className="recent-match-heading">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={`match-status ${matchStatusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
