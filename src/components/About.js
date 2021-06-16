import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        {/* <h5>JOHN</h5> */}
        <img src="/images/broadway.jpeg" alt="portrait-pic" />
      </div>
      <div className="about-text flex" id="work">
        <h2>About Us</h2>
        <div className="about-life">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio
            maxime similique, numquam placeat libero rerum dolor fuga quasi
            mollitia.
          </p>
        </div>
        <div className="about-work">
          <h3>Our Work</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio
            maxime similique, numquam placeat libero rerum dolor fuga quasi
            mollitia.
          </p>
        </div>
        <div className="about-contact">
          <h3>Get in Touch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio
            maxime similique, numquam placeat libero rerum dolor fuga quasi
            mollitia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
