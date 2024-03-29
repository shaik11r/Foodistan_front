import "./Body.css";
import { Link } from "react-router-dom";
const NewCard = (props)=>{
  const data = props.data.data;
  const url ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card cardstyling classtxt">
      <Link to={`/resturant/${data.id}`}>
        <img src={url + data.cloudinaryImageId} alt="food_image"/>
        <div>
          <div className="na6kb">{data.name}</div>
          <div className="d-flex cusines mt-1 mb-1 flex-wrap">
            {data.cuisines.map((element, index) => {
              return <h6 key={index}>{element}</h6>;
            })}
          </div>
          <div className="d-flex justify-content-evenly">
            <h5 className="lastline">{data.avgRating}⭐</h5>
            <h5 className="lastline">{data.deliveryTime}min</h5>
            <h5 className="lastline">{data.costForTwoString}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default NewCard;
