import UserProfile from '../UserProfile'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const FilterJobs = props => {
  const {onChangeEmployeeType, onChangeSalaryRange} = props

  const onEmployeeType = event => {
    onChangeEmployeeType(event.target.value)
  }

  const onSalaryRange = event => {
    onChangeSalaryRange(event.target.value)
  }

  const renderEmploymentTypes = () => (
    <>
      <hr className="break-line" />
      <h1 className="employees-types-heading">Type of Employment</h1>
      <ul className="employee-types-container">
        {employmentTypesList.map(each => (
          <li key={each.employmentTypeId}>
            <input
              type="checkbox"
              value={each.employmentTypeId}
              id={each.employmentTypeId}
              onChange={onEmployeeType}
            />
            <label
              className="employee-types-label"
              htmlFor={each.employmentTypeId}
            >
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  )

  const renderSalaryRanges = () => (
    <>
      <hr className="break-line" />
      <h1 className="employees-types-heading">Salary Range</h1>
      <ul className="employee-types-container">
        {salaryRangesList.map(each => (
          <li key={each.salaryRangeId}>
            <input
              type="radio"
              value={each.salaryRangeId}
              name="salary"
              id={each.salaryRangeId}
              onChange={onSalaryRange}
            />
            <label
              className="employee-types-label"
              htmlFor={each.salaryRangeId}
            >
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <div className="filter-container">
      <UserProfile />
      {renderEmploymentTypes()}
      {renderSalaryRanges()}
    </div>
  )
}
export default FilterJobs
