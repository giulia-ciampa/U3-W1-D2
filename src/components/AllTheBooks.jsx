import books from "../data/history.json"

import { Card, Button, Container, Row, Col } from "react-bootstrap"

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="justify-content-center g-3">
        {books.map((oneBook) => {
          return (
            <Col sm={12} md={6} lg={3} key={oneBook.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={oneBook.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mt-auto mb-auto">
                    {oneBook.title}
                  </Card.Title>
                  <Card.Text>
                    {oneBook.category} - {oneBook.price}&euro;
                  </Card.Text>
                  <Button variant="danger" className="mt-auto">
                    Aggiungi al carrello
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AllTheBooks
