import React from 'react'

function ModalRechazar(props) {
  return (
    <div class="modal fade" id="RechazarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-body">
            ¿Estas seguro que desea rechazar la solicitud {props.text}?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalRechazar