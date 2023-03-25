import "./Body.css";
const ShimmerResturant = () => {
  return (
    <div className="shimmer-heading centering">
      <div className="shimmer-allitems">
        {Array(5)
          .fill(" ")
          .map((e) => (
            <div className="shimmer-heading">
              {Array(10)
                .fill(" ")
                .map((e) => (
                  <div className="shimmer-items d-flex">
                    <div className="shimmer-head"></div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};
export default ShimmerResturant;
