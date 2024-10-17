// src/pages/Home.tsx
import React from "react";
import Profile from "../components/Profile";
import ExperienceList from "../components/ExperienceList";

const Home: React.FC = () => {
  return (
    <section className="profile-section">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Profile
        name="Sumair"
        bio="I'm currently a student at The Shri Ram School, pursuing the International Baccalaureate while leading several initiatives in leadership and education equity. I head the student council, where I manage a 28-member team, organize school events, and mentor younger students. Alongside my school responsibilities, I'm deeply involved in initiatives such as Up SportsHub, where I promote sports culture through upcycling, and Thrive Today, where I help cultivate leadership and communication skills for students from economically weaker sections. In my free time, I enjoy playing basketball, exploring new STEM projects, and volunteering to teach life skills through sports."
        tag="Resume"
        title="University of California, Berkeley M.E.T 22'"
      />
      <ExperienceList />
    </section>
  );
};

export default Home;
