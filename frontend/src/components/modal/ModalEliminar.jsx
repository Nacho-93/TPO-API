import React from 'react'
import { useCoursesContext } from '../../Context/CoursesContext'
import { deleteCourse } from '../../controllers/courses.controller';

function ModalEliminar({ course_id, ...props }) {

  const { fetchCourses } = useCoursesContext();
  const modalIdRef = React.useRef(course_id);

  const handleDelete = async () => {
    const id = modalIdRef.current;
    try {
      const res = await deleteCourse(id)
      console.log("El curso fue eliminado con exito!")
      fetchCourses();
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
      id={`delete:${modalIdRef.current}`}>

      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">¿Estas seguro que deseas borrar el servicio?</h5>

          </div>
          <div class="modal-body">
            Si elimina el servicio nadie podra contratarlo y se borrara de forma permanente de la pagina.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEliminar