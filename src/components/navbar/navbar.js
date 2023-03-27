import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { SearchUrl } from "../../utils/Constants";
import store from "../../utils/store";
import "../landingpage/Body.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../utils/searchSlice";
function NavScrollExample() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    console.log(query);
    const Timer = setTimeout(() => {
      if (searchCache[query]) {
        setSuggestions(searchCache[query]);
      } else {
        fetchQueryData();
      }
    }, 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [query]);
  const fetchQueryData = async () => {
    const data = await fetch(`${SearchUrl}&str=${query}`);
    const res = await data.json();
    const newdata = res.data.suggestions;
    setSuggestions(newdata);
    dispatch(
      cacheResults({
        [query]: newdata,
      })
    );
  };
  return (
    <Navbar bg="dark" expand="lg" className="p-5 shadow-lg">
      <Container className="centering" fluid>
        <Navbar.Brand href="/" className="classtxt">
          Foodistan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex classtxt">
              <Link to="/">
                <div className="px-2 ">Home</div>
              </Link>
              <Link to="/about">
                <div className="px-2 ">about</div>
              </Link>
              <Link to="/contact">
                <div className="px-2 ">Contact</div>
              </Link>
            </div>
          </Nav>
          <div className="textarea position-relative">
            <div className="d-flex flex-md-nowrap flex-wrap w-auto p-2">
              <input
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
              />
              <Button variant="outline-success" className="w-auto h-auto">
                Search
              </Button>
            </div>
            {showSuggestions && (
              <div className="suggestionbox">
                {suggestions.map((element) => {
                  return <li>{element.text}</li>;
                })}
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
