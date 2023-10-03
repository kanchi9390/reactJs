import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import FilterJobs from '../FilterJobs'
import SearchInput from '../SearchInput'
import JobCard from '../JobCard'
import './index.css'

const jobsApiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    searchInput: '',
    employeeType: [],
    salaryRange: '',
    jobsObject: {},
    apiConstant: jobsApiConstants.initial,
  }

  componentDidMount() {
    this.getJobsList()
  }

  getJobsList = async () => {
    this.setState({apiConstant: jobsApiConstants.loading})
    const {searchInput, employeeType, salaryRange} = this.state
    const Type = employeeType.join(',')
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${Type}&minimum_package=${salaryRange}&search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const {jobs, total} = data
      const jobsList = jobs.map(each => ({
        companyLogoUrl: each.company_logo_url,
        employmentType: each.employment_type,
        id: each.id,
        jobDescription: each.job_description,
        location: each.location,
        packagePerAnnum: each.package_per_annum,
        rating: each.rating,
        title: each.title,
      }))
      const updatedJobsObject = {jobsList, total}
      this.setState({
        jobsObject: updatedJobsObject,
        apiConstant: jobsApiConstants.success,
      })
    } else {
      this.setState({apiConstant: jobsApiConstants.failure})
    }
  }

  renderJobsSuccess = () => {
    const {jobsObject} = this.state
    const {jobsList, total} = jobsObject
    if (total !== 0) {
      return (
        <ul className="jobs-list-container">
          {jobsList.map(each => (
            <JobCard jobCardDetails={each} key={each.id} />
          ))}
        </ul>
      )
    }
    return (
      <div className="no-jobs-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
          className="no-jobs-found-img"
        />
        <h1 className="no-jobs-found-h">No Jobs Found</h1>
        <p className="no-jobs-found-p">
          We could not find any jobs. Try other filters
        </p>
      </div>
    )
  }

  onRetryBtn = () => {
    this.getJobsList()
  }

  renderJobsFailure = () => (
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
      <button type="button" className="retry-btn" onClick={this.onRetryBtn}>
        Retry
      </button>
    </div>
  )

  getJobsLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onChangeSearchInput = value => {
    this.setState({searchInput: value})
  }

  onClickSearchIcon = () => {
    this.getJobsList()
  }

  onChangeEmployeeType = value => {
    const {employeeType} = this.state
    if (employeeType.includes(value)) {
      const updatedEmployeeType = employeeType.filter(each => each !== value)
      this.setState({employeeType: updatedEmployeeType}, this.getJobsList)
    } else {
      this.setState({employeeType: [...employeeType, value]}, this.getJobsList)
    }
  }

  onChangeSalaryRange = value => {
    this.setState({salaryRange: value}, this.getJobsList)
  }

  getSwitch = () => {
    const {apiConstant} = this.state
    switch (apiConstant) {
      case jobsApiConstants.success:
        return this.renderJobsSuccess()
      case jobsApiConstants.failure:
        return this.renderJobsFailure()
      case jobsApiConstants.loading:
        return this.getJobsLoader()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="container">
            <SearchInput
              screenType="mobile"
              searchInput={searchInput}
              onChangeSearchInput={this.onChangeSearchInput}
              onClickSearchIcon={this.onClickSearchIcon}
            />
            <FilterJobs
              onChangeEmployeeType={this.onChangeEmployeeType}
              onChangeSalaryRange={this.onChangeSalaryRange}
            />
          </div>
          <div className="container">
            <SearchInput
              screenType="desktop"
              searchInput={searchInput}
              onChangeSearchInput={this.onChangeSearchInput}
              onClickSearchIcon={this.onClickSearchIcon}
            />
            {this.getSwitch()}
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
