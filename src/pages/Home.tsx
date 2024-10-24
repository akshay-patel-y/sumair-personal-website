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
        bio="This is my journey of curiosity, leadership, and community-building. As a student at The Shri Ram School, I lead the student council, mentor younger students, and pursue the International Baccalaureate. My passion for bridging gaps and empowering others drives my involvement in education equity initiatives and technological innovation. I'm dedicated to connecting people with opportunities and creating environments where everyone can thrive."
        tag="Resume"
        title="University of California, Berkeley M.E.T 22'"
      />
      <ExperienceList />
    </section>
  );
};

export default Home;
