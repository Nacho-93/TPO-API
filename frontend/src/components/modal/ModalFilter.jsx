import React, { useState } from 'react';
import { Star } from '../Opinions/Star/Star';
import './Modals.css';

function ModalFilter(props) {
    const [formData, setFormData] = useState({
        category: 'allCategories',
        frequency_class: '',
        type_of_class: '',
        rating: 0, // Supongamos que 0 representa ninguna calificación seleccionada.
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Actualizar el estado según el tipo de campo.
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRatingChange = (rating) => {
        // Actualizar el estado de la calificación.

        setFormData((prevData) => ({
            ...prevData,
            rating: rating,
        }));
    };

    const handleClick = () => {
        // Pasar todos los valores del formulario como un objeto a la función handleFilter.
        props.handleFilter(formData);
    };

    return (
        <div class="modal fade text-white" id="filterModal"
            data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="filterModalLabel" aria-hidden="true" data-bs-theme="dark">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="filterModalLabel">Filtros de búsqueda</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div class="mb-3">
                                <label for="category" class="col-form-label">Categoria</label>
                                <select
                                    id="category"
                                    name="category"
                                    class="form-select"
                                    value={formData.category}
                                    onChange={handleChange}
                                    aria-label="Default select example"
                                >
                                    {/* Opciones de categoría */}
                                    <option selected value="allCategories">Todas las categorias</option>
                                    <option value="Biología">Biología</option>
                                    <option value="Física">Física</option>
                                    <option value="Matemáticas">Matemáticas</option>
                                    <option value="Música">Música</option>
                                    <option value="Idiomas">Idiomas</option>
                                    <option value="Programación">Programación</option>
                                    <option value="Química">Química</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="frequency" class="col-form-label">Frecuencia de clase:</label>
                                <select
                                    id="frequency"
                                    name="frequency_class"
                                    class="form-select"
                                    value={formData.frequency_class}
                                    onChange={handleChange}
                                    required
                                >
                                    {/* Opciones de frecuencia de clase */}
                                    <option selected value="">-</option>
                                    <option value="1">Clase única</option>
                                    <option value="2">Semanal</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label class="col-form-label">Tipo de clase:</label>
                                <div className="form-check">
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="type_of_class"
                                            id="individual"
                                            value="individual"
                                            checked={formData.type_of_class === "individual"}
                                            onChange={handleChange}
                                        />
                                        <label class="form-check-label" for="individual">Individual</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="type_of_class"
                                            id="group"
                                            value="group"
                                            checked={formData.type_of_class === "group"}
                                            onChange={handleChange}
                                        />
                                        <label class="form-check-label" for="group">Grupal</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="rating" class="col-form-label">Calificación</label>
                                <Star value={formData.rating} onChange={handleRatingChange} />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Aplicar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFilter;









