import React from 'react'
import { manageCourseStatus } from '../../controllers/courses.controller'
import { useCoursesContext } from '../../Context/CoursesContext'


function ModalPut({ course_id, ac_id, action, ...props }) {
    const modalIdRef = React.useRef(ac_id);
    const { allCoursesContext, fetchCourses } = useCoursesContext();

    const handlePut = async () => {
        let status = [false, false, false, false]
        status[action] = true

        const id = modalIdRef.current;
        const res = await manageCourseStatus(course_id, id, status)
        if (res.rdo === 0) {
            console.log("STATUS ACTUALIZADO")
            fetchCourses();
        }
    }

    return (
        <div class="modal fade text-white"
            data-bs-theme="dark"
            data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-hidden="true"
            aria-labelledby={`${modalIdRef.current}Label`}
            id={modalIdRef.current}
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-body">
                        ¿Estas seguro que deseas {props.text}?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            onClick={handlePut}
                        >Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPut