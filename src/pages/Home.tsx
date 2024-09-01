// src/pages/Home.tsx
import React from "react";
import Profile from "../components/Profile";

const Home: React.FC = () => {
  return (
    <section className="profile-section">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Profile
        name="akshay"
        pic={require("../images/headshot.jpg")}
        bio="i'm currently a software engineer at Typeface, where i work on building an ai-powered marking agent for enterprise teams. in addition to my technical role, i'm investing as a scout at Pear VC and Pantera Capital, where i help identify and support promising startups in the ai and blockchain spaces. in my free time, i enjoy exploring the Bay Area, trying out new tech gadgets, and watching FC Barcelona."
        tag="Resume"
        title="University of California, Berkeley M.E.T 22'"
      />
    </section>
  );
};

export default Home;
