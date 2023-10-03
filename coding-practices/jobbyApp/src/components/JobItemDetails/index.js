import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsFillStarFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import {MdLocationOn} from 'react-icons/md'
import Header from '../Header'
import './index.css'

const jobItemApiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class JobItemDetails extends Component {
  state = {
    apiState: jobItemApiConstants.initial,
    jobDetails: {},
    similarJobs: [],
  }

  componentDidMount() {
    this.getJobItemDetails()
  }

  convertCase = each => ({
    companyLogoUrl: each.company_logo_url,
    employmentType: each.employment_type,
    id: each.id,
    jobDescription: each.job_description,
    location: each.location,
    rating: each.rating,
    title: each.title,
  })

  getJobItemDetails = async () => {
    this.setState({apiState: jobItemApiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const jobDetails = data.job_details
      const similarJobs = data.similar_jobs

      const updatedJobDetails = {
        ...this.convertCase(jobDetails),
        packagePerAnnum: jobDetails.package_per_annum,
        companyWebsiteUrl: jobDetails.company_website_url,
        lifeAtCompany: {
          description: jobDetails.life_at_company.description,
          imageUrl: jobDetails.life_at_company.image_url,
        },
        skills: jobDetails.skills.map(each => ({
          imageUrl: each.image_url,
          name: each.name,
        })),
      }
      const updatedSimilarJobs = similarJobs.map(each => ({
        ...this.convertCase(each),
      }))

      this.setState({
        apiState: jobItemApiConstants.success,
        jobDetails: updatedJobDetails,
        similarJobs: updatedSimilarJobs,
      })
    } else {
      this.setState({
        apiState: jobItemApiConstants.failure,
      })
    }
  }

  renderJobItemFailure = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-h">Oops! Something Went Wrong</h1>
      <p className="failure-p">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="retry-btn"
        onClick={this.getJobItemDetails}
      >
        Retry
      </button>
    </div>
  )

  similarJobCard = jobCardDetails => {
    const {
      companyLogoUrl,
      title,
      employmentType,
      rating,
      location,
      packagePerAnnum,
      jobDescription,
      id,
    } = jobCardDetails
    return (
      <li className="similar-card-container" key={id}>
        <div className="company-container">
          <img
            src={companyLogoUrl}
            alt="similar job company logo"
            className="company-logo"
          />
          <div>
            <h1 className="job-title">{title}</h1>
            <p className="job-rating">
              <BsFillStarFill className="star-icon" /> {rating}
            </p>
          </div>
        </div>
        <h1 className="description-h">Description</h1>
        <p className="description-p">{jobDescription}</p>
        <div className="company-container">
          <div className="company-container">
            <MdLocationOn className="remain-icons" />
            <p className="remain-p">{location}</p>
          </div>
          <div className="company-container">
            <BsFillBriefcaseFill className="remain-icons" />
            <p className="remain-p">{employmentType}</p>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
      </li>
    )
  }

  renderJobItemSuccess = () => {
    const {similarJobs, jobDetails} = this.state
    const {
      companyLogoUrl,
      title,
      employmentType,
      rating,
      location,
      packagePerAnnum,
      jobDescription,
      companyWebsiteUrl,
      lifeAtCompany,
      skills,
    } = jobDetails
    const {description, imageUrl} = lifeAtCompany
    return (
      <div className="job-item-container">
        <div className="job-details-container">
          <div className="company-container">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="company-logo"
            />
            <div>
              <h1 className="job-title">{title}</h1>
              <p className="job-rating">
                <BsFillStarFill className="star-icon" /> {rating}
              </p>
            </div>
          </div>
          <div className="company-container">
            <div className="company-container">
              <MdLocationOn className="remain-icons" />
              <p className="remain-p">{location}</p>
            </div>
            <div className="company-container">
              <BsFillBriefcaseFill className="remain-icons" />
              <p className="remain-p">{employmentType}</p>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>
          <hr className="break-line" />
          <div className="company-container visit">
            <h1 className="description-h">Description</h1>
            <a className="visit-link" href={companyWebsiteUrl}>
              Visit
              <FiExternalLink />
            </a>
          </div>
          <p className="description-p">{jobDescription}</p>
          <h1 className="description-h">Skills</h1>
          <ul className="company-container skill-ul">
            {skills.map(each => (
              <li className="company-container skill-li" key={each.name}>
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="skill-img"
                />
                <p className="description-h">{each.name}</p>
              </li>
            ))}
          </ul>
          <h1 className="description-h">Life at Company</h1>

          <div className="life-company-container">
            <p className="description-p">{description}</p>
            <img src={imageUrl} alt="life at company" />
          </div>
        </div>

        <h1 className="description-h">Similar Jobs</h1>

        <ul className="company-container skill-ul">
          {similarJobs.map(each => this.similarJobCard(each))}
        </ul>
      </div>
    )
  }

  getJobItemLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  getJobItemSwitch = () => {
    const {apiState} = this.state
    switch (apiState) {
      case jobItemApiConstants.success:
        return this.renderJobItemSuccess()
      case jobItemApiConstants.failure:
        return this.renderJobItemFailure()
      case jobItemApiConstants.loading:
        return this.getJobItemLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.getJobItemSwitch()}
      </>
    )
  }
}
export default JobItemDetails
