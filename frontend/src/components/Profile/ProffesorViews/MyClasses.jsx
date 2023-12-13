import React from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import ModalAgregar from '../../Modal/ModalAgregar'
import ModalEliminar from '../../Modal/ModalEliminar';
import { useLocation } from 'react-router-dom';
import './styleViews.css'
import ModalUpdate from '../../Modal/ModalUpdate';
import { useCoursesContext } from '../../../Context/CoursesContext';
import { useEffect } from 'react';

function Classes() {
    const { tutorsContext } = useTutorContext();
    const { allCoursesContext } = useCoursesContext();

    const userId = useLocation().pathname.split("/")[2];
    const isActual_user = userId && (localStorage.getItem('userId') === userId);
    const professor = tutorsContext[userId];
    const firstLoad = localStorage.getItem('firstLoad') === 'true'

    useEffect(() => {
        if (firstLoad) {
            localStorage.setItem('firstLoad', false);
            window.location.reload(); // Realiza el reload para que no falle algo que no pude solucionar ;(
        }
    }, [firstLoad]);

    // /perfil-profesor/3/clases
    const coursesArray = Object.values(allCoursesContext); // Convertir el objeto de cursos en un arreglo


    const classes_list = coursesArray.map((course) => {
        if (course.tutor_id !== userId) { return null; }
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
                            : "1 clase/semana"}</td>
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

                    {isActual_user && <td>
                        <div className='d-flex justify-content-between align-items-end' style={{ maxWidth: "720px", margin: "0 auto" }}>
                            <button type="button" class="btn btn-warning mx-2" data-bs-toggle="modal"
                                data-bs-target={`#update:${course._id}`} data-bs-whatever="@getbootstrap">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <ModalUpdate oldCourse={course} course_id={course._id} />
                            <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal"
                                data-bs-target={`#delete:${course._id}`} data-bs-whatever="@getbootstrap">
                                <i className="fa-solid fa-x"></i>
                            </button>
                            <ModalEliminar course_id={course._id} />
                        </div>
                    </td>}
                </tr>

            </>
        )
    });




    return (
        <div className='bg-change-color-profile pb-5'>
            <section id="call-to-action" class="action-diferent section-home">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            {isActual_user ? <h3>Mis clases</h3> : <h3>Clases de {professor.name}</h3>}
                            {isActual_user && <><button type="button"
                                className="btn btn-info w-50"
                                data-bs-toggle="modal"
                                data-bs-target="#AgregarModal"
                                data-bs-whatever="@getbootstrap">
                                Agregar clase
                            </button>
                                <ModalAgregar user_id={userId} /></>}

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
                            {isActual_user && <th scope="col">Actualizar</th>}
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