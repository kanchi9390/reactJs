import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const toggleShowContent = () => {
        onToggleShowContent()
      }

      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controller-container">
          <h1 className="controller-heading">Layout</h1>
          <input
            type="checkbox"
            id="content"
            onChange={toggleShowContent}
            defaultChecked="true"
          />
          <label htmlFor="content" className="input-label">
            Content
          </label>
          <br />
          <input
            type="checkbox"
            id="left-navbar"
            onChange={toggleShowLeftNavbar}
            defaultChecked="true"
          />
          <label htmlFor="left-navbar" className="input-label">
            Left Navbar
          </label>
          <br />
          <input
            type="checkbox"
            id="right-navbar"
            onChange={toggleShowRightNavbar}
            defaultChecked="true"
          />
          <label htmlFor="right-navbar" className="input-label">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
