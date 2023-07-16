import React from "react";

function MyProject() {
  const projectName = `Hello World`;
  const description = `This is a brief description of my project. This project is for understanding the starter or basics of a React App.`;
  const skills = [`Html`, `Javascript`, `React`];

  return (
    <div>
      <h1>{projectName}</h1>
      <p>{description}</p>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyProject;
