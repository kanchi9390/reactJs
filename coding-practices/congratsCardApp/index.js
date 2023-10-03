const element = (
  <div className="congrats-card-app-bg-container">
    <h1 className="congrats-card-app-heading">Congratulations</h1>
    <div className="congrats-card-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="person-img"
      />
      <h1 className="person-name">Kiran V</h1>
      <p className="congrats-card-paragraph">
        Vishnu Institute of Computer Education and Technology
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
