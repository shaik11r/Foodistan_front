import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "../landingpage/Body.css";
import { Link } from "react-router-dom";
function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" className="p-5 shadow-lg">
      <Container className="centering" fluid>
        <Navbar.Brand href="#">Foodistan</Navbar.Brand>
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
          <Form className="d-flex flex-md-nowrap flex-wrap w-50 p-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="w-auto h-auto">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
