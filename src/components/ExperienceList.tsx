import React from "react";
import { Category, experiences } from "../experienceData";
import ExperienceAccordion from "./ExperienceAccordion";

const ExperienceList: React.FC = () => {
  const categories = [Category.Software, Category.VentureCapital, Category.Product];

  return (
    <div className="experience-list">
      {categories.map((category) => (
        <div key={category}>
          <h3>{category} Experience</h3>
          {experiences
            .filter((experience) => experience.category === category)
            .map((experience, index) => (
              <ExperienceAccordion key={index} experience={experience} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
