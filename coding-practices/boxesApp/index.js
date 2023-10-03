const Box = (props) => {
  const { className, boxSize } = props;
  const boxes = `box ${className}`;
  return <div className={boxes}>{boxSize}</div>;
};

const element = (
  <div className="boxes-bg">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" boxSize="Small" />
      <Box className="medium-box" boxSize="Medium" />
      <Box className="large-box" boxSize="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
