import React from 'react'
import "./ProfileNav.css"
import { Link } from 'react-router-dom'
function ProfileNav() {

    // ESTO SOLO LO VE EL PROFESORRRRRRRRRRR
    return (
        <>
            <nav className='navbar navbar-expand-sm p-0'>
                <div className="container profile-nav">
                    <ul className='navbar-nav justify-content-center fs-5 flex-grow-1 pe-0 bg-secondary'>

                        <li className='nav-item'><Link to="/miperfil" className='nav-link mx-2'>Mi Perfil</Link></li>

                        <li className='nav-item dropdown'>
                            <button
                                className='nav-link mx-2 dropdown-toggle'
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Solicitudes
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><Link class="dropdown-item" to="/perfil-nombreApellido/clases" >Clases</Link></li>
                                <li><Link class="dropdown-item" to="/perfil-nombreApellido/reseñas">Reseñas</Link></li>
                            </ul>

                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default ProfileNav