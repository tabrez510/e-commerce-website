import React, { useRef } from "react";
import { Container, Button, Form } from "react-bootstrap";

const ContactUsForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    const response = await fetch(
      "https://http-request-b6341-default-rtdb.firebaseio.com/contactUsData.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    alert('Your response has been submitted');
  };
  return (
    <Container
      style={{ maxHeight: "20rem", maxWidth: "25rem", margin: "4rem auto" }}
    >
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={nameRef} placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" ref={phoneRef} placeholder="Enter Phone" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUsForm;
