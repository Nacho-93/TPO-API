import React from 'react'

function ModalRechazar() {
  return (
    <div class="modal fade" id="RechazarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Desea rechazar?</h5>
        
      </div>
      <div class="modal-body">
        Estas seguro que desea rechazar la solicitud?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Confirmar</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalRechazar