import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../components/projectsData';

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id.toString() === id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {/* Your project list goes here */}
          <h2>Project List</h2>
          <ul className="list-group">
            {projectsData.map((p) => (
              <li key={p.id} className="list-group-item">
                <a href={`/projects/${p.id}`}>{p.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;