import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restUrl, imgurl } from "../../utils/Constants";
import "./Body.css";
import Shimmer from "./Shimmer";

const RestPage = () => {
  const [resData, setResData] = useState([]);
  const [resItems, setResItems] = useState([]);
  const id = useParams();
  console.log(id.id);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const appData = await fetch(`${restUrl}&restaurantId=${id.id}`);
    const res = await appData.json();
    const resdata = res?.data.cards[0].card.card.info;
    const resitems = res?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    setResData(resdata);
    setResItems(resitems);
  }
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="resturant-page">
      <h1>{resData?.name}</h1>
      <h2>{resData?.city}</h2>
      <div className="resturant-allitems">
        {resItems?.map((items, i) => (
          <div key={i} className="resturant-heading">
            <h1>{items?.card?.card?.title}</h1>
            {items?.card?.card?.itemCards?.map((res, j) => {
              return (
                <div key={j} className="resturant-items">
                  <h4>{res?.card?.info?.name}</h4>
                  <div className="resturant-head">
                    <img src={imgurl + res?.card?.info?.imageId} alt="image" />
                    <div className="resturant-button">
                      <button>ADD</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestPage;
