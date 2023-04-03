import "./Body.css";
import "bootstrap/dist/css/bootstrap.css";
import { SortUrl } from "../../utils/Constants";
import { useEffect, useState } from "react";
import Card from "./Card";
const Head = () => {
  const [sortMethod, setSortMethod] = useState("RELEVANCE");
  const [sortdata, setSortData] = useState([]);
  const [showSort, setShowSort] = useState(false);
  useEffect(() => {
    fetchsortData();
  }, [sortMethod]);
  function handleClick(type) {
    setSortMethod(type);
  }
  async function fetchsortData() {
    const sortdata = await fetch(`${SortUrl}&sortBy=${sortMethod}`);
    const res = await sortdata.json();
    const fdata = res.data.cards[0].data.data.cards;
    setSortData(fdata);
  }
  return (
    <div className="centering">
      <div className="d-flex justify-content-between align-items-center pt-4 pb-5">
        <h1>Resturants</h1>
        <div className="menu-container">
          <ul className="list-unstyled d-flex justify-content-between">
            <li>Relavence</li>
            <li
              onClick={() => {
                handleClick("DELIVERY_TIME");
              }}
            >
              Delivery Time
            </li>
            <li
              onClick={() => {
                handleClick("RATING");
              }}
            >
              Rating
            </li>
            <li
              onClick={() => {
                handleClick("COST_FOR_TWO");
              }}
            >
              Cost:Low to high
            </li>
            <li
              onClick={() => {
                handleClick("COST_FOR_TWO_H2L");
              }}
            >
              Cost:High to low{" "}
            </li>
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
      {sortdata.length > 8 && (
        <div className="container-fluid centering">
          <div className="CardBody d-flex flex-wrap">
            {sortdata.map((value) => {
              return <Card key={value.data.id} {...value} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Head;
