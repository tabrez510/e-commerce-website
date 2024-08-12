import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faSpotify,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B5ED7", padding: "10px 0", marginTop: "1.5rem" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <h1 style={{color: "white"}}>The Generics</h1>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-5"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="https://www.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-5"
            >
              <FontAwesomeIcon icon={faSpotify} size="2x" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
