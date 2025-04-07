import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NabBar/navBar';

function App() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  // const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [visibleSection, setVisibleSection] = useState("about"); // Estado inicial: "about"
  const [visiblePart, setVisiblePart] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisiblePart((prevPart) => prevPart === 1 ? 2 : 1)
    }, 10000);
    return () => clearTimeout(timer);
  }, [visiblePart]);

  const handleNavClick = (section) => {
    setVisibleSection(section); // Actualiza la sección visible
  };


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
      <NavBar handleNavClick={handleNavClick} />

      <div className={`section-container ${visibleSection === "about" ? "fade-in" : "fade-out"}`}>
        <h1 className='welcome-title'>Welcome to my portfolio</h1>
        {visibleSection === "about" && (
          <section id="about">
            <div className='container-girl'>
              <div className={`girl ${visiblePart === 1 ? "fade-in" : "fade-out"}`}>
                <p>From doing research in laboratories....</p>
                <img src="/lab-girl.png" alt="laboratory" />
              </div>
              <div className={`girl2 ${visiblePart === 2 ? "fade-in" : "fade-out"}`}>
                <p>To writing code and exploring documentations!</p>
                <img src="/coding-girl.png" alt="coding" />
                <p>Decided to make a change in my life, I found there is not just one thing one can enjoy.</p>
                <p>
                  I enjoy being a Laboratory Technician, I enjoy being a baker...{" "}
                  I enjoy being a Full Stack Developer
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
      <div className={`section-container ${visibleSection === "stacks" ? "fade-in" : "fade-out"}`}>
        <h1 className='stack-title'>Stacks</h1>
        {visibleSection === "stacks" && (
          <div id="stacks">
            <div className='row'>
              <div className='col-4'>
                <h5>Front-end</h5>
                <p>React</p>
                <p>React Native</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Bootstrap</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className='col-4'>
                <h5>Back-end</h5>
                <p>Node.js</p>
                <p>Python</p>
                <p>Flask</p>
                <p>SQLAlchemy</p>
                <p>MySQL</p>
              </div>
              <div className='col-4'>
                <h5>Tools</h5>
                <p>Visual Studio Code</p>
                <p>GitHub</p>
                <p>Postman</p>
                <p>Jira</p>
                <p>Trello</p>
                <p>Miró</p>
                <p>Git</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`section-container ${visibleSection === "projects" ? "fade-in" : "fade-out"}`}>
        <h1 className='project-title'>Projects</h1>
        {visibleSection === "projects" && (
          <div id="projects" className="">
            <p>Más Buenos Que El Pan</p>
            <p>SALO</p>
          </div>
        )}
      </div>

      <div className={`section-container ${visibleSection === "contact" ? "fade-in" : "fade-out"}`}>
        <h1 className="contact-title">Get in touch</h1>
        {visibleSection === "contact" && (
          <div id='contact' className="container">
              <form onSubmit={handleSubmit} className="form">
                <div className='form-container'>
                  <p className="name-span">Name</p>
                  <input type="name"
                    placeholder="Name"
                    className="input"
                    id='name'
                    value={form.name}
                    onChange={handleChange}
                  />
                  <p className="name-span">Email</p>
                  <input type="email"
                    placeholder='Email'
                    className='input'
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange} />
                  <p className="name-span">Message</p>
                  <textarea
                    className='input'
                    placeholder='Message'
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
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
                </div>
              </form>
          </div>
        )}
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
