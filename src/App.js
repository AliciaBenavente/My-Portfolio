import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  // const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === '' || form.email === '') {
      console.log('Please fill in your name and email');
      setError(true);
      return;
    }
    // setSubmitted(true);
    setError(false);
  }

  return (
    <div className="container App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

        <section id='about' className="">
          <h1>Welcome to my portfolio</h1>
          <p>From doing research in laboratories....</p>
          <p>To writing code and exploring documentations</p>
        </section>
        <div id='stacks' className="">
          <h1>Stacks</h1>
          <div>
            <ul>Front-end:
              <li>React</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Bootstrap</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <ul>Back-end:
              <li>Node.js</li>
              <li>Python</li>
              <li>Flask</li>
              <li>SQLAlquemy</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <ul>Tools:
              <li>Visual Studio Code</li>
              <li>GitHub</li>
              <li>Postman</li>
              <li>Jira</li>
              <li>Trello</li>
              <li>Miró</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div id='projects' className="">
          <h1>Projects</h1>
          <p>Más Buenos Que El Pan</p>
          <p>SALO</p>
        </div>
        <div id='contact' className="container2">
          <div className="login-box">
            <form onSubmit={handleSubmit} className="form2">
              {/* <div className="logo"></div> */}
              <span className="header">Contact</span>
              <input type="name"
                placeholder="Name"
                className="input"
                id='name'
                value={form.name}
                onChange={handleChange}
              />
              <input type="email"
                placeholder='Email'
                className='input'
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange} />
              <textarea
                className='input'
                placeholder='Message'
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                // required
                style={{ width: "100%", padding: "8px", height: "100px" }}
              />
              {error && (
                <div className='container errorMessage'
                  style={{ border: '1px', borderColor: 'red', borderRadius: '5px', height: '50px' }}>
                  <p className='errorText' style={{ color: "red" }}>
                    Please fill in your name and email
                  </p>
                </div>
              )}
              <button type="submit" className="button sign-in">Send</button>
            </form>
          </div>
        </div>

        <footer>
          <p>© 2025 Alicia. Todos los derechos reservados.</p>
          <p>Diseñado por Alicia</p>
          <p>Desarrollado por Alicia</p>
        </footer>
    </div>
  );
}

export default App;
