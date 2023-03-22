import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
function NavBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Foodistan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placholder="search"
                className="me-2"
                aria-label="Search"
              ></FormControl>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
