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
                <a href="https://github.com/akshay-patel-y" class="fa fa-github fa-3x"></a>

                <a href="https://www.linkedin.com/in/akshay-patel-/" class="fa fa-linkedin fa-3x"></a>

                <a href="mailto:_akshaypatel_@berkeley.edu" class="fa fa-envelope fa-3x"></a>


            </div>
        </div>
    )
}

export default Profile
