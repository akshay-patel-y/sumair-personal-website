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
        bio="Welcome to my personal journey—a story of curiosity, action, and community-building. As a student at The Shri Ram School, I lead the student council, mentor younger students, and pursue the International Baccalaureate. Beyond academics, I founded Thrive Today to bridge socioeconomic divides by teaching soft skills to underserved students and Up SportsHub to promote sports culture through upcycling. My work extends to independent research on education equity and cognitive biases in decision-making. Whether organizing leadership programs, conducting research, or exploring STEM projects, I’m driven by a passion to empower others and create environments where everyone can thrive."
        tag="Resume"
        title="University of California, Berkeley M.E.T 22'"
      />
      <ExperienceList />
    </section>
  );
};

export default Home;
