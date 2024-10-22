import React from "react";

interface WebsiteButtonProps {
  src: string;
  label: string;
}

const WebsiteButton: React.FC<WebsiteButtonProps> = ({ src, label }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#333",
          color: "#fafafa",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontFamily: "Commit Mono, monospace",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          const button = e.currentTarget;
          button.style.backgroundColor = "#fafafa";
          button.style.color = "#333";
          button.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          const button = e.currentTarget;
          button.style.backgroundColor = "#333";
          button.style.color = "#fafafa";
          button.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
        }}
      >
        {label}
      </a>
    </div>
  );
};

export default WebsiteButton;
