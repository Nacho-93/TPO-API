import React from 'react'

function ModalUpdate() {
    return (
        <div class="modal fade text-white" data-bs-theme="dark" id="UpdateModal" tabindex="-1" aria-labelledby="UpdateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="UpdateModalLabel">Modificar clase</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Titulo:</label>
                                <input type="text" class="form-control" id="recipient-name" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Frecuencia semanal:</label>
                                <select class="form-select" aria-label="Default select example" required>
                                    <option selected disabled>Cantidad de dias</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">Todos los dias</option>

                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Duración en semanas:</label>
                                <input type="text" class="form-control" id="recipient-name" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Tipo de clase:</label>
                                <select class="form-select" aria-label="Default select example" required>
                                    <option selected disabled>-</option>
                                    <option value="1">Individual</option>
                                    <option value="2">Grupal</option>
                                    <option value="3">Individual/Grupal</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Modalidad:</label>
                                <select class="form-select" aria-label="Default select example" required>
                                    <option selected disabled>-</option>
                                    <option value="1">Presencial</option>
                                    <option value="2">Online</option>
                                    <option value="3">Presencial/Online</option>
                                </select>
                            </div>
                            <div class="mb-3" >
                                <label for="recipient-name" class="col-form-label">Costo:</label>
                                <input type="money" class="form-control" id="recipient-name" placeholder="$/hora" required></input>
                            </div>
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Despublicar clase</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Descripcion:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdate;