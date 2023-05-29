  import React from "react";
  import Location from "./Location";
  import "./About.css";

  function About() {
    return (
      <div className="location-center">
        <Location title="about" />
        <div className="story">
          <div className="img-container">
            <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
              alt=""
            />
          </div>
          <div className="story-desc">
            <h1>Our Story</h1>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              inventore est quod, recusandae hic laudantium commodi quis
              perspiciatis unde earum molestiae! Neque, quasi explicabo laudantium
              eveniet harum magnam cumque, provident rem corrupti ex nam saepe est
              doloremque nostrum suscipit. Facilis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Necessitatibus recusandae eius
              impedit. Molestiae, cum itaque. Vero amet, corrupti voluptatum
              accusantium consequatur sint in dolore quasi provident deleniti
              voluptate id nobis! lorem
            </p>
          </div>
        </div>
      </div>
    );
  }

  export default About;
