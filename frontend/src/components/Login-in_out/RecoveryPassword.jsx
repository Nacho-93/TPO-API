import React from "react"
import login_icon from "../../assets/login-icon.svg"
import email from "../../assets/email.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { nanoid } from 'nanoid';
import { sendRecoveryEmail, recoveryUpdatePassword } from "../../controllers/user.controller"
import { useNavigate } from "react-router-dom"


export default function RecoveryPassword() {

  const navigate = useNavigate();

  const [askEmail, setAskEmail] = useState(true);
  const [askCode, setAskCode] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [askPassword, setAskPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [nanoCode, setNanoCode] = useState("")
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");


  const handleButtonClick = async () => {
    setShowAlert(false);
    try {
      if (askEmail && email) {
        const nCode = nanoid(6);
        const response = await sendRecoveryEmail(email, nCode);
        setAskEmail(false);
        setAskCode(true);
        setNanoCode(nCode);
      } else if (askCode && code) {
        // Verificar que el código sea correcto
        if (code === nanoCode) {
          setAskCode(false);
          setAskPassword(true);
        } else {
          setShowAlert(true);
          setMessage("El código es incorrecto");
        }
        // Verificar que la contraseña sea válida
        // MANDAR a verificar a backend y hacer todo ahi.
      } else if (askPassword && password) {
        const response = await recoveryUpdatePassword(email, password);

        if (response.status === 201) {
          navigate("/login");
          alert("Contraseña actualizada correctamente");
        }
      }
    } catch (error) {
      // Manejar errores, mostrar mensajes de error, etc.
      console.error("Error:", error);
    }
  };

  return (

    <div className="d-flex justify-content-center align-items-center vh-100 login-register-bg">
      <div
        className="bg-dark p-5 rounded-5 text-light shadow"
        style={{ width: "25rem" }}
      >
        <div className="d-flex justify-content-center">
          <img
            src={login_icon}
            alt="login-icon"
            style={{ height: "7rem" }}
          />
        </div>

        <div className="text-center fs-3 fw-bold">Recuperar contraseña</div>
        {askEmail ?
          <div className="input-group mt-4">
            <div className="input-group-text bg-info">
              <i className="register-icon fa-solid fa-envelope"></i>
            </div>
            <input
              className="form-control bg-dark text-light placeholder-white"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          : askCode ?
            <>
              <div className="input-group mt-4">
                <div className="input-group-text bg-info">
                  <i className="register-icon fa-solid fa-key"></i>
                </div>
                <input
                  className="form-control bg-dark text-light placeholder-white"
                  type="text"
                  placeholder="Codigo"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              {showAlert && <div className="alert alert-danger mt-2 mb-0" role="alert">
                {message} </div>}
            </>
            :
            <div className="input-group mt-4">
              <div className="input-group-text bg-info">
                <i className="register-icon fa-solid fa-lock"></i>
              </div>
              <input
                className="form-control bg-dark text-light placeholder-white"
                type="password"
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
        }

        <div
          className="btn btn-info text-dark w-100 mt-4 fw-semibold shadow-sm"
          onClick={handleButtonClick}
        >
          Recuperar contraseña
        </div>
        <div className="d-flex gap-1 justify-content-center mt-2">
          <div>Tenes cuenta?</div>
          <Link to="/login" className="text-decoration text-secondary fw-semibold"
          >Iniciar sesion</Link>
        </div>
      </div>
    </div>
  )
}