import React from 'react'
import login_icon from "../../assets/login-icon.svg"
import userName_icon from "../../assets/username-icon.svg"
import password_icon from "../../assets/password-icon.svg"

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
                        style={{ height: "7rem" }}
                    />
                </div>
                <div class="text-center fs-1 fw-bold">Iniciar sesión</div>
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
                            style={{ height: "1rem" }}
                        />
                    </div>
                    <label htmlfor= "password"></label>
                    <input
                        class="form-control bg-light"
                        type="password"
                        placeholder="Contraseña"
                    />
                </div>
                <div class="d-flex justify-content-around mt-1">
                    <div class="d-flex align-items-center gap-1">
                        <input class="form-check-input" type="checkbox" />
                        <label htmlfor="check" className='custom-input-label'></label>
                        <div class="pt-1" style={{ fontSize: "0.9rem" }}>Recordarme</div>
                    </div>
                    <div class="pt-1">
                        <a
                            href="#olvido-contraseña"
                            class="text-decoration-none text-info fw-semibold fst-italic"
                            style={{ fontSize: "0.9rem" }}
                        >Olvido su contraseña?</a
                        >
                    </div>
                </div>
                <div class="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm">
                    Iniciar sesión
                </div>
                <div class="d-flex gap-1 justify-content-center mt-1">
                    <div>No tienes cuenta?</div>
                    <a href="#registro" class="text-decoration-none text-info fw-semibold"
                    >Registrate</a
                    >
                </div>
            </div>
            </form>
        </div>
    )
}

