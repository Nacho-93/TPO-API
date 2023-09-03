import React from "react";
import logo from "../assets/descarga.png"
export default function NavBar() {

  return (
    <nav class="navbar navbar-expand-sm navbar-secondary bg-secondary">
      <div className="container">
        <a href="#" className="navbar-brand mb-0 h1">
          <img src={logo} alt="Logo"
            className="d-inline-block align-top"
            width="30" height="30" /> NavBar
        </a>

        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="#" className="nav-link">
                Inicio
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sobre nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}