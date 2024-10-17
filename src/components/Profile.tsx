import React from "react";
import headshot from "../images/Akshay_Patel.jpg"; // Adjust the path based on your directory structure

interface ProfileProps {
  name: string;
  bio: string;
  tag: string;
  title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, bio, tag, title }) => {
  return (
    <div
    >
      <img
        src={headshot}
        alt="Sumair Ahuja"
        style={{
          width: "100px",
          borderRadius: "10%",
          marginRight: "10px",
        }}
      />
      <h1 className="typewriter">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>hi! i'm {name}.</h1>
        </div>
      </h1>

      {/** This is my Profile Section */}
      <div className="profile-container">
        <p className="bio">{bio}</p>
        <a
          href="https://github.com/akshay-patel-y"
          className="fa fa-github fa-3x"
        ></a>
        <a
          href="https://www.linkedin.com/in/akshay-patel-/"
          className="fa fa-linkedin fa-3x"
        ></a>
        <a
          href="mailto:akshaypatel.y@gmail.com"
          className="fa fa-envelope fa-3x"
        ></a>
      </div>
    </div>
  );
};

export default Profile;
