import React from 'react';
import './About.css';
import ImageMe from '../About/img_me.png';

const About = () => {
    return (
        <div className="aboutContainer">
            {/* <h2 className="text-center">About Me</h2> */}
            <img className="imageMe" src={ImageMe} alt="image_of_me"/>
            <p>My name is Joe Hancock and i'm a full-stack web developer based in Austin, Texas. 
                My passions include synthesizers, digital art, and computers. Plume is my personal
                art and web development brand and can be viewed in the next page.
            </p>
        </div>
    )
}

export default About;