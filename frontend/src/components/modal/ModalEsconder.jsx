import React from 'react'
import { useState } from 'react';
function ModalEsconder({ isPublic, handleClick }) {

  return (
    <div class="modal fade" id="OcultarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="OcultarModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="OcultarModalLabel">{isPublic ? "¿Estas seguro que deseas ocultar el servicio?"
              : "¿Estas seguro que deseas republicar el servicio?"}</h5>
          </div>
          <div class="modal-body">
            {isPublic ? "Si ocultas el servicio nadie podra verlo hasta que usted lo vuelva a poner publico. No se borrara de forma permanente de la pagina."
              : "Si republicas el servicio todos podran verlo."}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEsconder