import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import { useUserContext } from '../../Context/UserContext'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { updateProfile } from '../../controllers/professor.controller'
import Loading from '../Loading'
import ModalContact from '../Modal/ModalContact'
import { useCoursesContext } from '../../Context/CoursesContext'
import { useProfileContext } from '../../Context/ProfileContext'


function Profile() {
    const { professorData, setProfessorData, fetchProfileData } = useProfileContext();
    const { logoutContext } = useUserContext();
    const [updatedData, setUpdatedData] = useState({});
    const [image, setImage] = useState(null);


    const userId = useLocation().pathname.split('/')[2];
    const isUser = localStorage.getItem('userId') === userId;

    const { allCoursesContext } = useCoursesContext();
    const [allTitles, setAllTitles] = useState({});
    let noContactAvailable = false;

    useEffect(() => {
        if (localStorage.getItem('firstLoad') === 'true') {
            localStorage.setItem('firstLoad', false);
            window.location.reload(); // Realiza el reload para que no falle algo que no pude solucionar ;(
        }
    }, []);

    useEffect(() => {
        const coursesArray = Object.values(allCoursesContext); // Convertir el objeto de cursos en un arreglo
        const titles = coursesArray
            .filter((course) => course.tutor_id === userId)
            .reduce((acc, course) => {
                acc[course.title] = course._id;
                return acc;
            }, {});
        setAllTitles(titles);

    }, [userId, allCoursesContext]);

    useEffect(() => {
        if (professorData && userId !== professorData._id) {
            fetchProfileData(userId);
        }
    }, [userId, professorData, fetchProfileData]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name !== 'oldPassword' && name !== 'secondPassword') {
            setProfessorData({
                ...professorData,
                [name]: value,
            });
        }
        setUpdatedData({
            ...updatedData,
            [name]: value,
        });
    };



    const handleFormSubmit = async (e) => {

        if (updatedData.password && updatedData.secondPassword) {
            if (updatedData.password !== updatedData.secondPassword) {
                alert("Las contraseñas no coinciden");
                return;
            }
            delete updatedData.secondPassword;
        }
        try {
            if (image) {
                updatedData.image_profile = image
            }
            const updatedProfile = await updateProfile({
                ...updatedData,
            }, userId);

            if (image) {
                localStorage.setItem('image_url', btoa(updatedProfile.image_profile))
            }
            setProfessorData(updatedProfile);
            setUpdatedData({});
            setImage(null);


        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
        }
    };

    return (
        <>
            {!professorData.name ? <div className="container-profile pb-5"><Loading /></div>
                :
                (<div className="container-profile pb-5">
                    <div className="container light-style flex-grow-1 container-p-y">
                        <h2 className="list-group list-group-flush account-settings-links text-light py-2">
                            {isUser ? "Configurar Perfil" : `Perfil de ${professorData.name}`}
                        </h2>
                    </div>
                    <div className="container light-style flex-grow-1 container-p-y">
                        <div className="card card-profile overflow-hidden">
                            <div className="row no-gutters row-bordered row-border-light">
                                <div className="col-md-3 pt-0">
                                    <div className="list-group list-group-flush account-settings-links">
                                        <a className="list-group-item list-group-item-action active icon-link" data-toggle="list" href="#account-general">
                                            General
                                        </a>
                                        <a className="list-group-item list-group-item-action icon-link" data-toggle="list" href="#account-info">
                                            Información
                                        </a>
                                        <Link
                                            className="list-group-item list-group-item-action icon-link"
                                            to={`/perfil/${userId}/misClases`}
                                        >
                                            {isUser ? 'Mis clases' : `Clases de ${professorData.name}`}
                                        </Link>
                                        {isUser ? (
                                            <>
                                                <Link
                                                    className="list-group-item list-group-item-action icon-link"
                                                    to={`/perfil/${userId}/solicitudes-clases`}
                                                >
                                                    Gestionar solicitudes
                                                </Link>
                                                <a className="list-group-item list-group-item-action icon-link" data-toggle="list" href="#account-change-password">
                                                    Cambiar contraseña
                                                </a>
                                                <Link
                                                    className="list-group-item list-group-item-action red-link"
                                                    data-toggle="list"
                                                    to={"/"}
                                                    onClick={() => logoutContext()}
                                                >
                                                    Cerrar sesión
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                {false ? <Loading /> :
                                                    <>
                                                        <button
                                                            type="button"
                                                            class="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModalContact"
                                                            data-bs-whatever="@getbootstrap"
                                                            disabled={noContactAvailable}
                                                        >
                                                            Contactar
                                                        </button>
                                                        <ModalContact allTitles={allTitles} tutor={professorData} />
                                                    </>
                                                }
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="account-general">
                                            <div className="card-body media align-items-center d-flex">
                                                <img
                                                    src={professorData.image_profile || process.env.PUBLIC_URL + '/images/notperfil.png'}
                                                    alt="Imagen de perfil"
                                                    className="ui-w-80 rounded" />
                                                <div className="media-body ml-4">
                                                    {isUser ? (
                                                        <>
                                                            <label className="btn btn-secondary ms-2">
                                                                <i class="fa-solid fa-cloud-arrow-up"></i>

                                                                <input type="file" className="account-settings-fileinput"
                                                                    name='image_profile'
                                                                    onChange={(e) => setImage(e.target.files[0])}
                                                                />
                                                            </label>{" "}
                                                            <label className="text-light small mt-1">JPG/PNG</label>
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="form-group">
                                                    <h4 className="font-weight-bold">Nombre</h4>
                                                    {isUser ? (
                                                        <input type="text" className="form-control" name='name'
                                                            value={professorData.name}
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control">{professorData.name}</label>
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Apellido</label>
                                                    {isUser ? (
                                                        <input type="text" className="form-control" name='lastName' value={professorData.lastName}
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control">{professorData.lastName}</label>
                                                    )}
                                                </div>
                                                <h4 className="my-3 font-weight-bold">Contacto</h4>
                                                <div className="form-group">
                                                    <label className="form-label">Email</label>
                                                    {isUser ? (
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
                                                    {isUser ? (
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
                                                    <input type="password" className="form-control"
                                                        name='oldPassword'
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Nueva contraseña</label>
                                                    <input type="password" className="form-control"
                                                        name='password'
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Repetir contraseña</label>
                                                    <input type="password" className="form-control"
                                                        name='secondPassword'
                                                        onChange={handleInputChange}
                                                    />


                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="account-info">
                                            <div className="card-body pb-2">
                                                <div className="form-group">
                                                    <h5 className="font-weight-bold">Titulo</h5>
                                                    {isUser ? (
                                                        <input type="text" className="form-control"
                                                            name='degree'
                                                            value={professorData.degree}
                                                            onChange={handleInputChange} />
                                                    ) : (
                                                        <label className="form-control">{professorData.degree}</label>
                                                    )}
                                                </div>
                                                <div className="form-group mt-3">
                                                    <h5 className="font-weight-bold">Experiencia</h5>
                                                    {isUser ? (
                                                        <textarea className="form-control" rows="5"
                                                            value={professorData.description}
                                                            name='description'
                                                            onChange={handleInputChange}></textarea>
                                                    ) : (
                                                        <label className="form-control">{professorData.description}</label>
                                                    )}
                                                </div>
                                                <div className="form-group mt-3">
                                                    <h5 className="font-weight-bold">Horas de experiencia</h5>
                                                    {isUser ? (
                                                        <input type='text' className="form-control"
                                                            value={professorData.hours_experience}
                                                            name='hours_experience'
                                                            onChange={handleInputChange}></input>
                                                    ) : (
                                                        <label className="form-control">{professorData.hours_experience}</label>
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
                            {isUser && (
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
                </div >)
            }</>
    );
}


export default Profile;