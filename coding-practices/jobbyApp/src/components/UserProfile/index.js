import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const userApiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class UserProfile extends Component {
  state = {userDetails: {}, userApi: userApiConstants.initial}

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    this.setState({userApi: userApiConstants.loading})

    const apiUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const profileDetails = data.profile_details
      const updatedProfile = {
        name: profileDetails.name,
        profileImageUrl: profileDetails.profile_image_url,
        shortBio: profileDetails.short_bio,
      }
      this.setState({
        userDetails: updatedProfile,
        userApi: userApiConstants.success,
      })
    } else {
      this.setState({userApi: userApiConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getUserDetails()
  }

  renderUserProfileSuccess = () => {
    const {userDetails} = this.state
    const {profileImageUrl, name, shortBio} = userDetails
    return (
      <div className="user-container">
        <img src={profileImageUrl} alt="profile" className="profile-img" />
        <h1 className="user-name">{name}</h1>
        <p className="user-bio">{shortBio}</p>
      </div>
    )
  }

  getLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderUserFailure = () => (
    <div className="retry-container">
      <button type="button" className="retry-btn" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  getUserSwitch = () => {
    const {userApi} = this.state
    switch (userApi) {
      case userApiConstants.success:
        return this.renderUserProfileSuccess()
      case userApiConstants.failure:
        return this.renderUserFailure()
      case userApiConstants.loading:
        return this.getLoader()
      default:
        return null
    }
  }

  render() {
    return <>{this.getUserSwitch()}</>
  }
}
export default UserProfile
