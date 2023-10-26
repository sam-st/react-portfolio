import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <header>
        {/* Navbar or header content if needed */}
      </header>
      <div className="container text-center">
        <div className="pt-5 mt-5">
          <h1 className="mb-5">Welcome to My Portfolio</h1>
          <p>
            I'm a passionate web developer with a strong background in
            programming and a desire to create amazing digital experiences.
            Explore my projects and get to know me better.
          </p>
        </div>
      </div>
    </div>
  );
}
