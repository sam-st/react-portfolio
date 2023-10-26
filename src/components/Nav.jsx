import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  useEffect(() => {
    // Initialize Bootstrap collapse when the component mounts
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    toggleButton.addEventListener('click', () => {
      navbarNav.classList.toggle('show');
    });

    return () => {
      // Remove event listener when the component unmounts
      toggleButton.removeEventListener('click');
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand fs-4">
          Sam Steines ☭
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link me-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link me-3">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
