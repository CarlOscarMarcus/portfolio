import React from 'react';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>Your Name</h1>
        <p>Software Engineer | Web Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>Brief intro about yourself, your skills, and goals.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><a href="https://github.com/yourusername/project1" target="_blank" rel="noreferrer">Project 1</a> - Short description</li>
          <li><a href="https://github.com/yourusername/project2" target="_blank" rel="noreferrer">Project 2</a> - Short description</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">yourprofile</a></p>
      </section>
    </div>
  );
}

export default App;
