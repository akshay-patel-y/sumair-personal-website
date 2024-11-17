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
        bio="Welcome to my journey of curiosity, leadership, and community-building. As a student at The Shri Ram School Moulsari, I lead the student council, mentor younger students, and pursue the International Baccalaureate. My passion for bridging gaps and empowering others drives my involvement in education equity initiatives like Thrive Today, where I help students from marginalized backgrounds build confidence and navigate challenges. Through my research on economic progress and cognitive biases in sports, I explore innovative ways to solve real-world problems, blending my curiosity with a desire to make a lasting impact. Whether it's creating accessible learning tools or using sports to foster leadership, I'm dedicated to connecting people with opportunities and creating environments where everyone can thrive."
        tag="Resume"
        title="University of California, Berkeley M.E.T 22'"
      />
      <ExperienceList />
    </section>
  );
};

export default Home;
