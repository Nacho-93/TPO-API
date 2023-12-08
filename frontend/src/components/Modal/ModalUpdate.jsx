import React from 'react'
import { useState } from 'react'
import { updateCourse } from '../../controllers/courses.controller'
import { useCoursesContext } from '../../Context/CoursesContext'

function ModalUpdate({ oldCourse, user_id }) {
    const { fetchCourses } = useCoursesContext();
    const [showAlert, setShowAlert] = useState(false);

    const [course, setCourse] = useState({
        _id: oldCourse._id,
        title: oldCourse.title,
        course_description: oldCourse.course_description,
        price_hour: oldCourse.price_hour,
        course_public: oldCourse.course_public,
        durationWeeks: oldCourse.frequency[2],
        frequency: [oldCourse.frequency[0], 'semanal', oldCourse.frequency[2]],
        info_course: oldCourse.info_course,
        // info_course: [true, false, false, false],  course.info_course == [individual, group, in_person, online]
        tutor_id: oldCourse.tutor_id,
    });

    const modalIdRef = React.useRef(oldCourse._id);
    console.log(course.info_course)
    const handleModalidad = (event) => {
        let individual = course.info_course[0];
        let group = course.info_course[1];

        if (event.target.value === "3") {
            individual = true;
            group = true;
        } else if (event.target.value === "2") {
            individual = false;
            group = true;
        }
        else if (event.target.value === "1") {
            individual = true;
            group = false;
        }



        setCourse({
            ...course,
            info_course: [individual, group, course.info_course[2], course.info_course[3]],
        });
    };

    const handleNotModalidad = (event) => {
        let in_person = course.info_course[2];
        let online = course.info_course[3];

        if (event.target.value === "3") {
            in_person = true;
            online = true
        } else if (event.target.value === "2") {
            in_person = false;
            online = true;
        }
        else if (event.target.value === "1") {
            in_person = true;
            online = false;
        }

        setCourse({
            ...course,
            info_course: [course.info_course[0], course.info_course[1], in_person, online],
        });
    }

    const handleInputChange = (event) => {
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        });
    }

    const handleCheckboxChange = (event) => {
        setCourse({
            ...course,
            [event.target.name]: event.target.checked,
        });
    }



    const confirmUpdateCourse = async () => {
        setShowAlert(false);

        const allFieldsFilled = Object.keys(course).every(field => {
            return true ? course[field] !== 'public' : false;
        });

        if (!allFieldsFilled) {
            setShowAlert(true);
            return;
        }

        try {
            const course_response = await updateCourse(course);

            fetchCourses();

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div class="modal fade text-white" data-bs-theme="dark"
            id={`update:${modalIdRef.current}`} data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby={`${modalIdRef.current}Label`} aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="UpdateModalLabel">Modificar clase de {course.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>

                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Titulo:</label>
                                <input type="text" class="form-control" id="recipient-name"
                                    name="title"
                                    value={course.title}
                                    onChange={handleInputChange}
                                    required></input>
                            </div>

                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Frecuencia semanal:</label>
                                <select class="form-select" aria-label="Default select example"
                                    name='frequency'
                                    value={course.frequency[0]}
                                    onChange={(e) => setCourse({ ...course, frequency: [e.target.value, 'semana', course.frequency[2]] })}
                                    required>
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
                                <label for="semanas" class="col-form-label" >Duración en semanas:</label>
                                <input type="number" class="form-control" id="durationWeeks"
                                    value={course.frequency[2]}
                                    name='frequency'
                                    onChange={(e) => setCourse({ ...course, frequency: [course.frequency[0], 'semana', e.target.value] })}
                                    required></input>
                            </div>

                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Tipo de clase:</label>
                                <select class="form-select" aria-label="Default select example"
                                    name="modalidad"
                                    onChange={handleModalidad}
                                    value={
                                        course.info_course[0] && course.info_course[1]
                                            ? '3'
                                            : course.info_course[0]
                                                ? '1'
                                                : '2'
                                    }
                                    required>
                                    <option selected disabled>-</option>
                                    <option value="1">Individual</option>
                                    <option value="2">Grupal</option>
                                    <option value="3">Individual/Grupal</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Modalidad:</label>
                                <select class="form-select" aria-label="Default select example"
                                    onChange={handleNotModalidad}
                                    name="notModalidad"
                                    value={
                                        course.info_course[2] && course.info_course[3]
                                            ? '3'
                                            : course.info_course[2]
                                                ? '1'
                                                : '2'
                                    }
                                    required>
                                    <option selected disabled>-</option>
                                    <option value="1">Presencial</option>
                                    <option value="2">Online</option>
                                    <option value="3">Presencial/Online</option>
                                </select>
                            </div>

                            <div class="mb-3" >
                                <label for="recipient-name" class="col-form-label">Costo:</label>
                                <input type="number" class="form-control" id="recipient-name" placeholder="$/hora"
                                    name="price_hour"
                                    value={course.price_hour}
                                    onChange={handleInputChange}
                                    required></input>
                            </div>

                            <div class="form-check form-switch">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Quieres que la clase sea pública?</label>
                                <input class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    name="course_public"
                                    value={course.course_public}
                                    onChange={handleCheckboxChange}
                                    checked={course.course_public}
                                />
                            </div>

                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Descripcion:</label>
                                <textarea class="form-control" id="message-text"
                                    value={course.course_description}
                                    onChange={handleInputChange}
                                    name="course_description"
                                ></textarea>
                            </div>

                            {showAlert && (
                                <div class="alert alert-danger mt-2" role="alert">
                                    Completa todos los campos!
                                </div>
                            )}
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={confirmUpdateCourse}
                        >Modificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdate;