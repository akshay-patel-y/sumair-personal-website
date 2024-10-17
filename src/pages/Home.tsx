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
        name="sumair"
        bio="i'm currently a software engineer at typeface ai, where i work on building an ai-powered marketing agent for enterprise teams. in addition to my technical role, i'm investing as a scout at pear vc and pantera capital, where i help identify and support promising startups in the ai and blockchain spaces. in my free time, i enjoy exploring the bay area, trying out new tech gadgets, and watching fc barcelona."
        tag="Resume"
        title="University of California, Berkeley M.E.T 22'"
      />
    </section>
  );
};

export default Home;
