import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Portfolio() {
  return (
    <div className="card">
      <Row xs={1} md={2}>
        <Col>
          <Card border="dark" className="cardStyle">
            <Card.Img variant="top" 
            src={process.env.PUBLIC_URL + '/images/work/resumeIllustration.jpeg'} 
            alt="resume" 
            />
            <Card.Body>
              <Card.Title>Resume Builder</Card.Title>
              <Card.Text>
                This application was built using Handbars.js, node.js, express.js,
                mysql, and sequelizer. The client chooses a template for their resume,
                inputs their information, and their information will show on the template
                that they chose.
              </Card.Text>
              <Card.Link href="https://github.com/LimeRicky84/stunning-chainsaw">
                GitHub</Card.Link>
              <Card.Link href="https://stunning-chainsaw.herokuapp.com/">
                Deployed App</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card border="dark" className="cardStyle">
            <Card.Img variant="top"  
            src={process.env.PUBLIC_URL + '/images/work/planner.jpeg'} 
            alt="resume" />
            <Card.Body>
              <Card.Title>Daily Planner</Card.Title>
              <Card.Text>
                This application works as a daily planner. Using jQuery and Moment,js
                you are able to save your plan for the hour. As time goes on throughout the daily
                the planner will change colors. Your plans are also saved to localstorage so you won't be
                able to miss them!
              </Card.Text>
              <Card.Link href="https://github.com/Tarynmoore/Daily-Planner">
                GitHub</Card.Link>
              <Card.Link href="https://tarynmoore.github.io/Daily-Planner/">
                Deployed App</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row xs={1} md={2}>
        <Col>
          <Card border="dark" className="cardStyle">
            <Card.Img variant="top"  
            src={process.env.PUBLIC_URL + '/images/work/socialmedia.jpeg'} 
            alt="resume"  />
            <Card.Body>
              <Card.Title>Social Media</Card.Title>
              <Card.Text>
                This application must be used in Insomnia. This is a mock social media application that uses CRUD operations.
                Through NoSql and MongoDb you are able to get all users and each user has friends
                and thoughts that other friends can react to. You are able to delete friends/thoguhts/reactions.
              </Card.Text>
              <Card.Link href="https://github.com/Tarynmoore/Social-Media">
                GitHub</Card.Link>
              <Card.Link href="https://youtu.be/UYBTgoDr7is">
                Deployed App</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card border="dark" className="cardStyle">
            <Card.Img 
            className="fans"
            variant="top" 
             src={process.env.PUBLIC_URL + '/images/work/fansOnly.jpeg'}
            alt="resume"  />
            <Card.Body>
              <Card.Title>Fans-Only</Card.Title>
              <Card.Text>
                This application is for people who are fans of anything! When you type in the name in the search bar the page will show a giph
                and list of youtube video's you can view! This app uses 2 API's, html, css, and javascript.
              </Card.Text>
              <Card.Link href="https://github.com/rtarasevich/Fans-Only">
                GitHub</Card.Link>
              <Card.Link href="https://rtarasevich.github.io/Fans-Only/">
                Deployed App</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

