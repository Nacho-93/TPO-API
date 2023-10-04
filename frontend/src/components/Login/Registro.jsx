import React from "react"
import login_icon from "../../assets/login-icon.svg"
import userName_icon from "../../assets/user icon - registro.png"
import password_icon from "../../assets/contraseña icon - registro.png"
import direccion from "../../assets/direccion.png"
import email from "../../assets/email.svg"

export default function Login() {
    return (

<div class="bg-info d-flex justify-content-center align-items-center vh-100">

<form>
    <div
      class="bg-white p-5 rounded-5 text-secondary shadow"
      style={{ width: "25rem" }}
    >
      <div class="d-flex justify-content-center">
        <img
          src={login_icon}
          alt="login-icon"
          style={{height: "7rem"}}
        />
      </div>
      <div class="text-center fs-1 fw-bold">Registrarse</div>
      <div class="input-group mt-4">
        <div class="input-group-text bg-info">
          <img
            src={userName_icon}
            alt="username-icon"
            style={{ height: "1rem" }}
          />
        </div>
        <label htmlfor="usuario"></label>
        <input
          class="form-control bg-light"
          type="text"
          placeholder="Usuario"
        />
      </div>
      <div class="input-group mt-1">
        <div class="input-group-text bg-info">
          <img
            src={password_icon}
            alt="password-icon"
            style={{height: "1rem"}}
          />
        </div>
        <label htmlfor= "password"></label>
        <input
          class="form-control bg-light"
          type="password"
          placeholder="Contraseña"
        />
      </div>
      <div class="input-group mt-1">
        <div class="input-group-text bg-info">
          <img
             src={password_icon}
             alt="password-icon"
             style={{height: "1rem"}}
          />
        </div>
        <label htmlfor= "password"></label>
        <input
          class="form-control bg-light"
          type="password"
          placeholder="Confirmar Contraseña"
        />
      </div>
      <div class="input-group mt-1">
        <div class="input-group-text bg-info">
            <img
              src={email}
              style={{height: "1rem"}}
            />
          </div>
        <label htmlfor= "email"></label>
        <input
          class="form-control bg-light"
          type="email"
          placeholder="Email"
        />
  </div>
  <div class="input-group mt-1">
    <div class="input-group-text bg-info">
        <img
          src={direccion}
          alt="password-icon"
          style={{height: "1rem"}}
        />
      </div>
      <label htmlfor= "direccion"></label>
    <input
      class="form-control bg-light"
      type="direccion"
      placeholder="Direccion"
    />
</div>
<div class="d-flex gap-1 justify-content-center mt-1">
  <div>Ya tienes cuenta?</div>
  <a href="#"
    >Iniciar sesión</a
  >
</div>
      <div class="d-flex justify-content-around mt-1">
        
        
      </div>
      <div class="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm">
        Registrarse
      </div>
      
    </div>
    </form>
  </div>
  )
}