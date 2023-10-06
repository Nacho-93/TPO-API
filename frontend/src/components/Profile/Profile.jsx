import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import { useTutorContext } from '../../Context/TutorContext'
import { useUserContext } from '../../Context/UserContext'
import { useLocation } from 'react-router-dom'

function Profile() {
    const { tutors } = useTutorContext();
    const { isLoggedIn, userId, login, logout } = useUserContext();
    const location = useLocation().pathname.split("/")[2];

    const isActual_user = isLoggedIn && userId && (userId === parseInt(location));

    return (
        <div className="container light-style flex-grow-1 container-p-y">
            <h2 className="font-weight-bold py-3 mb-4 text-primary-emphasis">
                {isActual_user ? "Configurar Perfil" : "Perfil"}
            </h2>
            <div className="card card-profile overflow-hidden">
                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-3 pt-0">
                        <div className="list-group list-group-flush account-settings-links">
                            <a className="list-group-item list-group-item-action active" data-toggle="list"
                                href="#account-general">General</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list"
                                href="#account-info">Información</a>
                            <Link className="list-group-item list-group-item-action" data-toggle="list"
                                to={`/perfil-profesor/${userId}/clases`}>Clases</Link>
                            {isActual_user ?
                                <><Link className="list-group-item list-group-item-action"
                                    to={`/perfil-profesor/${userId}/solicitudesReseñas`}>Solicitudes</Link>
                                    <Link className="list-group-item list-group-item-action"
                                        to={`/perfil-profesor/${userId}/historial-clases`}>Historial de clases</Link>
                                    <a className="list-group-item list-group-item-action" data-toggle="list"
                                        href="#account-change-password">Cambiar contraseña</a>
                                    <Link className="list-group-item list-group-item-action" data-toggle="list"
                                        to={"/"} onClick={() => logout()}>Cerrar sesion</Link></>
                                : <></>}

                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="account-general">
                                <div className="card-body media align-items-center">
                                    <img src="images/notperfil.png" alt=""
                                        className="d-block ui-w-80" />
                                    <div className="media-body ml-4">
                                        {isActual_user ? <> <label className="btn btn-outline-primary">
                                            Subir foto de perfil
                                            <input type="file" className="account-settings-fileinput" />
                                        </label> &nbsp;
                                            <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                                            <div className="text-light small mt-1">JPG/PNG</div></> :
                                            <></>}
                                    </div>
                                </div>
                                <hr className="border-light m-0" />
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" className="form-control" value="Nelle Maxwell" />
                                    </div>
                                    <h4 className="my-3 font-weight-bold">Contacto</h4>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control mb-1" value="nmaxwell@mail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Teléfono</label>
                                        <input type="text" className="form-control" value="+54 2324 123254" />
                                    </div>


                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-change-password">
                                <div className="card-body pb-2">
                                    <div className="form-group">
                                        <label className="form-label">Contraseña actual</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Nueva contraseña</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Repetir contraseña</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-info">
                                <div className="card-body pb-2">
                                    <div className="form-group">
                                        <label className="form-label">Titulo</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Experiencia</label>
                                        <textarea className="form-control"
                                            rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
                                    </div>
                                    {/* <div className="form-group">
                                        <label className="form-label">Nacimiento</label>
                                        <input type="text" className="form-control" value="26/05/2003" />
                                    </div> */}

                                </div>
                                <hr className="border-light m-0" />
                                <div className="card-body pb-2">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right mt-3 mb-5">
                <button type="button" className="btn btn-primary">Aplicar cambios</button>&nbsp;
                <button type="button" className="btn btn-default">Cancelar</button>
            </div>
        </div>
    )
}

export default Profile;