import { Container, Navbar, Nav } from "react-bootstrap"

const MyNav = function () {
  return (
    <>
      <Navbar expand="md" className="bg-danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">EpicFeltrinelli</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav
