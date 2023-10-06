import React from 'react'

function ModalEsconder() {
  return (
    <div class="modal fade" id="OcultarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="OcultarModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="OcultarModalLabel">Estas seguro que deseas ocultar el servicio?</h5>  
      </div>
      <div class="modal-body">
        Si ocultas el servicio nadie podra verlo hasta que usted lo vuelva a poner pulico. No se borrara de forma permanente de la pagina.
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

export default ModalEsconder