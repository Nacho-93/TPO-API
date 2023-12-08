import React from 'react'
import { acceptReview } from '../../controllers/courses.controller'
import { useCoursesContext } from '../../Context/CoursesContext'

function ModalAceptar({ course_id, review_id, ...props }) {

  const { fetchCourses, allCoursesContext, setAllCoursesContext } = useCoursesContext();
  const modalIdRef = React.useRef(review_id);


  const handleAccept = async () => {
    const id = modalIdRef.current;
    try {
      const res = await acceptReview(course_id, id)

      console.log("El comentario fue aceptado con exito!")
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
      id={`aceptar:${modalIdRef.current}`}>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-body" id="AceptarModalLabel">¿Quieres aceptar {props.text}?</div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Cancelar</button>
            <button type="button" class="btn btn-success"
              data-bs-dismiss="modal"
              onClick={handleAccept}>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ModalAceptar;