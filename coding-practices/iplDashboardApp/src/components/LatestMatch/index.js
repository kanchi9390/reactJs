import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails
  console.log(
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  )

  return (
    <div className="latest-match-bg">
      <div className="competing-team-details">
        <p className="competing-team-name">{competingTeam}</p>
        <p className="latest-match-date">{date}</p>
        <p className="latest-match-p">{venue}</p>
        <p className="latest-match-p">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-img"
      />
      <div className="latest-match-details">
        <p className="latest-match-h">First Innings</p>
        <p className="latest-match-v">{firstInnings}</p>
        <p className="latest-match-h">Second Innings</p>
        <p className="latest-match-v">{secondInnings}</p>
        <p className="latest-match-h">Man Of The Match</p>
        <p className="latest-match-v">{manOfTheMatch}</p>
        <p className="latest-match-h">Umpires</p>
        <p className="latest-match-v">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
