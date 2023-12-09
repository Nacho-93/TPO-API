import React from 'react'
import { useCoursesContext } from '../../Context/CoursesContext';
import { useState, useEffect } from 'react';
import Loading from '../Loading';
import { contactProfessor } from '../../controllers/professor.controller';
function ModalContact({ allTitles, tutor }) {

    const { allCoursesContext, fetchCourses } = useCoursesContext();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        title: "",
        message: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleContactClick = async (e) => {

        const course_id = allTitles[formData.title]
        delete formData.title
        formData.course_id = course_id

        const res = await contactProfessor(formData, tutor._id)

        if (res.status === 200) {
            fetchCourses()
        }
        setFormData({
            name: "",
            phone: "",
            email: "",
            title: "",
            message: ""
        });
    }

    return (
        <>
            {false ? <Loading /> : (
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
                                        <label for="name" class="col-form-label">Nombre:</label>
                                        <input type="text" class="form-control" id="name"
                                            name='name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone" class="col-form-label">Teléfono:</label>
                                        <input type="tel" class="form-control"
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            id="phone" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="col-form-label">Email:</label>
                                        <input type="email" class="form-control"
                                            id="email"
                                            name='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="col-form-label">
                                            ¿Qué clase te interesa?
                                        </label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            name="title"
                                            id="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="" selected disabled>
                                                Seleccionar un curso
                                            </option>
                                            {Object.keys(allTitles).map((k) => (
                                                <option key={allTitles[k]} value={k}>
                                                    {k}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Mensaje:</label>
                                        <textarea class="form-control"
                                            id="message-text"
                                            name='message'
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={handleContactClick}
                                >Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default ModalContact;