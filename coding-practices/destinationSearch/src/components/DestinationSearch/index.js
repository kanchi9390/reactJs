import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-bar-bg">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem DestinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
