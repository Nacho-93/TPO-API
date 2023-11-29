import React from 'react'
import { useUserContext } from '../../../Context/UserContext'
import { useTutorContext } from '../../../Context/TutorContext'
import ModalAgregar from '../../Modal/ModalAgregar'
import Card from '../../Card/Card';
import ModalEliminar from '../../Modal/ModalEliminar';
import ModalEsconder from '../../Modal/ModalEsconder';
import { useLocation } from 'react-router-dom';
import './styleViews.css'
import ModalUpdate from '../../Modal/ModalUpdate';


function Classes() {
    const { tutors } = useTutorContext();
    const { userId, login, logout } = useUserContext();
    const [isPublic, setIsPublic] = React.useState(true);

    // course_public
    const user_id_byLocation = parseInt(useLocation().pathname.split("/")[2]);
    const isActual_user = userId && (userId === user_id_byLocation);

    // /perfil-profesor/3/clases

    const classes_list = tutors.map((tutor) => {
        if (tutor.id === user_id_byLocation && tutor.courses) {
            return tutor.courses.map((course, index) => {
                if (!isActual_user && !course.course_public) {
                    return null;
                }
                let color = course.course_public ? "warning" : "secondary";
                return (
                    <>
                        <tr className={`table-${color}`}>
                            <th scope="row">
                                {course.title}</th>
                            <td className="">
                                {course.price_hour}</td>
                            <td className="">
                                {course.frequency[0] > 1
                                    ? `${course.frequency[0]} clases/semana`
                                    : "1clase/semana"}</td>
                            <td className="">
                                {course.frequency[2]}{" "}{course.frequency[2] === 1
                                    ? "semana"
                                    : "semanas"}</td>
                            <td className="">
                                {course.info_course[2] && course.info_course[3]
                                    ? "Presencial/Online"
                                    : (course.info_course[2] ? "Presencial" : "Online")}</td>
                            <td className="">{course.info_course[0] ? "Si" : "No"}</td>
                            <td className="">{course.info_course[1] ? "Si" : "No"}</td>

                            <td>
                                {isActual_user && <div className='d-flex justify-content-between align-items-end' style={{ maxWidth: "720px", margin: "0 auto" }}>
                                    <button type="button" class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#UpdateModal" data-bs-whatever="@getbootstrap">
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <ModalUpdate />
                                    <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#EliminarModal" data-bs-whatever="@getbootstrap">
                                        <i className="fa-solid fa-x"></i>
                                    </button>
                                    <ModalEliminar />
                                </div>}
                            </td>
                        </tr>

                    </>
                );
            });
        }

        return null; // Retornar null si no se cumple la condición
    });


    return (
        <div className='bg-change-color-profile'>
            <section id="call-to-action" class="action-diferent section-home">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            {isActual_user ? <h3>Mis clases</h3> : <h3>Clases de {tutors[user_id_byLocation].name}</h3>}
                            {isActual_user && <><button type="button"
                                className="btn btn-info w-50"
                                data-bs-toggle="modal"
                                data-bs-target="#AgregarModal"
                                data-bs-whatever="@getbootstrap">
                                Agregar clase
                            </button>
                                <ModalAgregar /></>}

                        </div>

                    </div>
                </div>
            </section>
            <section className="table-responsive table-classes">
                <table className="table table-info table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">$/hora</th>
                            <th scope="col">Frecuencia</th>
                            <th scope="col">Duración</th>
                            <th scope="col">Modalidad</th>
                            <th scope="col">Individual</th>
                            <th scope="col">Grupal</th>
                            <th scope="col">Actualizar</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {classes_list}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Classes;