import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jassherrin</h1>
        <p>Software Engineer Trainee</p>
      </header>
      <section className="Portfolio">
        <h2>Portfolio</h2>
        {/* Add your projects here */}
      </section>
      <section className="About">
        <h2>About Me</h2>
        <p>Your bio and skills</p>
      </section>
      <section className="Contact">
        <h2>Contact Me</h2>
        <p>Email: jassherrin@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
