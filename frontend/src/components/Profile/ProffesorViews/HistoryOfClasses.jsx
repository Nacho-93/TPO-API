import React from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import { useUserContext } from '../../../Context/UserContext'
import ModalAgregar from '../../modal/ModalAgregar';
import ModalEsconder from '../../modal/ModalEsconder';
import ModalEliminar from '../../modal/ModalEliminar';
import Card from '../../Card/Card';
import ModalAceptar from '../../modal/ModalAceptar';
import ModalRechazar from '../../modal/ModalRechazar';
import ModalFinalizar from '../../modal/ModalFinalizar';

function HistoryOfClasses() {
    const { tutors } = useTutorContext();
    const { isLoggedIn, userId, login, logout } = useUserContext();
    const states = ["Solicitada", "Aceptada", "Finalizada", "Cancelada"];
    const colors = ["warning", "success", "primary", "secondary"]
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

                    const state = states[active_class.status.indexOf(true)];
                    const color = colors[active_class.status.indexOf(true)];

                    return (
                        <>
                            <div className='' style={{ maxWidth: "700px", margin: "0 auto" }}>
                                <div className='card mb-3 mt-5'>
                                    <div class="card-body">

                                        <div className="name-rating d-flex justify-content-between align-items-center">
                                            <h3 class="card-title p-1">Clase de{" "}{course.title}</h3>
                                            <h6>{active_class.date}</h6>

                                        </div>

                                        <p class="card-text">
                                            Duracion: {course.frequency[2] + ' ' + course.frequency[1] + "s"}</p>

                                    </div>
                                    <div
                                        className="card-footer d-flex bg-transparent 
                                    border-dark justify-content-between align-items-center">
                                        <h5>
                                            Alumno: {active_class.name}
                                        </h5>

                                        <h3
                                            className={`btn btn-${color}`}
                                            style={{ border: 'none', cursor: 'default' }}>
                                            {state}</h3>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-end align-items-end mb-5'>
                                    <div className='d-flex justify-content-end align-items-end mb-5'>

                                        {active_class.status[0] && (
                                            <button type="button" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#AceptarModal" data-bs-whatever="@getbootstrap">
                                                <i className="fa-solid fa-check"></i>
                                            </button>
                                        )}
                                        {active_class.status[1] &&
                                            (
                                                <button type="button" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#AceptarModal" data-bs-whatever="@getbootstrap">
                                                    <i class="fa-solid fa-flag-checkered"></i>
                                                </button>
                                            )}
                                        {(active_class.status[0] || active_class.status[1]) && <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#RechazarModal" data-bs-whatever="@getbootstrap">
                                            <i className="fa-solid fa-x"></i>
                                        </button>}



                                    </div>


                                </div>
                                <ModalAceptar text={`la clase de ${course.title} con ${active_class.name}`} />
                                <ModalRechazar text={`de ${active_class.name} para la clase de ${course.title}`} />
                                <ModalFinalizar text={``} />
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
                            <h3>Historial de clases</h3>
                        </div>

                    </div>
                </div>
            </section>
            {classes_list}
        </>
    )
}

export default HistoryOfClasses