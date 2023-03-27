const Shimmer = (props) => {
  return (
    <div className="d-flex flex-wrap centering">
      {Array(props.number)
        .fill("")
        .map((e) => (
          <div className="shimmer-card ">
            <div className="shimmer-image"></div>
            <div className="shimmer_bar"></div>
            <div className="shimmer_bar"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
