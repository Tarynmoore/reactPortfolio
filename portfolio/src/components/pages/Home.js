// import React from "react";
// import profilePic from './image/profilePic.jpeg'
// import 'bootstrap/dist/css/bootstrap.css'
// import Image from "react-bootstrap/Image";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function AboutMe() {
//     return (
//         <div>
//             <Row xs={12}>
//             <h1 className="line name">Hi, I'm Taryn Moore</h1>
//             </Row>
//             <Container >

//                 <Row className="format">
//                     <Col xs={12}>
//                         <h3>Welcome,</h3>
//                         <p>I have spent the past few months furthering my knowledge on frontend and
//                             backend web development. When I am not spending my time studying
//                             I enjoy practing yoga, taking my dog for walks, and creating applications
//                             to practice my coding. Most of my professional career has been spent working
//                             locally. I have completed my associates in Education, and am looking forward
//                             to my career in tech.
//                         </p>
                   
//                     </Col>
//                     <Col>
//                         <Image
//                             src={profilePic}
//                             alt="Taryn Moore"
//                         />
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }


import React from 'react';
export default function Home() {
  return (
    <div>
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              I'm Taryn Moore.
            </h1>
            {/* <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}> */}
            <h3>
              Welcome! I am a frontend-backend web developer.
              A couple of years ago I was told by a palm reader that I needed to do
              a career that constantly involved me learning, so I chose coding!
              Here you will find showcases of my work, and what languages I am best at.
              Please contact with any questions.

            </h3>
            <hr />
            {/* <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul> */}
          </div>
        </div>
        {/* <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p> */}
      </header>

      <section id="about">
        <div className="row">

          <div className="three columns">

            <img className="profile-pic" src="" alt="" />

          </div>

          <div className="nine columns main-col">

            <h2>About Me</h2>
            <p>
              I currently live in Salt Lake City, Utah. I furthered my education
              with the University of Utah's coding program. When I am not coding I enjoy
              practicing yoga, walking my dog, all things Star Wars, and hiking.
            </p>

            {/* <div className="row">

                <div className="columns contact-details">

                   <h2>Contact Details</h2>
                   <p className="address">
                      <span>{resumeData.name}</span>
                      <br></br>
                      <span>
                         {resumeData.address}
                      </span>
                      <br></br>
                      <span>{resumeData.website}</span>
                   </p>
                </div>
             </div> */}
          </div>
        </div>
      </section>


      {/* <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

      </section> */}
    </div>
  );

}