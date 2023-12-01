import React from 'react'
import { useState } from 'react'
import { updateCourse } from '../../controllers/courses.controller'


function ModalUpdate({ course, user_id }) {
    const [amountWeekly, setAmountWeekly] = useState(course.frequency[0])
    const [amountWeeks, setAmountWeeks] = useState(course.frequency[2])
    const [individual, setIndividual] = useState(course.info_course[0])
    const [group, setGroup] = useState(course.info_course[1])
    const [in_person, setIn_person] = useState(course.info_course[2])
    const [online, setOnline] = useState(course.info_course[3])
    const [showAlert, setShowAlert] = useState(false);

    const [courseData, setcourseData] = useState({
        title: course.title,
        courseData_description: course.course_description,
        price_hour: course.price_hour,
        courseData_public: course.course_public,
        // frequency: [amountWeekly, 'semanal', amountWeeks],
        // info_courseData: [true, false, false, false],  courseData.info_courseData == [individual, group, in_person, online]
        tutor_id: user_id,
    });

    const modalIdRef = React.useRef(course._id);

    const handleInfocourseData = (event) => {
        if (event.target.name === "modalidad") {
            if (event.target.value === "1") {
                setIndividual(true)
                setGroup(false)
            } else if (event.target.value === "2") {
                setIndividual(false)
                setGroup(true)
            } else if (event.target.value === "3") {
                setIndividual(true)
                setGroup(true)
            }
        } else {
            if (event.target.value === "1") {
                setIn_person(true)
                setOnline(false)
            } else if (event.target.value === "2") {
                setIn_person(false)
                setOnline(true)
            } else if (event.target.value === "3") {
                setIn_person(true)
                setOnline(true)
            }
        }
    }


    const handleInputChange = (event) => {
        setcourseData({
            ...courseData,
            [event.target.name]: event.target.value,
        });
    }

    const handleCheckboxChange = (event) => {
        setcourseData({
            ...courseData,
            [event.target.name]: event.target.checked,
        });
    }

    //   const addcourseData = async () => {
    //     setShowAlert(false);
    //     let frequency = [amountWeekly, 'semanal', amountWeeks]
    //     let info_courseData = [individual, group, in_person, online]
    //     courseData.frequency = frequency
    //     courseData.info_courseData = info_courseData
    //     const allFieldsFilled = Object.keys(courseData).every(field => courseData[field]);

    //     if (allFieldsFilled) {
    //       const courseData_response = await createcourseData(courseData);
    //       if (courseData_response.status === 200) {
    //         fetchcourseDatas()
    //         console.log("Curso creado, tenes que esperar que lo acepte un admin:(");

    //       } else {
    //         console.log(courseData_response.message);
    //       }
    //       setcourseData({
    //         title: "",
    //         courseData_description: "",
    //         price_hour: "",
    //         courseData_public: false,
    //         tutor_id: user_id,
    //       });
    //       setAmountWeekly(null)
    //       setAmountWeeks(null)
    //       setIndividual(false)
    //       setGroup(false)
    //       setIn_person(false)
    //       setOnline(false)
    //     } else {
    //       setShowAlert(true);
    //     }
    //   }

    const confirmUpdateCourse = async () => {
        setShowAlert(false);
        let frequency = [amountWeekly, 'semanal', amountWeeks]
        let info_courseData = [individual, group, in_person, online]
        courseData.frequency = frequency
        courseData.info_courseData = info_courseData
        const allFieldsFilled = Object.keys(courseData).every(field => courseData[field]);

        if (allFieldsFilled) {
            const courseData_response = await updateCourse(courseData, course._id);
            if (courseData_response.status === 200) {
                // fetchCourses()
                console.log("Curso creado, tenes que esperar que lo acepte un admin:(");

            } else {
                console.log(courseData_response.message);
            }
            setcourseData({
                title: "",
                courseData_description: "",
                price_hour: "",
                courseData_public: false,
                tutor_id: user_id,
            });
            setAmountWeekly(null)
            setAmountWeeks(null)
            setIndividual(false)
            setGroup(false)
            setIn_person(false)
            setOnline(false)
        } else {
            setShowAlert(true);
        }
    }

    return (
        <div class="modal fade text-white" data-bs-theme="dark"
            id={modalIdRef.current} data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby={`${modalIdRef.current}Label`} aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="UpdateModalLabel">Modificar clase de {courseData.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Titulo:</label>
                                <input type="text" class="form-control" id="recipient-name"
                                    name="title"
                                    value={courseData.title}
                                    onChange={handleInputChange}
                                    required></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Frecuencia semanal:</label>
                                <select class="form-select" aria-label="Default select example"
                                    value={amountWeekly}
                                    onChange={(e) => setAmountWeekly(e.target.value)}
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
                                <input type="text" class="form-control" id="semanas"
                                    onClick={(e) => setAmountWeeks(e.target.value)}
                                    required></input>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label" >Tipo de clase:</label>
                                <select class="form-select" aria-label="Default select example"
                                    name="modalidad"
                                    onClick={handleInfocourseData}
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
                                    onClick={handleInfocourseData}
                                    name="notModalidad"
                                    required>
                                    <option selected disabled>-</option>
                                    <option value="1">Presencial</option>
                                    <option value="2">Online</option>
                                    <option value="3">Presencial/Online</option>
                                </select>
                            </div>
                            <div class="mb-3" >
                                <label for="recipient-name" class="col-form-label">Costo:</label>
                                <input type="money" class="form-control" id="recipient-name" placeholder="$/hora"
                                    name="price_hour"
                                    value={courseData.price_hour}
                                    onChange={handleInputChange}
                                    required></input>
                            </div>
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Quieres que la clase sea pública?</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                    name="courseData_public"
                                    value={courseData.courseData_public}
                                    onChange={handleCheckboxChange}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Descripcion:</label>
                                <textarea class="form-control" id="message-text"
                                    value={courseData.courseData_description}
                                    onChange={handleInputChange}
                                    name="courseData_description"
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