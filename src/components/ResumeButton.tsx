import React from "react";

const ResumeButton: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <a
        href="https://docs.google.com/document/d/1Jn0g1x-R7oWsRrjMyZ6ZrD9DcxCwQLLQ/edit"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#00356B", // Yale Blue
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontFamily: "Commit Mono, monospace",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          const button = e.currentTarget;
          button.style.backgroundColor = "#005BB5"; // Lighter Yale Blue on hover
          button.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          const button = e.currentTarget;
          button.style.backgroundColor = "#00356B"; // Reset to original Yale Blue
          button.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
        }}
      >
        View My Resume
      </a>
    </div>
  );
};

export default ResumeButton;
