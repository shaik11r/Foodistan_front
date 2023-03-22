import { useEffect, useState } from "react";
import Url from "../../utils/Constants";
import { baseurl } from "../../utils/Constants";
import Card from "./Card";
import "./Body.css";
import NewCard from "./NewCard";
const Body = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(15);
  const [first, setFirst] = useState(false);
  const [newdata, setNewData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const appData = await fetch(Url);
    const res = await appData.json();
    const data = res.data.cards[2].data.data.cards;
    setData(data);
    setFirst(true);
  }
  async function newFetchData() {
    if (first) {
      const newAppData = await fetch(baseurl + `&offset=${offset}`);
      const res = await newAppData.json();
      const newData = res.data.cards;
      setNewData((prevdata) => {
        return [...prevdata, ...newData];
      });
    }
  }
  useEffect(() => {
    if (offset < 100) {
      newFetchData();
    }
  }, [offset]);
  console.log(newdata);
  console.log(offset);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setOffset((prev) => prev + 16);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid centering ">
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
      <div className="CardBody d-flex flex-wrap">
        {data.map((res) => {
          return <Card key={res.id} {...res} />;
        })}
        {newdata.map((res) => {
          return <NewCard key={res.id} {...res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
