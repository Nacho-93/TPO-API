import React from 'react'

function ModalEliminar() {
  return (

    <div class="modal fade" id="EliminarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEliminar