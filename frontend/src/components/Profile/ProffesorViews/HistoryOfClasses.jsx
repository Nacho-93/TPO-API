import React from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import { useUserContext } from '../../../Context/UserContext'
import ModalAgregar from '../../modal/ModalAgregar';
import ModalEsconder from '../../modal/ModalEsconder';
import ModalEliminar from '../../modal/ModalEliminar';
import Card from '../../Card/Card';

function HistoryOfClasses() {
    const { tutors } = useTutorContext();
    const { isLoggedIn, userId, login, logout } = useUserContext();

    // "active_classes": [{
    //     "name": "Lorenzo Perez",
    //     "date": "2021-05-15",
    //     "status": [false, true, false, false]
    //   },
    const classes_list = tutors.map((tutor) => {
        if (tutor.id === userId && tutor.courses) {
            return tutor.courses.map((course) => {
                if (course.active_classes.length === 0) {
                    return null;
                }
                return course.active_classes.map((active_class) => {

                    return (
                        <>
                            <div className='' style={{ maxWidth: "700px", margin: "0 auto" }}>
                                <div className='card mb-3 mt-5'>
                                    <div class="card-body">

                                        <div className="name-rating d-flex align-items-center">
                                            <h3 class="card-title p-1">Clase de{" "}{course.title}</h3>
                                            <h6>{active_class.date}</h6>

                                        </div>

                                        <p class="card-text"><i class="fa-solid fa-quote-left fa-quotes"></i>{" "}
                                            asdasdsasad {" "}
                                            <i class="fa-solid fa-quote-right fa-quotes"></i></p>
                                    </div>
                                    <div class="card-footer bg-transparent border-success">
                                        <h3 className='btn btn-primary'>{course.state}</h3>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-end align-items-end mb-5' style={{ maxWidth: "720px", margin: "0 auto" }}>
                                    <button type="button" class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#AgregarModal" data-bs-whatever="@getbootstrap">
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </button>

                                    <button type="button" class="btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#OcultarModal" >

                                    </button>


                                    <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#EliminarModal" data-bs-whatever="@getbootstrap">
                                        <i className="fa-solid fa-x"></i>
                                    </button>

                                </div>
                            </div>
                        </>
                    )
                })
            })
        }
    })





    return (
        <>
            <section id="call-to-action" class="action-diferent section-home">
                <div class="container" data-aos="zoom-out">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h3>Mis clases</h3>
                            <button type="button"
                                className="btn btn-info w-50"
                                data-bs-toggle="modal"
                                data-bs-target="#AgregarModal"
                                data-bs-whatever="@getbootstrap">
                                Agregar clase
                            </button>

                        </div>

                    </div>
                </div>
            </section>
            {classes_list}
        </>
    )
}

export default HistoryOfClasses