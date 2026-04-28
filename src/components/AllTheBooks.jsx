import books from "../data/history.json"

import { Card, Button, Container, Row, Col } from "react-bootstrap"

const AllTheBooks = function () {
  return (
    <Container className="my-4">
      <Row className="justify-content-start g-3">
        {books.map((oneBook) => {
          return (
            <Col sm={12} md={6} lg={3} key={oneBook.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={oneBook.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mt-auto mb-auto fs-6">
                    {oneBook.title}
                  </Card.Title>
                  <Card.Text className="mt-1 d-flex justify-content-between">
                    <p>{oneBook.category}</p> <p>{oneBook.price}&euro;</p>
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
