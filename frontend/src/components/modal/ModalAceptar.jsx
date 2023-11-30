import React from 'react'

function ModalAceptar(props) {
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
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ModalAceptar