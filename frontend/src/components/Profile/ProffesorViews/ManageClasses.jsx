import React from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import { useUserContext } from '../../../Context/UserContext'
import Card from '../../Card/Card';
import ModalAceptar from '../../Modal/ModalAceptar';
import ModalRechazar from '../../Modal/ModalRechazar';
import ModalFinalizar from '../../Modal/ModalFinalizar';
import { ManageRequests } from './ManageRequests';
import './styleViews.css'

function ManageClasses() {
    const { tutors } = useTutorContext();
    const { isLoggedIn, userId, login, logout } = useUserContext();
    const states = ["Solicitada", "Aceptada", "Finalizada", "Cancelada"];
    const colors = ["warning", "success", "danger", "secondary"]
    // "active_classes": [{
    //     "name": "Lorenzo Perez",
    //     "date": "2021-05-15",
    //     "status": [false, true, false, false]
    //   },
    const show_cell_md = "d-none d-md-table-cell"
    const show_cell_sm = "table-cell cell-mobile"

    const get_end_date = (startDate, frequency) => {
        let date = new Date(startDate);
        const amount = frequency[2];
        const unit = frequency[1];
        let days;
        if (unit === "semana") {
            days = amount * 7;
        }
        else if (unit === "mes") {
            days = amount * 30;
        }

        date.setDate(date.getDate() + days);
        const end_date = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day: 'numeric' });
        return end_date;
    }



    const classes_list = tutors.map((tutor) => {
        if (tutor.id === userId && tutor.courses) {
            return tutor.courses.map((course) => {
                if (course.active_classes.length === 0) {
                    return null;
                }
                return course.active_classes.map((active_class) => {

                    const state = states[active_class.status.indexOf(true)];
                    const color = colors[active_class.status.indexOf(true)];
                    const date = new Date(active_class.date);
                    const init_date = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day: 'numeric' });
                    const end_date = get_end_date(active_class.date, course.frequency);


                    return (
                        <>
                            <tr className={`table-${color}`}>
                                <th scope="row">{course.title}</th>
                                <td>{active_class.name}</td>
                                <td className={show_cell_sm}>
                                    {init_date}{" - "}{end_date}
                                </td>
                                <td className={show_cell_md}>{init_date}</td>
                                <td className={show_cell_md}>{end_date}</td>
                                <td className={show_cell_md}>{state}</td>

                                <td>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        {active_class.status[0] && (
                                            <button type="button" className="btn btn-success" data-bs-toggle="modal"
                                                data-bs-target="#AceptarModal" data-bs-whatever="@getbootstrap">
                                                <i className="fa-solid fa-check"></i>
                                            </button>
                                        )}
                                        {active_class.status[1] &&
                                            (
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#AceptarModal" data-bs-whatever="@getbootstrap">
                                                    <i class="fa-solid fa-flag-checkered"></i>
                                                </button>
                                            )}
                                        {(active_class.status[0] || active_class.status[1]) &&
                                            <button type="button" className="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#RechazarModal" data-bs-whatever="@getbootstrap">
                                                <i className="fa-solid fa-x"></i>
                                            </button>}



                                    </div>
                                    <ModalAceptar text={`la clase de ${course.title} con ${active_class.name}`} />
                                    <ModalRechazar text={`de ${active_class.name} para la clase de ${course.title}`} />
                                    <ModalFinalizar text={``} />

                                </td>
                            </tr>
                        </>
                    )
                })
            })
        }
    })





    return (
        <div className='bg-change-color-profile pb-5'>
            <ManageRequests />
            <section className="table-classes">
                <table className="table table-info">
                    <thead>
                        <tr>
                            <th scope="col">Clase</th>
                            <th scope="col">Alumno</th>
                            <th scope="col" className={show_cell_sm}>Inicio/Fin</th>
                            <th scope="col" className={show_cell_md}>Fecha inicio</th>
                            <th scope="col" className={show_cell_md}>Fecha fin</th>
                            <th scope="col" className={show_cell_md}>Estado</th>
                            <th scope="col">Actualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes_list}
                    </tbody>
                </table>
            </section>

        </div>
    )
}

export default ManageClasses