import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/projects', { name, description })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Project Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
