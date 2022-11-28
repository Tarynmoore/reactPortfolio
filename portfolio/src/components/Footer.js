import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Github, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div className="footer">
            <footer >
                <Container sm={12} lg={12} >
                    <Row>
                        <Col className="gitLogo">
                        <a href="https://github.com/Tarynmoore">
                            <button
                                className="footButton">
                                <Github size={40} />
                            </button>
                        </a>
                        </Col>
                        <Col>
                        <a href="https://www.linkedin.com/in/taryn-moore-a4466b7a/">
                            <button
                                className="footButton">
                                <Linkedin size={40} />
                            </button>
                        </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}


export default Footer;
