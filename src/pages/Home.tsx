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
        bio="This is my personal journey of curiosity, action, and community-building. As a student at The Shri Ram School, I lead the student council, mentor younger students, and pursue the International Baccalaureate. Throughout my experiences, I've sought to bridge gaps, empower others, and create solutions. From education equity initiatives to technological innovation, I'm driven by connecting people with opportunities and fostering environments where everyone can thrive."
        tag="Resume"
        title="University of California, Berkeley M.E.T 22'"
      />
      <ExperienceList />
    </section>
  );
};

export default Home;
