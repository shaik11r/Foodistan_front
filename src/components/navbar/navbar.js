import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../landingpage/Body.css";
function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className="p-5 shadow-lg">
      <Container className="centering" fluid>
        <Navbar.Brand href="#" className="">
          Foodistan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="">
              About
            </Nav.Link>
            <Nav.Link href="#action3" className="">
              Contact
            </Nav.Link>
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
