import React, { useState } from "react";
import { Experience } from "../experienceData";
import ImageCarousel from "./ImageCarousel";
import ButtonRow from "./ButtonRow";

interface ExperienceAccordionProps {
  experience: Experience;
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  experience,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <img
          className="accordion-image"
          src={experience.pic}
          alt={`${experience.name} logo`}
        />
        <div className="accordion-title">
          <h2>{experience.title}</h2>
          <p>
            {experience.name} - {experience.timeline}
          </p>
        </div>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <>
          <div className="accordion-content">
            <div className="accordion-details">
              {experience.description && <p>{experience.description}</p>}
              <ul>
                {experience.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <ImageCarousel images={experience.images} />
          <ButtonRow buttons={experience.buttons}/>
        </>
      )}
    </div>
  );
};

export default ExperienceAccordion;
