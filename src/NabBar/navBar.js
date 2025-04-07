import React from "react";
import './navBar.css';

export default function NavBar({handleNavClick}) {

    // const smoothScroll = (event) => {
    //     event.preventDefault(); // Evita el salto instantáneo
    //     const targetId = event.currentTarget.getAttribute("href").slice(1); // Obtén el ID del destino
    //     const targetElement = document.getElementById(targetId);
    
    //     if (targetElement) {
    //       targetElement.scrollIntoView({ behavior: "smooth" }); // Desplázate suavemente
    //     }
    //   };
    
    return (
        <nav
        style={{ borderRadius: '10px 10px 0 0', marginBottom: '20px' }}
        className="navbar border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="none">Alicia</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link" aria-current="page" href="#about" onClick={() => handleNavClick('about')}>About me</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#stacks" onClick={() => handleNavClick('stacks')}>Stacks</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#projects" onClick={() => handleNavClick('projects')}>Projects</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#"onClick={() => handleNavClick('contact')}>Contact</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#CV">CV</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}