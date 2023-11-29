import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import { useTutorContext } from '../../Context/TutorContext'
import { useUserContext } from '../../Context/UserContext'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { getProfile } from '../../controllers/professor.controller'
import { updateProfile } from '../../controllers/professor.controller'

function Profile() {
    const { tutors } = useTutorContext();
    const { userId, logout } = useUserContext();
    // const [updatedData, setUpdatedData] = React.useState({});
    const [professorData, setProfessorData] = React.useState(null);
    // const user_id_byLocation = parseInt(useLocation().pathname.split("/")[2]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileData = await getProfile(userId);
                setProfessorData(profileData);
            } catch (error) {
                console.error('Error obteniendo el perfil:', error);
                // Maneja los errores si ocurre alguno al obtener el perfil
            }
        };

        fetchData(); // Llama a la función para obtener los datos del perfil cuando el componente se monta
    }, []); // El segundo argumento vacío [] hace que useEffect se ejecute solo una vez (similar a componentDidMount)

    const handleInputChange = (e) => {
        setProfessorData({
            ...professorData,
            [e.target.name]: e.target.value,
        });
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedProfile = await updateProfile({
                ...professorData,
                // ...updatedData,
            }, userId);

            setProfessorData(updatedProfile);
            // setUpdatedData({}); // Reinicia los datos actualizados después de enviarlos
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
        }
    };

    return (
        <>
            {professorData &&
                (<div className="container-profile pb-5">
                    <div className="container light-style flex-grow-1 container-p-y">
                        <h2 className="font-weight-bold py-3 mb-4 text-primary-emphasis text-light">
                            {userId ? "Configurar Perfil" : "Perfil"}
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
                                            to={`/perfil/${userId}/misClases`}
                                        >
                                            {userId ? 'Mis clases' : `Clases de ${professorData.name}`}
                                        </Link>
                                        {userId ? (
                                            <>
                                                <Link
                                                    className="list-group-item list-group-item-action"
                                                    to={`/perfil/${userId}/solicitudes-clases`}
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
                                                <img src={professorData.image_profile} alt="imagen" className="d-block ui-w-80" />
                                                <div className="media-body ml-4">
                                                    {userId ? (
                                                        <>
                                                            <label className="btn btn-outline-primary">
                                                                Subir foto de perfil
                                                                <input type="file" className="account-settings-fileinput" />
                                                            </label>{" "}
                                                            &nbsp;
                                                            <button type="button" className="btn btn-outline-danger md-btn-flat">
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
                                                    {userId ? (
                                                        <input type="text" className="form-control" name='name' value={professorData.name}
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control">{professorData.name}</label>
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Apellido</label>
                                                    {userId ? (
                                                        <input type="text" className="form-control" name='lastName' value={professorData.lastName}
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control">{professorData.lastName}</label>
                                                    )}
                                                </div>
                                                <h4 className="my-3 font-weight-bold">Contacto</h4>
                                                <div className="form-group">
                                                    <label className="form-label">Email</label>
                                                    {userId ? (
                                                        <input type="text" className="form-control mb-1"
                                                            value={professorData.email}
                                                            name='email'
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control mb-1">{professorData.email}</label>
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Teléfono</label>
                                                    {userId ? (
                                                        <input type="text" className="form-control"
                                                            name='phone'
                                                            value={professorData.phone}
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control">{professorData.phone}</label>
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
                                                    {userId ? (
                                                        <input type="text" className="form-control"
                                                            name='degree'
                                                            value={professorData.degree}
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control">{professorData.degree}</label>
                                                    )}
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label className="form-label">Experiencia</label>
                                                    {userId ? (
                                                        <textarea className="form-control" rows="5" value={professorData.description}
                                                            name='description'
                                                            onChange={handleInputChange}></textarea>
                                                    ) : (
                                                        <label className="form-control">{professorData.description}</label>
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
                            {userId && (
                                <>
                                    <button type="button" className="btn btn-primary mx-2"
                                        onClick={handleFormSubmit}>
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
                </div>)
            }</>
    );
}


export default Profile;