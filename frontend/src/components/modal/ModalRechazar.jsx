import React from 'react';
import { useCoursesContext } from '../../Context/CoursesContext';
import { rejectReview } from '../../controllers/courses.controller';


function ModalRechazar({ course_id, review_id, ...props }) {
  const { allCoursesContext, fetchCourses, setAllCoursesContext } = useCoursesContext();


  const modalIdRef = React.useRef(review_id);


  const handleReject = async () => {
    const id = modalIdRef.current;
    try {
      const res = await rejectReview(course_id, id)
      console.log("El comentario fue rechazado con exito!")
      setAllCoursesContext({ ...allCoursesContext, [course_id]: res.updatedCourse });

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div class="modal fade text-white"
      data-bs-theme="dark"
      data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby={`${modalIdRef.current}Label`}
      aria-hidden="true"
      id={`rechazar:${modalIdRef.current}`}>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-body" id="RechazarModalLabel">
            ¿Estas seguro que desea rechazar la solicitud de comentario?
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Cancelar</button>
            <button type="button" class="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleReject}>Rechazar</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ModalRechazar;