import React from 'react';
import profileImage from '../assets/pictures/me.jpg';

export default function AboutPage() {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-2 pt-5">
          <img
            src={profileImage}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-10 pt-5">
          <p className="fs-5">
            Hi! My name is Sam and I am a student of the PennLPS Web Development Boot Camp. Other than this course I studied programming in college, and before college I have some experience as well, totaling just over 10 years of programming at an intermediate level. I took this course to get myself to the next level of programming and become a professional Web Developer.
            <br></br><br></br>
            I am currently 25 years old and living in University City in Philadelphia. I am a political activist and very active in struggles around the city. My other interests include biking, gaming, and reading.
          </p>
        </div>
      </div>
    </div>
  );
}
