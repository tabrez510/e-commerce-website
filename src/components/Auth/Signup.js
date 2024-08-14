import React, {useContext, useRef} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseApiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if(!res.ok){
        let error = "SignUp Failed";
        if(data && data.error && data.error.message){
          error = data.error.message;
        }
        throw new Error(error);
      }
      
      authCtx.login(data.idToken, data.email);
      emailInputRef.current.value = '';
      passwordInputRef.current.value = '';
      navigate('/store');

    } catch (err) {
      alert(err.message);
    }
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
          <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
        </Form.Group>
        <Form.Group
          className="mb-3 col-xs-12 col-md-6 mx-auto"
          controlId="formGroupPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
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
