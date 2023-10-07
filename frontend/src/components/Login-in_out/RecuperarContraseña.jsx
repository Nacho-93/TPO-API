import React from "react"
import login_icon from "../../assets/login-icon.svg"
import email from "../../assets/email.svg"
import { Link } from "react-router-dom"

export default function RecuperarContraseña() {
  return (

    <div class="d-flex justify-content-center align-items-center vh-100 login-register-bg">
      <div
        class="bg-white p-5 rounded-5 text-secondary shadow"
        style={{ width: "25rem" }}
      >
        <div class="d-flex justify-content-center">
          <img
            src={login_icon}
            alt="login-icon"
            style={{ height: "7rem" }}
          />
        </div>
        <div class="text-center  fw-bold">Recuperar contraseña</div>
        <div class="input-group mt-4">
          <div class="input-group-text bg-info">
            <img
              src={email}
              style={{ height: "1rem" }}
              alt="" />
          </div>
          <label htmlfor="email"></label>
          <input
            class="form-control bg-light"
            type="email"
            placeholder="Email"
          />
        </div>

        <div class="btn btn-info text-dark w-100 mt-4 fw-semibold shadow-sm">
          Recuperar contraseña
        </div>
        <div class="d-flex gap-1 justify-content-center mt-1">
          <div>Tenes cuenta?</div>
          <Link to="/login" class="text-decoration-none text-info fw-semibold"
          >Iniciar sesion</Link>
        </div>
      </div>
    </div>
  )
}