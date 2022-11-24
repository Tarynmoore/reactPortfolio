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
          </div>
        </div>
      </section>






    </div>
  );

}