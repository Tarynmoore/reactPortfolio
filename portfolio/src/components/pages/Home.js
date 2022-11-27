import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Home() {
  return (
    <div>
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              I'm Taryn Moore.
            </h1>
            <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
              Welcome! I am a frontend-backend web developer.
              A couple of years ago I was told by a palm reader that I needed to do
              a career that constantly involved me learning, so I chose coding!
              Here you will find showcases of my work, and what languages I am best at.
              Please contact with any questions.
            </h3>
            <hr />
          </div>
        </div>
      </header>

      <div id="about">
      <Container sm lg={12} >
        <Row>
          <Col sm={2} lg={4} >
            <img className="profile-pic" src={process.env.PUBLIC_URL + '/images/profilePic.jpeg'} alt="Profile Pic" />
          </Col>

          <Col sm={4} lg={8}>
            <h2>About Me</h2>
            <p>
              I currently live in Salt Lake City, Utah. I furthered my education
              with the University of Utah's coding program. When I am not coding I enjoy
              practicing yoga, walking my dog, all things Star Wars, and hiking. I am looking
              forward to my career in tech!
            </p>
          </Col>
        </Row>
      </Container>
      </div>

      <div id='skills'>
        <h2 className='size'>
          Skills
        </h2>

        <p>Html/CSS</p>
        <ProgressBar now={90}></ProgressBar>

        <p>Javascript</p>
        <ProgressBar now={75}></ProgressBar>

        <p>React</p>
        <ProgressBar now={70}></ProgressBar>

        <p>Express.js</p>
        <ProgressBar now={60}></ProgressBar>

        <p>Node.js</p>
        <ProgressBar now={40}></ProgressBar>

        <p>MySql</p>
        <ProgressBar now={50}></ProgressBar>

        <p>Git</p>
        <ProgressBar now={80}></ProgressBar>

      </div>
    </div>
  );
}