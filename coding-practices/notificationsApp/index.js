const Notification = (props) => {
  const { className, message, iconLink } = props;
  const containerClassName = `notification ${className}`;

  return (
    <div className={containerClassName}>
      <img src={iconLink} className="icons" />
      <p className="text">{message}</p>
    </div>
  );
};

const element = (
  <div className="notification-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="info"
      iconLink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Information Message"
    />
    <Notification
      className="success"
      iconLink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success Message"
    />
    <Notification
      className="warn"
      iconLink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning Message"
    />
    <Notification
      className="error"
      iconLink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
