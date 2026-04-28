import { useState } from "react" //useState è un hook di React, Serve per gestire lo stato, cioè dei dati che possono cambiare nel tempo.
import { Alert, Container, Row, Col } from "react-bootstrap"

const MyAlert = function () {
  const [show, setShow] = useState(true) // show è una variabile che dice se mostrare l'alert

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
