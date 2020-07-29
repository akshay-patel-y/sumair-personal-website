import React from 'react'
import Resume from "../images/Resume.pdf"

const Profile = ({ name, pic, bio, tag, title }) => {
    return (
        <div>
            <h1 className="typewriter">
                {' '}
                <h1>Hey there, I'm Akshay. </h1>
            </h1>

            {/** THis is my Profile Section */}
            <div className="profile-container">
                <img className="profile" src={pic} alt="Akshay" />
                <div className="bio-text-container">
                    <p className="typewriter">{title}</p>
                </div>
                <p className="bio">{bio}</p>
                <div class="bio-action">
                    <a href={Resume} target="_blank" rel="noopener noreferrer" class="button">View Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Profile
