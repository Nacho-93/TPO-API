import React from 'react'
import { useState } from 'react'
import { acceptReview } from '../../controllers/courses.controller'

function ModalAceptar({ course_id, title, review_id, ...props }) {
  const [formData, setFormData] = useState({
    _id: course_id,
    course_id: course_id,
    title: title,
    review_id: review_id,
  })

  const handleAccept = async () => {
    console.log(typeof (course_id), typeof (review_id))
    const res = await acceptReview(course_id, review_id)
    if (res.rdo === 0) {
      console.log("Review aceptada")
    }
    console.log(res)
    console.log("MODAl")
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
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