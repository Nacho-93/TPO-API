import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"
import ModalContact from "../Modal/ModalContact"
import ModalComment from "../Modal/ModalComment"
import { useTutorContext } from "../../Context/TutorContext"

export default function Card({ course, ...props }) {
    const { tutors } = useTutorContext()
    const tutor = tutors[course.tutor_id]
    const last_review = course.reviews.length > 0 ? course.reviews[course.reviews.length - 1].comment : false
    const rating_amount = course.reviews.length > 0 ? [(course.reviews.reduce((sum, review) => sum + review.rating, 0) / course.reviews.length).toFixed(1), course.reviews.length] : false
    // Como funciona el array info_course:
    // course.info_course == [individual, group, in_person, online]
    const [isIndividual, isGroup, isInPerson, isOnline] = course.info_course

    return (


        <div className="card card-class" >

            {/* PROFESSOR IMAGE */}

            <div className="card-body row professor-content">
                <div className="col-md-1 g-0 d-none d-lg-block d-md-block">
                    <div className="professor-img">
                        <span className="round-photo">
                            <img src={tutor.image_profile} alt="professor" className="img-fluid" />
                        </span>
                    </div>
                </div>



                {/* MOBILE PROFESSOR IMAGE NAME AND RATING */}

                <div className="row d-lg-none d-md-none d-sm-flex mb-2 p-1 pt-0">
                    <div className="mobile-line">
                        <div className="col-2 professor-img">
                            <span className="round-photo">
                                <img src={tutor.image_profile} alt="professor" className="img-fluid" />
                            </span>
                        </div>

                        <h4 className="card-title clase col-5 font-weight-600">
                            Clase:<br /> {course.title}
                        </h4>

                        <div className="col-5">
                            <div className="name-rating">
                                <section className="name d-flex justify-content-end">

                                    <Link to={`/perfil-profesor/${tutor.id}`} className="card-title name">
                                        {tutor.name}{" "}{tutor.lastName}
                                    </Link>
                                </section>
                                <section className="rating d-flex justify-content-end">
                                    {rating_amount && (
                                        <h7 className="card-title rating">
                                            <i class="fa-solid fa-star"></i>{" "}
                                            <span className="card-text font-weight-bold">
                                                {rating_amount[0]}
                                            </span>{" "}
                                            <span className="card-text text-muted amount-reviews">
                                                ({rating_amount[1]})
                                            </span>
                                        </h7>
                                    )}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>



                {/* COURSE */}

                <div className="col-md-7">

                    <div className="professor-course">
                        <section className="name-rating d-none d-md-flex justify-content-between align-items-center">

                            <Link to={`/perfil-profesor/${tutor.id}`} className="card-title name">
                                {tutor.name}{" "}{tutor.lastName}
                            </Link>


                            {rating_amount && (<h6 className="card-title rating">
                                <i class="fa-solid fa-star"></i> {" "}
                                <span className="card-text font-weight-bold">{rating_amount[0]}</span> {" "}
                                <span className="card-text text-muted amount-reviews">({rating_amount[1]})</span>
                            </h6>)}

                        </section>
                        <h3 className="card-title clase d-none d-md-block">Clase:{" "}{course.title}</h3>
                        <p className="card-text text-muted professor-description">
                            {course.course_description}
                            {/* <a href="#profile" className="text-muted professor-profile">...ver perfil</a> */}
                        </p>

                    </div>
                </div>

                <div className="col-md-1 line"></div>



                {/*
                    
                    STATS 
                    AND
                    INFO 
                    
                        */}


                <div className="col-md-3">

                    <div className="professor-stats d-none d-lg-block d-md-block">
                        <h6 className="card-title hours text-stats">
                            <i>$</i>
                            {" "}
                            {course.price_hour}/hora
                        </h6>

                        <h6 className="card-text text-muted frequency text-stats">
                            <i class="fa-regular fa-calendar-days"></i>
                            {" "}
                            {course.frequency[0] > 1
                                ? course.frequency[0] + " clases " + course.frequency[1] + "les"
                                : "Clase única semana"}
                        </h6>

                        <h6 className="card-title frequency text-stats">
                            <i class="fa-solid fa-graduation-cap"></i>
                            {" "}
                            {course.frequency[2]}{" "}{course.frequency[2] === 1
                                ? "semana"
                                : "semanas"}
                        </h6>

                        <h6 className="card-text text-muted frequency text-stats">
                            <i class="fa-solid fa-clock"></i>
                            {" "}
                            {tutor.hours_experience}{" "}horas dictadas
                        </h6>

                        <h6 className="card-title text-stats"><i>#</i>{" "}
                            {isIndividual && isGroup
                                ? "Individual/Grupal"
                                : (isIndividual ? "Individual" : "Grupal")}</h6>

                        <h6 className="card-title text-stats"><i>#</i>
                            {" "}{isInPerson && isOnline
                                ? "Presencial/Online"
                                : (isInPerson ? "Presencial" : "Online")}</h6>

                        <div className="d none d-md-block">
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalContact"
                                data-bs-whatever="@getbootstrap"
                                disabled={props.isTutor}>
                                Contactar

                            </button>


                        </div>
                    </div>



                    {/* MOBILE STATS */}
                    <div className="row professor-stats d-lg-none d-md-none d-sm-flex mt-3 mb-2">
                        <div className="col-6 d-flex justify-content-start align-items-start">
                            <div className="priceHour-frequency">
                                <h6 className="card-title hours text-stats">
                                    <i>$</i>
                                    {" "}
                                    {course.price_hour}/hora
                                </h6>
                                <h6 className="card-text text-muted frequency text-stats">
                                    <i class="fa-regular fa-calendar-days"></i>
                                    {" "}
                                    {course.frequency[0]}{" "}clases por{" "}{course.frequency[1]}
                                </h6>
                                <h6 className="card-title frequency text-stats">
                                    <i class="fa-solid fa-graduation-cap"></i>
                                    {" "}
                                    {course.frequency[2]}{" "}semana/s
                                </h6>
                            </div>
                        </div>



                        <div className="col-6 d-flex justify-content-end align-items-end">
                            <section className="modality-format">

                                <h6 className="card-title text-stats"><i>#</i>{" "}
                                    {isIndividual && isGroup
                                        ? "Individual/Grupal"
                                        : (isIndividual
                                            ? "Individual"
                                            : "Grupal")}
                                </h6>

                                <h6 className="card-text text-muted frequency text-stats">
                                    <i class="fa-solid fa-clock"></i>
                                    {" "}
                                    {tutor.hours_experience}{" "}horas dictadas
                                </h6>

                                <h6 className="card-title text-stats"><i>#</i>{" "}
                                    {isInPerson && isOnline
                                        ? "Presencial/Online"
                                        : (isInPerson
                                            ? "Presencial"
                                            : "Online")}
                                </h6>
                            </section>
                        </div>
                    </div>




                    {/* MOBILE BUTTONS */}
                    <div className="row">
                        <div className="col-6 d-lg-none d-md-none  d-sm-block">
                            <button href="#contractForm" className="btn btn-primary w-100"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalContact"
                                data-bs-whatever="@getbootstrap"
                                disabled={props.isTutor}>Contactar
                            </button>

                        </div>
                        <div className="col-6 d-lg-none d-md-none d-sm-block">
                            <Link to={`/categorias/clase-${course.title}-${course.id}-${tutor.id}-opiniones`}
                                className="btn btn-outline-secondary w-100">Opiniones</Link>
                        </div>

                    </div>
                </div>
            </div>



            {/* REVIEWS */}

            <div className="card-body row professor-reviews d-md-flex">

                <div className="col-md-10 comment">
                    {last_review && !props.isTutor
                        ? <p className="card-text"><i class="fa-solid fa-quote-left"></i>{" "}
                            {last_review}</p>
                        : <p className="card-text text-muted">{" "}
                            No existen reseñas para este curso... ¡Sé el primero en dejar una!
                        </p>}
                </div>

                <div className="col-md-2 reviews">
                    {last_review || props.isTutor

                        ? <Link to={`/categorias/clase-${course.title}-${course.id}-${tutor.id}-opiniones`}
                            className="btn btn-outline-secondary">
                            Opiniones
                        </Link>

                        : <button type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalComment"
                            data-bs-whatever="@getbootstrap">
                            Agregar
                        </button>
                    }

                </div>
            </div>

            <ModalContact />
            <ModalComment />
        </div >
    )
}