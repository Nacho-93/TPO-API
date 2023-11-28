import React from 'react'

function ModalContact() {

    return (
        <div class="modal fade text-white"
            data-bs-theme="dark"
            id="exampleModalContact"
            tabindex="-1"
            aria-labelledby="exampleModalContactLabel"
            aria-hidden="true"
        >

            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalContactLabel">Contactar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ width: "32px" }}></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Nombre:</label>
                                <input type="text" class="form-control" id="recipient-name"></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Teléfono:</label>
                                <input type="tel" class="form-control" id="recipient-name"></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Email:</label>
                                <input type="email" class="form-control" id="recipient-name"></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Rango de preferencia para comunicarse:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled>Rango horario</option>
                                    <option value="1">08:00 - 12:00</option>
                                    <option value="2">13:00 - 16:00</option>
                                    <option value="3">17:00 - 21:00</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Mensaje:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalContact;