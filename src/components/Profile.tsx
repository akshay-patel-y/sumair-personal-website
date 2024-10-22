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
  const messages = [`Hi! I'm ${name}.`, "Welcome to my website!"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing/deleting

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const fullText = messages[currentMessageIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // When the typing is done
    if (!isDeleting && displayedText === fullText) {
      // Wait for 2 seconds before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      // Move to the next message after deleting
      setIsDeleting(false);
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex, messages, typingSpeed]);

  return (
    <div className="profile-wrapper">
      {/* <img
        src={headshot}
        alt="Sumair Ahuja"
        style={{
          width: "100px",
          borderRadius: "10%",
          marginRight: "10px",
        }}
      /> */}
      <h1 className="typewriter">
        <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
          {displayedText}
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
            src="https://docs.google.com/document/d/1Jn0g1x-R7oWsRrjMyZ6ZrD9DcxCwQLLQ/edit"
            label="Resume"
          />
          <a
            href="https://www.linkedin.com/in/sumair-ahuja-610517257/?originalSubdomain=in"
            className="fa fa-linkedin fa-3x"
          ></a>
          <a
            href="mailto:someone@example.com"
            className="fa fa-envelope fa-3x"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
