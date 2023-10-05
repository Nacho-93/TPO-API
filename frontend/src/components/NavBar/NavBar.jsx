/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/logo.png"
import "./NavBar.css"
import { Link } from "react-router-dom";
import { useState } from "react";


export default function NavBar(props) {
  const [isLogged, setIsLogged] = useState(true);

  const [professor_image, setProfessor_image] = useState(<span class="round-photo" >
    <img src={"images/tutor1.jpg"} alt="professor" className="d-inline-block align-top" style={{ width: "50px", height: "50px" }} />
  </span>
  )



  const closeSideBar = () => { // Sirve para apagar el offcanvas luego de ir a alguna pagina en Mobile.
    // Obtén una referencia al offcanvas
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    // Establece el atributo data-bs-dismiss en "offcanvas" para cerrar el offcanvas
    offcanvasNavbar.setAttribute("data-bs-dismiss", "offcanvas");
    // Simula un clic en el botón que cierra el offcanvas (si tienes uno)
    const closeButton = offcanvasNavbar.querySelector(".btn-close");
    if (closeButton) {
      closeButton.click();
    }

  }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgba(30,30,30, 0.9)" }}>
      <div class="container-fluid mx-5">

        {/* LOGO */}
        <Link to="/" className="navbar-brand mb-0 h1">
          <img src={logo} alt="Logo"
            className="d-inline-block align-top"
            width="150" height="60" />
        </Link>


        {/* TOGGLE BUTTON */}
        <button
          class="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* SIDEBAR */}
        <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header text-white">

            <Link to="/perfil-nombreApellido" className="log nav-item text-primary mb-0" onClick={closeSideBar}>
              {isLogged ? professor_image : <i class="login-icon bi bi-person-circle"></i>} </Link>

            <button type="button" class="btn-close btn-close-white shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            {/* NavITEMS */}
            <ul class="navbar-nav justify-content-center align-items-center-md fs-5 flex-grow-1 pe-0">
              <li class="nav-item item-changed mx-md-2">
                <Link class="nav-link link-changed activeNOT" aria-current="page" to="/">Inicio</Link>
              </li>
              <li class="nav-item  item-changed dropdown mx-md-2">
                <Link class="nav-link link-changed dropdown-toggleNOT" to="/categorias"
                  role="button">
                  Categorias

                </Link>
              </li>

              {/* <ul class="dropdown-menu dropdown-menu-dark">
                  <li><Link class="dropdown-item" to="/categorias/fisica" >Física</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/idiomas">Idiomas</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/matematica">Matemática</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/musica">Musica</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/programacion">Programación</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/quimica">Química</Link></li>
                </ul>
              </li> */}

              <li class="nav-item item-changed mx-md-2">
                <Link class="nav-link link-changed" to="/sobreNosotros" onClick={closeSideBar}>Sobre nosotros</Link>
              </li>
              <li class="nav-item item-changed mx-md-2">
                <Link class="nav-link link-changed" to="/contacto" onClick={closeSideBar}>Contacto</Link>
              </li>

            </ul>
            {/* Login / Sign Up */}
            <div className="d-none d-md-block">
              {isLogged ? (<Link to="/perfil-nombreApellido" className="log nav-item text-primary mb-0">
                {professor_image} </Link>)
                :
                (<div className="div-login d-none d-lg-block mt-1">
                  <Link role="button" to="/login" className="login log btn btn-link text-white">Iniciar sesión</Link>
                  <Link role="button" to="/perfil-nombreApellido" className="login register btn btn-outline-info text-white">Registrarse</Link>
                </div>)}
            </div>

          </div>
        </div>
      </div >
    </nav >
  );
}
