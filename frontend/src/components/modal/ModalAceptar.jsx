import React from 'react'

function ModalAceptar() {
  return (
<div class="modal fade" id="AceptarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Desea aceptar esta clase?</h5>
        
      </div>
      <div class="modal-body">
        Si acepta esta clase se le confirmara la clase al alumno en la fecha y horario solicitado.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>
  )
}


export default ModalAceptar