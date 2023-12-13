import React from 'react'
import ModalPut from '../../Modal/ModalPut';
import { ManageRequests } from './ManageRequests';
import './styleViews.css'
import { useCoursesContext } from '../../../Context/CoursesContext';
import { useEffect, useState } from 'react';
import Loading from '../../Loading';

function ManageClasses() {

    const { allCoursesContext } = useCoursesContext();
    const states = ["Solicitada", "Aceptada", "Finalizada", "Cancelada"];
    const actions = ["aceptar", "finalizar", "cancelar"];
    const color_actions = ["success", "primary", "danger"];
    const colors = ["warning", "success", "danger", "secondary"]
    const userId = localStorage.getItem('userId');
    const [selectedChange, setSelectedChange] = useState(null);


    // "active_classes": [{
    //     "name": "Lorenzo Perez",
    //     "date": "2021-05-15",
    //     "status": [false, true, false, false]
    //   },

    useEffect(() => {
        if (localStorage.getItem('firstLoad') === 'true') {
            localStorage.setItem('firstLoad', false);
            window.location.reload(); // Realiza el reload para que no falle algo que no pude solucionar ;(
        }
    }, []);

    const [coursesArray, setCoursesArray] = useState([]);

    useEffect(() => {
        setCoursesArray(Object.values(allCoursesContext));

    }, [allCoursesContext]);


    const get_end_date = (startDate, frequency) => {
        let date = new Date(startDate);
        const amount = parseInt(frequency[2]);
        const unit = frequency[1];
        let days;
        if (unit === "semana" || unit === "semanal") {
            days = amount * 7;
        }
        else if (unit === "mes") {
            days = amount * 30;
        }

        date.setDate(date.getDate() + days);

        const end_date = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day: 'numeric' });
        return end_date;
    }

    if (coursesArray.length === 0 || Object.keys(allCoursesContext).length === 0) {
        return (
            <div className='bg-change-color pb-5'> <Loading /> </div>
        )
    }

    const classes_list = coursesArray.map((course) => {

        if (userId !== course.tutor_id || course.active_classes.length === 0) {
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
                        <td className="">{init_date}</td>
                        <td className="">{end_date}</td>
                        <td className="">{state}</td>

                        <td>
                            <div className='d-flex justify-content-between align-items-center'>
                                {active_class.status[0] && (
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal"
                                        data-bs-target={`#${active_class._id}`} data-bs-whatever="@getbootstrap"
                                        onClick={() => { setSelectedChange(1) }}
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                )}
                                {active_class.status[1] &&
                                    (
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target={`#${active_class._id}`} data-bs-whatever="@getbootstrap"
                                            onClick={() => { setSelectedChange(2) }}
                                        >
                                            <i class="fa-solid fa-flag-checkered"></i>
                                        </button>
                                    )}
                                {(active_class.status[0] || active_class.status[1]) &&
                                    <button type="button" className="btn btn-danger"
                                        data-bs-toggle="modal" data-bs-target={`#${active_class._id}`}
                                        data-bs-whatever="@getbootstrap"
                                        onClick={() => { setSelectedChange(3) }}
                                    >
                                        <i className="fa-solid fa-x"></i>
                                    </button>}



                            </div>
                            <ModalPut
                                course_id={course._id}
                                text={`${actions[selectedChange - 1]} la clase de ${course.title} con ${active_class.name}`}
                                color={color_actions[selectedChange - 1]}
                                ac_id={active_class._id}
                                action={selectedChange}

                            />

                        </td>
                    </tr>
                </>
            )
        })
    })



    return (
        <>
            {classes_list.length === 0 ?
                <div className='bg-change-color pb-5'> <Loading /> </div>
                :
                (<div className='bg-change-color-profile pb-5'>
                    <ManageRequests />
                    <section className="table-responsive table-classes">
                        <table className="table table-info table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Clase</th>
                                    <th scope="col">Alumno</th>
                                    <th scope="col" className="">Inicio</th>
                                    <th scope="col" className="">Fin</th>
                                    <th scope="col" className="">Estado</th>
                                    <th scope="col">Actualizar</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {classes_list}
                            </tbody>
                        </table>
                    </section>

                </div>)
            }
        </>
    )


}

export default ManageClasses;