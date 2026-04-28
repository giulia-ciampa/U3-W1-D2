import { useState } from "react"
import { Alert, Container, Row, Col } from "react-bootstrap"

const MyAlert = function () {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Container className="">
        <Row className="justify-content-center">
          <Col xs={12} lg={6}>
            <Alert
              onClose={() => setShow(false)}
              dismissible
              className="text-center text-dark bg-transparent border-danger border-2 my-3"
            >
              <Alert.Heading className="fs-5">
                Benvenuto nel nostro sito!
              </Alert.Heading>
              <p>Solo per oggi, spedizione gratuita!</p>
            </Alert>
          </Col>
        </Row>
      </Container>
    )
  }
  return null
}

export default MyAlert
