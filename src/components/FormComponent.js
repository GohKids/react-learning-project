import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const FormComponent = () => {
  const InputTest = (event) => {
    console.log(event.target.value);
  }
  return (
     <div>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" onChange={InputTest}></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
     </div>
  )
}

export default FormComponent;