import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id}>{project.name} - {project.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
