const Shimmer = () => {
  return (
    <div className="d-flex flex-wrap centering">
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="shimmer-card ">
            <div className="shimmer-image"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
