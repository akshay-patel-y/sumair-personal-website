// src/pages/Experience.tsx
import React from "react";
import Modals from "../components/Modal";
import { experiences } from "../experienceData";

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <h2>My Experiences</h2>
      <div className="grid-container">
        {experiences.map((experience, index) => (
          <Modals
            key={index}
            name={experience.name}
            pic={experience.pic}
            description={experience.description || ""}
            timeline={experience.timeline}
            title={experience.title}
            bullets={experience.bullets}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
