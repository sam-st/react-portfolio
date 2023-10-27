import React from 'react';

export default function ResumePage() {
  return (
    <div className="container">
      <h2>Resume</h2>
      <p>Download my resume: <a href="../src/assets/Sam Steines Resume.pdf" download>Resume.pdf</a></p>
      <h3>Proficiencies</h3>
      <ul>
        <li>Web Development</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
}
