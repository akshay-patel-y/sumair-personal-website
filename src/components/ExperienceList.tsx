import React from "react";
import { experiences } from "../experienceData";
import ExperienceAccordion from "./ExperienceAccordion";

const ExperienceList: React.FC = () => {
    return (
        <div className="experience-list">
            {experiences.map((experience, index) => (
                <ExperienceAccordion key={index} experience={experience} />
            ))}
        </div>
    );
};

export default ExperienceList;