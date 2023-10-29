import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import { useTutorContext } from '../../Context/TutorContext'
import { useUserContext } from '../../Context/UserContext'
import { useLocation } from 'react-router-dom'

function Profile() {
    const { tutors } = useTutorContext();
    const { isLoggedIn, userId, login, logout } = useUserContext();
    const user_id_byLocation = parseInt(useLocation().pathname.split("/")[2]);
    const isActual_user = isLoggedIn && userId && (userId === user_id_byLocation);
    const tutor = tutors[user_id_byLocation];

    const [professor_image, setProfessor_image] = React.useState(tutor.image_profile);
    const [professor_name, setProfessor_name] = React.useState(tutor.name + " " + tutor.lastName);
    const [professor_email, setProfessor_email] = React.useState(tutor.email);
    const [professor_phone, setProfessor_phone] = React.useState(tutor.phone);
    const [professor_degree, setProfessor_degree] = React.useState(tutor.degree);
    const [professor_description, setProfessor_description] = React.useState(tutor.description);

    return (
        <div className="container-profile pb-5">
            <div className="container light-style flex-grow-1 container-p-y">
                <h2 className="font-weight-bold py-3 mb-4 text-primary-emphasis text-light">
                    {isActual_user ? "Configurar Perfil" : "Perfil"}
                </h2>
                <div className="card card-profile overflow-hidden">
                    <div className="row no-gutters row-bordered row-border-light">
                        <div className="col-md-3 pt-0">
                            <div className="list-group list-group-flush account-settings-links">
                                <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">
                                    General
                                </a>
                                <a className="list-group-item list-group-item-action icon-link" data-toggle="list" href="#account-info">
                                    Información
                                </a>
                                <Link
                                    className="list-group-item list-group-item-action"
                                    to={`/perfil-profesor/${user_id_byLocation}/clases`}
                                >
                                    {isActual_user ? 'Mis clases' : `Clases de ${professor_name}`}
                                </Link>
                                {isActual_user ? (
                                    <>
                                        <Link
                                            className="list-group-item list-group-item-action"
                                            to={`/perfil-profesor/${userId}/solicitudes-clases`}
                                        >
                                            Gestionar solicitudes
                                        </Link>
                                        <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">
                                            Cambiar contraseña
                                        </a>
                                        <Link
                                            className="list-group-item list-group-item-action red-link"
                                            data-toggle="list"
                                            to={"/"}
                                            onClick={() => logout()}
                                        >
                                            Cerrar sesión
                                        </Link>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="account-general">
                                    <div className="card-body media align-items-center">
                                        <img src={professor_image} alt="imagen" className="d-block ui-w-80" />
                                        <div className="media-body ml-4">
                                            {isActual_user ? (
                                                <>
                                                    <label className="btn btn-outline-primary">
                                                        Subir foto de perfil
                                                        <input type="file" className="account-settings-fileinput" />
                                                    </label>{" "}
                                                    &nbsp;
                                                    <button type="button" className="btn btn-default md-btn-flat">
                                                        Reset
                                                    </button>
                                                    <div className="text-light small mt-1">JPG/PNG</div>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="form-label">Nombre</label>
                                            {isActual_user ? (
                                                <input type="text" className="form-control" value={professor_name}
                                                    onChange={(e) => setProfessor_name(e.target.value)} />
                                            ) : (
                                                <label className="form-control">{professor_name}</label>
                                            )}
                                        </div>
                                        <h4 className="my-3 font-weight-bold">Contacto</h4>
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            {isActual_user ? (
                                                <input type="text" className="form-control mb-1" value={professor_email}
                                                    onChange={(e) => setProfessor_email(e.target.value)} />
                                            ) : (
                                                <label className="form-control mb-1">{professor_email}</label>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Teléfono</label>
                                            {isActual_user ? (
                                                <input type="text" className="form-control" value={professor_phone}
                                                    onChange={(e) => setProfessor_phone(e.target.value)} />
                                            ) : (
                                                <label className="form-control">{professor_phone}</label>
                                            )}
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
                                            {isActual_user ? (
                                                <input type="text" className="form-control" value={professor_degree}
                                                    onChange={(e) => setProfessor_degree(e.target.value)} />
                                            ) : (
                                                <label className="form-control">{professor_degree}</label>
                                            )}
                                        </div>
                                        <div className="form-group mt-3">
                                            <label className="form-label">Experiencia</label>
                                            {isActual_user ? (
                                                <textarea className="form-control" rows="5" value={professor_description}
                                                    onChange={(e) => setProfessor_description(e.target.value)}></textarea>
                                            ) : (
                                                <label className="form-control">{professor_description}</label>
                                            )}
                                        </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body pb-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right mt-3 mb-5">
                    {isActual_user && (
                        <>
                            <button type="button" className="btn btn-primary mx-2">
                                Aplicar cambios
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-secondary mx-2">
                                Cancelar
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;