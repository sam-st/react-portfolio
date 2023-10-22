import React from 'react';
import projectsData from '../components/projectsData';

function ProjectsPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {/* Your project list goes here */}
          <h2>Project List</h2>
          <ul className="list-group">
            {projectsData.map((project) => (
              <li key={project.id} className="list-group-item">
                <a href={`/projects/${project.id}`}>{project.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          {/* Content for the selected project */}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;