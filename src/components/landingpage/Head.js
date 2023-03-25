import "./Body.css";
import "bootstrap/dist/css/bootstrap.css";

const Head = () => {
  return (
    <div className="centering">
      <div className="d-flex justify-content-between align-items-center pt-4 pb-5">
        <h1>Resturants</h1>
        <div className="menu-container">
          <ul className="list-unstyled d-flex justify-content-between">
            <li>Relavence</li>
            <li>Delivery Time</li>
            <li>Rating</li>
            <li>Cost:Low to high</li>
            <li>Cost:High to low </li>
          </ul>
        </div>
        <div className="menu-responsive">
          <select class="form-select">
            <option value="Relavence">Relavence</option>
            <option value="Delivery Time">Delivery Time</option>
            <option value="Rating">Rating</option>
            <option value="Cost:Low to high">Cost:Low to high</option>
            <option value="Cost:High to low">Cost:High to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Head;
