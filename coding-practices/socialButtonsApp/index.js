const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="social-buttons-bg">
    <h1 className="social-buttons-h">Social Buttons</h1>
    <div className="social-buttons-container">
      <Button className="social-button-like" buttonText="Like" />
      <Button className="social-button-comment" buttonText="Comment" />
      <Button className="social-button-share" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
