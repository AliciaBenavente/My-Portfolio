import React from "react";

export default function NavBar() {

    const smoothScroll = (event) => {
        event.preventDefault(); // Evita el salto instantáneo
        const targetId = event.currentTarget.getAttribute("href").slice(1); // Obtén el ID del destino
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Desplázate suavemente
        }
      };
    
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
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
                            <a className="nav-link active" aria-current="page" href="#about" onClick={smoothScroll}>About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#stacks" onClick={smoothScroll}>Stacks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={smoothScroll}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={smoothScroll}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#CV">CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}