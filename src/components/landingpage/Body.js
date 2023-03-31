import { useEffect, useState } from "react";
import Url from "../../utils/Constants";
import { baseurl } from "../../utils/Constants";
import Card from "./Card";
import "./Body.css";
import NewCard from "./NewCard";
import "bootstrap/dist/css/bootstrap.css";
import Shimmer from "./Shimmer";

const Body = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(15);
  const [first, setFirst] = useState(false);
  const [newdata, setNewData] = useState([]);

  //fetching data first api
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const appData = await fetch(Url);
    const res = await appData.json();
    const data = res.data.cards[2].data.data.cards;
    setData(data); //setdata for intial
    setFirst(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setOffset((prev) => prev + 16);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (offset < 100) {
      newFetchData();
    }
  }, [offset]);

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

  // console.log(newdata);
  // console.log(offset);

  return data.length === 0 ? (
    <Shimmer number={16} />
  ) : (
    <>
      <div className="container-fluid centering">
        <div className="CardBody d-flex flex-wrap">
          {data.map((res) => {
            return <Card key={res.id} {...res} />;
          })}
          {newdata.length === 0 ? (
            <Shimmer number={0} />
          ) : (
            newdata.map((res) => {
              return <NewCard key={res.id} {...res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Body;
