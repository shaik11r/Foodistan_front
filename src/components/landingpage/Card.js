import "./Body.css";
const Card = (props) => {
  const url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const data = props.data;
  return (
    <div className="card cardstyling">
      <img src={url + data.cloudinaryImageId} alt="foodimage" />
      <div>
        <div className="na6kb">{data.name}</div>
        <div className="d-flex cusines mt-1 mb-1 flex-wrap">
          {data.cuisines.slice(0, 3).map((element, index) => {
            return <h6 key={index}>{element} </h6>;
          })}
        </div>
        <div className="d-flex justify-content-evenly">
          <h5 className="lastline">{data.avgRating}⭐</h5>
          <h5 className="lastline">{data.deliveryTime}min</h5>
          <h5 className="lastline">{data.costForTwoString}</h5>
        </div>
      </div>
    </div>
  );
};
export default Card;
