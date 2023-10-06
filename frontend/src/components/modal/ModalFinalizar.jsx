import React from 'react'

function ModalFinalizar() {
  return (
    <div class="modal fade" id="FinalizarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Estas seguro que desea finalizar la clase?</h5>
        
      </div>
      <div class="modal-body">
        Si confirma la clase se dara por finalizada
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Finalizar</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalFinalizar