import React from 'react'
import { useState } from 'react';
import { Star } from '../Star/Star';
function ModalFilter(props) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('allCategories');

    const handleCategoriaChange = (e) => {
        setCategoriaSeleccionada(e.target.value);

    };
    const handleAplicarClick = () => {
        props.handleFilter(categoriaSeleccionada);
    };
    return (
        <div class="modal fade" id="filterModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="filterModalLabel">Filtros de búsqueda</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Categoria</label>
                                <select id="categoriaSelect" class="form-select" value={categoriaSeleccionada}
                                    onChange={handleCategoriaChange} aria-label="Default select example">
                                    <option selected value="allCategories">Todas las categorias</option>
                                    <option value="Biología">Biología</option>
                                    <option value="Física">Física</option>
                                    <option value="Matemáticas">Matemáticas</option>
                                    <option value="Música">Música</option>
                                    <option value="Idiomas">Idiomas</option>
                                    <option value="Programación web">Programación</option>
                                    <option value="Química">Química</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Frecuencia de clase:</label>
                                <select class="form-select" aria-label="Default select example" required>
                                    <option selected disabled>-</option>
                                    <option value="1">Clase única</option>
                                    <option value="2">Semanal</option>
                                    <option value="3">Mensual</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="recipient-name" class="col-form-label" >Tipo de clase:</label>
                                <div className="form-check">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input"
                                            type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Individual</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input"
                                            type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">Grupal</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Calificación</label>
                                <Star />
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleAplicarClick}>Aplicar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFilter;