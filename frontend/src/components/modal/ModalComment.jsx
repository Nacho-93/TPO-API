import React from 'react'

function ModalComment() {
    return (
        <div class="modal fade" id="exampleModalComment" tabindex="-1" aria-labelledby="exampleModalCommentLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCommentLabel">Calificar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>

                            <div class="mb-3">
                                <label for="validationServer01" class="form-label">Nombre:</label>
                                <input type="text" class="form-control" id="validationServer01" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Email:</label>
                                <input type="email" class="form-control" id="recipient-name" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Comentario:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                            <div class="starwidget mb-2">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary w-100">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComment