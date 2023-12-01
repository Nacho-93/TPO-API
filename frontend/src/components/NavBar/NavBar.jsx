/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTutorContext } from "../../Context/TutorContext";
import { useUserContext } from '../../Context/UserContext';


export default function NavBar(props) {

  const { tutors } = useTutorContext();
  let { userIdContext } = useUserContext();
  let userId = userIdContext || localStorage.getItem('userId');
  const image_profile = localStorage.getItem('image_url');
  // const tutor = tutors[userId];


  const [professor_image, setProfessor_image] = useState(
    <span className="round-photo">
      {
        <img
          src={image_profile}
          alt="professor"
          className="d-inline-block align-top"
          style={{ width: "50px", height: "50px" }}
        />
      }
    </span>
  );




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
    <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(30,30,30)" }}>
      <div class="container">

        {/* LOGO */}

        <h1 className="logo me-auto">
          <Link to="/" className="">
            AZERTY</Link>
        </h1>



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

            <Link to={userId ? `/perfil/${userId}` : '/login'} className="log nav-item text-primary mb-0" onClick={closeSideBar}>
              {userId ? professor_image : <i class="login-icon bi bi-person-circle"></i>} </Link>

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


              <li class="nav-item item-changed mx-md-2">
                <Link class="nav-link link-changed" to="/sobreNosotros" onClick={closeSideBar}>Sobre nosotros</Link>
              </li>
              <li class="nav-item item-changed mx-md-2">
                <Link class="nav-link link-changed" to="/contacto" onClick={closeSideBar}>Contacto</Link>
              </li>

            </ul>
            {/* Login / Sign Up */}
            <div className="d-none d-lg-block">
              {userId ? (<Link to={`/perfil/${userId}`} className="log nav-item text-primary mb-0">
                {professor_image} </Link>)
                :
                (<div className="div-login d-none d-lg-block mt-1">
                  <Link role="button" to="/login" className="login log btn btn-link text-white">Iniciar sesión</Link>
                  <Link role="button" to="/registro" className="login register btn btn-outline-info text-white">Registrarse</Link>
                </div>)}
            </div>

          </div>
        </div>
      </div >
    </nav >
  );
}
