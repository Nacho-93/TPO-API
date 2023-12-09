import React from "react"
import login_icon from "../../assets/login-icon.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { register_exe } from "../../controllers/user.controller"
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useTutorContext } from "../../Context/TutorContext"

export default function Register() {
  const { tutorsContext } = useTutorContext();
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    password: "",
    secondPassword: "",
    email: "",
    phone: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [validLogin, setValidLogin] = useState(false);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }



  const validateUser = async () => {
    setShowAlert(false);
    if (userData.name && userData.lastName && userData.password && userData.secondPassword && userData.email && userData.phone) {

      const emailRegex = new RegExp(`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$`);
      if (!emailRegex.test(userData.email)) {
        setShowAlert(true);
        setMessage("El email no es válido");
        return;
      }
      if (userData.password === userData.secondPassword) {

        for (let prof of Object.values(tutorsContext)) {
          if (prof.email === userData.email) {
            setShowAlert(true);
            setMessage("El email ya se encuentra registrado");
            return;
          }
        }

        delete userData.secondPassword;
        const login_response = await register_exe(userData);

        if (login_response.rdo === 0) {
          setValidLogin(true);
          navigate(`/perfil/${localStorage.getItem('userId')}`);

        }

      }
      else {
        setShowAlert(true);
        setMessage("Las contraseñas no coinciden");
      }
    }
    else {
      setShowAlert(true);
      setMessage("Debe completar todos los campos");
    }
  }

  const redirect = () => {
    if (validLogin) {
      return <Navigate to={`/perfil/${localStorage.getItem('userId')}`} />
    }
  }



  return (
    <>


      <div class="bg-dark d-flex justify-content-center align-items-center vh-100 login-register-bg">

        <form>
          <div
            class="bg-dark text-light p-5 rounded-5 shadow"
            style={{ width: "25rem" }}
          >
            <div class="d-flex justify-content-center">
              <img
                src={login_icon}
                alt="login-icon"
                style={{ height: "7rem" }}
              />
            </div>

            <div class="text-center fs-1 fw-bold">Registrarse</div>

            <div class="input-group mt-4">
              <div class="input-group-text bg-info">
                <i class="register-icon fa-solid fa-user"></i>
              </div>

              <input
                class="form-control bg-dark text-light placeholder-white"
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleInputChange}
              />
            </div>

            <div class="input-group mt-1">
              <div class="input-group-text bg-info">
                <i class="register-icon fa-solid fa-user-tag"></i>
              </div>
              <input
                class="form-control bg-dark text-light placeholder-white"
                type="text"
                placeholder="Apellido"
                name="lastName"
                onChange={handleInputChange}
              />
            </div>

            <div class="input-group mt-1">
              <div class="input-group-text bg-info">
                <i class="register-icon fa-solid fa-lock"></i>
              </div>

              <input
                class="form-control bg-dark text-light placeholder-white"
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleInputChange}
              />
            </div>

            <div class="input-group mt-1">
              <div class="input-group-text bg-info">
                <i class="register-icon fa-solid fa-lock"></i>
              </div>
              <label htmlFor="password"></label>
              <input
                class="form-control bg-dark text-light placeholder-white"
                type="password"
                placeholder="Confirmar Contraseña"
                name="secondPassword"
                onChange={handleInputChange}
              />
            </div>

            <div class="input-group mt-1">
              <div class="input-group-text bg-info">
                <i class="register-icon fa-solid fa-envelope"></i>
              </div>

              <input
                class="form-control bg-dark text-white placeholder-white"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
              />
            </div>

            <div class="input-group mt-1">
              <div class="input-group-text bg-info">
                <i class="register-icon fa-solid fa-phone"></i>
              </div>

              <input
                class="form-control bg-dark text-light placeholder-white"
                type="tel"
                placeholder="Teléfono"
                name="phone"
                onChange={handleInputChange}
              />
            </div>

            {showAlert && (
              <div class="alert alert-danger mt-2" role="alert">
                {message}
              </div>
            )}

            <div class="d-flex gap-1 justify-content-center mt-3">
              <div>¿Ya tienes cuenta?</div>
              <Link to="/login"
                className="text-decoration text-secondary fw-semibold fst-italic"
              >Iniciar sesión</Link>
            </div>

            <div
              class="btn btn-info text-dark w-100 mt-3 fw-semibold shadow-sm"
              onClick={validateUser}
            >
              Registrarse
            </div>

          </div>
        </form>
      </div>
    </>
  )
}