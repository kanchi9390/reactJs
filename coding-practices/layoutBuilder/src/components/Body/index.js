import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-content">
              <h1 className="content-heading">Left Navbar Menu</h1>
              <ul>
                <li className="left-content-item">Item 1</li>
                <li className="left-content-item">Item 2</li>
                <li className="left-content-item">Item 3</li>
                <li className="left-content-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="center-content">
              <h1 className="content-heading">Content</h1>
              <p className="left-content-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-content">
              <h1 className="content-heading">Right Navbar</h1>
              <div className="content-item-box">
                <p className="left-content-item">Ad 1</p>
              </div>
              <div className="content-item-box">
                <p className="left-content-item">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
