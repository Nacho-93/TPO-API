import React from 'react'
import { useState } from 'react'
import { createCourse } from '../../controllers/courses.controller'
import { useCoursesContext } from '../../Context/CoursesContext'

function ModalAgregar({ user_id }) {
  const { fetchCourses } = useCoursesContext();
  const [amountWeekly, setAmountWeekly] = useState(null)
  const [amountWeeks, setAmountWeeks] = useState(null)
  const [individual, setIndividual] = useState(false)
  const [group, setGroup] = useState(false)
  const [in_person, setIn_person] = useState(false)
  const [online, setOnline] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const [course, setCourse] = useState({
    title: "",
    course_description: "",
    price_hour: "",
    course_public: false,
    // frequency: [amountWeekly, 'semanal', amountWeeks],
    // info_course: [true, false, false, false],  course.info_course == [individual, group, in_person, online]
    tutor_id: user_id,
  });



  const handleInfoCourse = (event) => {
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

  const addCourse = async () => {
    setShowAlert(false);
    let frequency = [amountWeekly, 'semanal', amountWeeks]
    let info_course = [individual, group, in_person, online]
    course.frequency = frequency
    course.info_course = info_course
    const allFieldsFilled = Object.keys(course).every(field => course[field]);

    if (allFieldsFilled) {
      const course_response = await createCourse(course);
      if (course_response.status === 200) {
        fetchCourses()
        console.log("Curso creado, tenes que esperar que lo acepte un admin:(");

      } else {
        console.log(course_response.message);
      }
      setCourse({
        title: "",
        course_description: "",
        price_hour: "",
        course_public: false,
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
    <div class="modal fade text-white" data-bs-theme="dark" id="AgregarModal" tabindex="-1" aria-labelledby="AgregarModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AgregarModalLabel">Agregar Clase</h5>
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
                  onClick={handleInfoCourse}
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
                  onClick={handleInfoCourse}
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
                  value={course.price_hour}
                  onChange={handleInputChange}
                  required></input>
              </div>
              <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckDefault">Quieres que la clase sea pública?</label>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                  name="course_public"
                  value={course.course_public}
                  onChange={handleCheckboxChange}
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
            <button type="button" class="btn btn-primary" onClick={addCourse}
              data-bs-dismiss="modal"
            >Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ModalAgregar;