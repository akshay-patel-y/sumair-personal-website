import React from 'react';

interface ProfileProps {
    name: string;
    pic: string;
    bio: string;
    tag: string;
    title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, pic, bio, tag, title }) => {
    return (
        <div>
            <h1 className="typewriter">
                <h1>Hey there, I'm {name}.</h1>
            </h1>

            {/** This is my Profile Section */}
            <div className="profile-container">
                <img className="profile" src={pic} alt={name} />
                <div className="bio-text-container">
                    <p className="typewriter">{title}</p>
                </div>
                <p className="bio">{bio}</p>
                <a href="https://github.com/akshay-patel-y" className="fa fa-github fa-3x"></a>
                <a href="https://www.linkedin.com/in/akshay-patel-/" className="fa fa-linkedin fa-3x"></a>
                <a href="mailto:akshaypatel.y@gmail.com" className="fa fa-envelope fa-3x"></a>
            </div>
        </div>
    );
};

export default Profile;
