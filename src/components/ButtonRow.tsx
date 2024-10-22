import React from "react";
import WebsiteButton from "./WebsiteButton"; // Assuming WebsiteButton is in the same directory

interface Button {
  src: string;
  label: string;
}

interface ButtonRowProps {
  buttons: Button[];
}

const ButtonRow: React.FC<ButtonRowProps> = ({ buttons }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        padding: "10px",
        background: "#fafafa",
      }}
    >
      {buttons.map((button, index) => (
        <WebsiteButton key={index} src={button.src} label={button.label} />
      ))}
    </div>
  );
};

export default ButtonRow;
