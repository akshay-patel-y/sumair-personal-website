import React from "react";
import Profile from "./components/Profile";
import Modals from "./components/Modal";
import Particles from "react-particles-js";
import { experiences } from "./experienceData";

function App() {
  return (
    <div className="">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 7000,
              },
            },
            size: {
              value: 5,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        style={{
          width: "100%",
          zIndex: "-1",
          position: "fixed",
        }}
      />
      <div className="main">
        <Profile
          name="Akshay Patel"
          pic={require("./images/headshot.jpg")}
          bio="I'm currently a student in UC Berkeley's Management, Entrepreneurship, and Technology (M.E.T.) program, pursuing a dual degree in Electrical Engineering and Computer Science and Business Administration. Through my varied work experiences from start-ups to corporations of all sizes, I have developed skills in product management, software development, and data analysis. Please feel free to reach out at _akshaypatel_@berkeley.edu."
          tag="Resume"
          title="University of California, Berkeley M.E.T 23'"
        />
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

      <div className="content">
        <div className="test">
          <h2>My Experiences</h2>
        </div>
        <div className="grid-container">
          {experiences.map((experience: any , index: React.Key | null | undefined) => (
            <Modals
              key={index}
              name={experience.name}
              pic={experience.pic}
              description={experience.description}
              timeline={experience.timeline}
              title={experience.title}
              bullets={experience.bullets}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
