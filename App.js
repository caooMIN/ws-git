import {
  Button,
  Card,
  Carousel,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <div className="App">
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/564x/ac/1c/02/ac1c022bf10103109c8649d97dd0969f.jpg"
              alt="First slide"
              id="theClass"
            />
            <Carousel.Caption>
              <h3>Need your gaming setup</h3>
              <p>dont know where to start?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/564x/ab/b0/90/abb09039cf17cab4d5a782ff515d897f.jpg"
              alt="Second slide"
              id="theClass"
            />
            <Carousel.Caption>
              <h3>what to buy ? from where</h3>
              <p>no worries we got u</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body>
              <Card.Title>Dominator-X</Card.Title>
              <Card.Text>
                Intel Core i9 processor, 32GB of lightning-fast DDR4 RAM, and a
                top-of-the-line NVIDIA GeForce RTX 3090 graphics card
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </>
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcU9NBq3ZBTad1FRwhQWK_z0pncSeHQr3LeA&usqp=CAU"
            />
            <Card.Body>
              <Card.Title>Titan-Elite</Card.Title>
              <Card.Text>
                liquid-cooled AMD Ryzen 9 processor, 16GB of DDR4 RAM, and an
                NVIDIA GeForce RTX 3080 graphics card
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </>
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body>
              <Card.Title>TurboBlaze-Xtreme</Card.Title>
              <Card.Text>
                ntel Core i7 processor, 24GB of DDR4 RAM, and a high-performance
                NVIDIA GeForce RTX 3070 graphics card
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </>
      </div>
    </div>
  );
}

export default App;
