import React from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import { useUserContext } from '../../../Context/UserContext'
import Card from '../../Card/Card';
import ModalPut from '../../Modal/ModalPut';
import { ManageRequests } from './ManageRequests';
import './styleViews.css'
import { useCoursesContext } from '../../../Context/CoursesContext';
import { useEffect, useState } from 'react';

function ManageClasses() {
    const { tutorsContext } = useTutorContext();
    const { allCoursesContext, fetchCourses } = useCoursesContext();
    const states = ["Solicitada", "Aceptada", "Finalizada", "Cancelada"];
    const colors = ["warning", "success", "danger", "secondary"]
    const userId = localStorage.getItem('userId');
    const [selectedCourseId, setSelectedCourseId] = React.useState(null);
    const [selectedChange, setSelectedChange] = React.useState(null);
    // "active_classes": [{
    //     "name": "Lorenzo Perez",
    //     "date": "2021-05-15",
    //     "status": [false, true, false, false]
    //   },

    const [coursesArray, setCoursesArray] = useState([]);

    useEffect(() => {
        // Fetch initial courses data
        setCoursesArray(Object.values(allCoursesContext));
    }, [allCoursesContext]);

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
                                text={`realizar esta acción?`}
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
        <div className='bg-change-color-profile pb-5'>
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

        </div>
    )
}

export default ManageClasses