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

  const [acceptReviewId, setAcceptReviewId] = useState(null); // Nuevo estado para almacenar el review_id

  // Actualizar el estado cuando se muestre este modal
  React.useEffect(() => {
    setAcceptReviewId(review_id);
  }, [review_id]);

  console.log("review_id", review_id)
  console.log("acceptReview", acceptReviewId)

  const handleAccept = async () => {


    const res = await acceptReview(course_id, acceptReviewId)
    if (res.rdo === 0) {
      fetchCourses();
      console.log("Review aceptada")
    }
    console.log(res)
    console.log("MODA")
  }
  const asd = () => {
    console.log("review_i", review_id)
  }

  return (
    <div class="modal fade text-white"
      data-bs-theme="dark" id="AceptarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="AceptarModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AceptarModalLabel">¿Quieres aceptar {props.text}?</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={asd}>Cancelar</button>
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