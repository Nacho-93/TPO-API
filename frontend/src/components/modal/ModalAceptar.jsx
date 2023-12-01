import React from 'react'
import { useState } from 'react'
import { acceptReview } from '../../controllers/courses.controller'
import { useCoursesContext } from '../../Context/CoursesContext'
function ModalAceptar({ course_id, title, review_id, ...props }) {
  const { allCoursesContext, fetchCourses } = useCoursesContext();
  const [formData, setFormData] = useState({
    _id: course_id,
    course_id: course_id,
    title: title,
    review_id: review_id,
  })

  const modalIdRef = React.useRef(review_id);



  const handleAccept = async () => {
    const id = modalIdRef.current;
    const res = await acceptReview(course_id, id)
    if (res.rdo === 0) {
      fetchCourses();
    }
  }


  return (
    <div class="modal fade text-white"
      data-bs-theme="dark"
      data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby={`${modalIdRef.current}Label`}
      aria-hidden="true"
      id={modalIdRef.current}>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AceptarModalLabel">¿Quieres aceptar {props.text}?</h5>
          </div>
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