import React, { useState, useEffect } from "react";
import headshot from "../images/Sumair.png"; // Adjust the path based on your directory structure
import WebsiteButton from "./WebsiteButton";

interface ProfileProps {
  name: string;
  bio: string;
  tag: string;
  title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, bio, tag, title }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing/deleting

  return (
    <div className="profile-wrapper">
      <img
        src={headshot}
        alt="Sumair Ahuja"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "10%",
          objectFit: "cover",
          objectPosition: "center 20%",
        }}
      />
      <h1>
        <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
          Hi, I'm {name}!
        </div>
      </h1>

      {/** This is my Profile Section */}
      <div className="profile-container">
        <p className="bio">{bio}</p>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <WebsiteButton
            src={require("../images/cv.pdf")}
            label="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
