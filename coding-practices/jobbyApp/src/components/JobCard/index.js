import {Link} from 'react-router-dom'
import {BsFillStarFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobCardDetails} = props
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
    <li className="job-card-container">
      <Link to={`/jobs/${id}`} className="link">
        <div className="company-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
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
        <h1 className="description-h">Description</h1>
        <p className="description-p">{jobDescription}</p>
      </Link>
    </li>
  )
}
export default JobCard
