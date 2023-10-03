import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const repoStatesConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    repoList: [],
    activeLanguageId: languageFiltersData[0].id,
    repoState: repoStatesConstants.loading,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  updateActiveLanguageId = id => {
    this.setState({activeLanguageId: id}, this.getPopularRepos)
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-p">Something Went Wrong</p>
    </div>
  )

  getPopularRepos = async () => {
    const {activeLanguageId} = this.state
    this.setState({repoState: repoStatesConstants.loading})
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`,
    )
    const data = await response.json()
    console.log(response.ok)
    if (response.ok === true) {
      const popularRepos = data.popular_repos
      const updatedpopularRepos = popularRepos.map(eachRepo => ({
        avatarUrl: eachRepo.avatar_url,
        forksCount: eachRepo.forks_count,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        name: eachRepo.name,
        starsCount: eachRepo.stars_count,
      }))
      this.setState({
        repoList: updatedpopularRepos,
        repoState: repoStatesConstants.success,
      })
    } else {
      this.setState({repoState: repoStatesConstants.failure})
    }
  }

  getLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  getRepoList = () => {
    const {repoList} = this.state
    return (
      <ul className="repo-items-list">
        {repoList.map(eachItem => (
          <RepositoryItem repoDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  getSwitch = () => {
    const {repoState} = this.state
    switch (repoState) {
      case repoStatesConstants.loading:
        return this.getLoader()
      case repoStatesConstants.success:
        return this.getRepoList()
      case repoStatesConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {activeLanguageId} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="languages-item-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              languageItemDetails={each}
              key={each.id}
              activeLanguageId={activeLanguageId}
              updateActiveLanguageId={this.updateActiveLanguageId}
            />
          ))}
        </ul>
        {this.getSwitch()}
      </div>
    )
  }
}

export default GithubPopularRepos
