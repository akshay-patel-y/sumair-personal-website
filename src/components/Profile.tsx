import React from "react";
import headshot from "../images/Akshay_Patel.jpg"; // Adjust the path based on your directory structure
import ResumeButton from "./ResumeButton";

interface ProfileProps {
  name: string;
  bio: string;
  tag: string;
  title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, bio, tag, title }) => {
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>Hi! I'm {name}.</h1>
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
            marginBottom: "20px"
          }}
        >
          <ResumeButton />
          <a
            href="https://www.linkedin.com/in/sumair-ahuja-610517257/?originalSubdomain=in"
            className="fa fa-linkedin fa-3x"
            style={{ color: "#00356B" }} // Optional: Set a color for icons (Yale Blue here)
          ></a>
          <a
            href="mailto:someone@example.com"
            className="fa fa-envelope fa-3x"
            style={{ color: "#00356B" }} // Optional: Set a color for icons (Yale Blue here)
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
