import React, { useState } from "react";
import { Category, experiences } from "../experienceData";
import ExperienceAccordion from "./ExperienceAccordion";

const ExperienceList: React.FC = () => {
  const categories = [
    Category.Economics,
    Category.Education,
    Category.Building,
    Category.Interests,
  ];

  // State to manage open/close state of categories
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Toggle function for categories
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="experience-list">
      {categories.map((category) => (
        <div key={category} className="category-accordion-item">
          <div
            className={`category-accordion-header ${
              openCategory === category ? "open" : ""
            }`}
            onClick={() => toggleCategory(category)}
          >
            <h3 style={{ marginTop: "12px" }}>{category}</h3>
            <span className="category-accordion-icon">
              {openCategory === category ? "-" : "+"}
            </span>
          </div>
          {openCategory === category && (
            <div className="category-accordion-content">
              {experiences
                .filter((experience) => experience.category === category)
                .map((experience, index) => (
                  <ExperienceAccordion key={index} experience={experience} />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
