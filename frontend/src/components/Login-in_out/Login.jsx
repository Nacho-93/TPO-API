import React, { useState } from 'react'
import login_icon from "../../assets/login-icon.svg"
import userName_icon from "../../assets/username-icon.svg"
import password_icon from "../../assets/password-icon.svg"
import { Link } from 'react-router-dom'
import { useUserContext } from '../../Context/UserContext'
import { Navigate } from 'react-router-dom'
import './Login.css'
import { login_exe } from '../../controllers/user.controller'


export default function Login() {


    const { loginContext } = useUserContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [validUser, setValidUser] = useState(false);
    const [loggedUserId, setLoggedUserId] = useState(null);

    const validateLogin = async () => {
        let userData = {
            email: email,
            password: password
        }
        const response = await login_exe(userData);

        if (response.rdo === 0) {
            setValidUser(true);
            setLoggedUserId(response.user._id);

        } else {
            setShowAlert(true);
        }
    }


    const loginUser = () => {

        if (email !== "" && password !== "") {
            validateLogin();
        }
        else {
            alert("Debe completar usuario y password");
        }
    }

    const redirect = () => {
        if (validUser) {
            loginContext(loggedUserId);
            return <Navigate to={`/perfil/${loggedUserId}`} />
        }
    }


    return (
        <>
            {redirect()}
            <div class="d-flex justify-content-center align-items-center vh-100 login-register-bg" style={{ backgroundColor: "#333" }}>
                <form>
                    <div class="bg-dark p-5 rounded-5 text-light shadow" style={{ width: "25rem" }}>
                        <div class="d-flex justify-content-center">
                            <img
                                src={login_icon}
                                alt="login-icon"
                                style={{ height: "7rem", filter: "invert(1)" }}
                            />
                        </div>
                        <div class="text-center fs-1 fw-bold">Iniciar sesión</div>
                        <div class="input-group mt-4">

                            <div class="input-group-text bg-info">
                                <i class="register-icon fa-solid fa-envelope"></i>
                            </div>
                            <input
                                class="form-control bg-dark text-white placeholder-white"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div class="d-flex justify-content-around mt-1">
                            <div class="d-flex align-items-center gap-1">
                                <input class="form-check-input bg-dark" type="checkbox" />
                                <label htmlFor="check" className='custom-input-label'></label>
                                <div class="pt-1" style={{ fontSize: "0.9rem" }}>Recordarme</div>
                            </div>

                            <div class="pt-1">
                                <Link
                                    to="/recuperarContraseña"
                                    class="text-decoration text-secondary fw-semibold fst-italic"
                                    style={{ fontSize: "0.9rem" }}
                                >Olvido su contraseña?</Link>
                            </div>

                        </div>
                        {showAlert && (
                            <div class="alert alert-danger mt-2" role="alert">
                                Credenciales incorrectas. Intente nuevamente.
                            </div>
                        )}
                        <div
                            class="btn btn-info text-dark w-100 mt-2 fw-semibold shadow-sm"
                            onClick={loginUser}
                        >
                            Iniciar sesión
                        </div>
                        <div class="d-flex gap-1 justify-content-center mt-2">
                            <div>No tienes cuenta?</div>
                            <Link to="/registro"
                                class="text-decoration text-secondary fw-semibold">
                                Registrate</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}
