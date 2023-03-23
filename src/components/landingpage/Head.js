import "./Body.css";
import "bootstrap/dist/css/bootstrap.css";

const Head = () => {
  return (
    <div className="container-fluid centering">
      <div className="d-flex justify-content-between align-items-center pt-4 pb-5">
        <h1>Resturants</h1>
        <ul className="list-unstyled d-flex justify-content-between">
          <li>Relavence</li>
          <li>Delivery Time</li>
          <li>Rating</li>
          <li>Cost:Low to high</li>
          <li>Cost:High to low </li>
        </ul>
      </div>
    </div>
  );
};
export default Head;
