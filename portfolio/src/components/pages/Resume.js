import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import pdf from './image/resume22.pdf's

export default function Resume() {
    return (
        <div className="resume">
            <Col>
                <a className="download"
                    href={process.env.PUBLIC_URL + '/images/resume22.pdf'} download>
                    Download my resume!
                </a>
            </Col>
            <img src={process.env.PUBLIC_URL + '/images/resume1.jpeg'} alt="resume" />
            <img src={process.env.PUBLIC_URL + '/images/resume2.jpeg'} alt="resume" />
        </div>
    )
}


