import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your custom submit logic here
    console.log("Form submitted");
  };
  return (
    <Container className="mt-5 mb-5 pt-5 pb-5">
      <Form onSubmit={handleSubmit}>
        <h3 className="mb-5 text-center">SignUp</h3>
        <Form.Group
          className="mb-3 col-xs-12 col-md-6 mx-auto"
          controlId="formGroupEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group
          className="mb-3 col-xs-12 col-md-6 mx-auto"
          controlId="formGroupPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="col-xs-12 col-md-6 mx-auto">
          <Button variant="primary" type="submit">
            SignUp
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Signup;
