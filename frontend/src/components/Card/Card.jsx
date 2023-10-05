import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"



export default function Card(props) {

    // Como funciona el array info_course:
    // props.info_course == [individual, group, in_person, online]

    return (


        <div className="card">

            {/* PROFESSOR IMAGE */}

            <div className="card-body row professor-content">
                <div className="col-md-1 g-0 d-none d-lg-block d-md-block">
                    <div className="professor-img">
                        <span className="round-photo">
                            <img src={props.image_profile} alt="professor" className="img-fluid" />
                        </span>
                    </div>
                </div>



                {/* MOBILE PROFESSOR IMAGE NAME AND RATING */}

                <div className="row d-lg-none d-md-none d-sm-flex mb-2 p-1 pt-0">
                    <div className="mobile-line">
                        <div className="col-2 professor-img">
                            <span className="round-photo">
                                <img src={props.image_profile} alt="professor" className="img-fluid" />
                            </span>
                        </div>

                        <h4 className="card-title clase col-5 font-weight-600">
                            Clase:<br /> {props.title}
                        </h4>

                        <div className="col-5">
                            <div className="name-rating">
                                <section className="name d-flex justify-content-end">

                                    <Link to="Perfil-profesor-NombreApellido" className="card-title name">
                                        {props.name}{" "}{props.lastName}
                                    </Link>
                                </section>
                                <section className="rating d-flex justify-content-end">
                                    {props.rating_amount && (
                                        <h7 className="card-title rating">
                                            <i class="fa-solid fa-star"></i>{" "}
                                            <span className="card-text font-weight-bold">
                                                {props.rating_amount[0]}
                                            </span>{" "}
                                            <span className="card-text text-muted amount-reviews">
                                                ({props.rating_amount[1]})
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

                            <Link to="/Perfil-profesor-NombreApellido" className="card-title name">
                                {props.name}{" "}{props.lastName}
                            </Link>


                            {props.rating_amount && (<h6 className="card-title rating">
                                <i class="fa-solid fa-star"></i> {" "}
                                <span className="card-text font-weight-bold">{props.rating_amount[0]}</span> {" "}
                                <span className="card-text text-muted amount-reviews">({props.rating_amount[1]})</span>
                            </h6>)}

                        </section>
                        <h3 className="card-title clase d-none d-md-block">Clase:{" "}{props.title}</h3>
                        <p className="card-text text-muted professor-description">
                            {props.course_description}
                            {/* <a href="#profile" className="text-muted professor-profile">...ver perfil</a> */}
                        </p>

                    </div>
                </div>

                <div className="col-md-1 line"></div>


                {/* STATS and INFO */}

                <div className="col-md-3">
                    <div className="professor-stats d-none d-lg-block d-md-block">
                        <h6 className="card-title hours text-stats">
                            <i>$</i>
                            {" "}
                            {props.price_hour}/hora
                        </h6>
                        <h6 className="card-text text-muted frequency text-stats">
                            <i class="fa-regular fa-calendar-days"></i>
                            {" "}
                            {props.frequency[0]}/{props.frequency[1]}
                        </h6>

                        <h6 className="card-title text-stats"><i>#</i>{" "}{props.info[0] && props.info[1] ? "Individual/Grupal" : (props.info[0] ? "Individual" : "Grupal")}</h6>
                        <h6 className="card-title text-stats"><i>#</i>{" "}{props.info[2] && props.info[3] ? "Presencial/Online" : (props.info[2] ? "Presencial" : "Online")}</h6>

                        <div className="d none d-md-block">
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                data-bs-whatever="@getbootstrap">
                                Contratar</button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Contratar</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                            <div class="modal-body">
                                                <form>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Nombre:</label>
                                                    <input type="text" class="form-control" id="recipient-name"></input>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Telefono:</label>
                                                    <input type="tel" class="form-control" id="recipient-name"></input>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">email:</label>
                                                    <input type="email" class="form-control" id="recipient-name"></input>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Rango de preferencia para comunicarse:</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                    <option selected>Rango horario</option>
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
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                <button type="button" class="btn btn-primary">Enviar</button>
                                            </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>



                    {/* MOBILE STATS */}
                    <div className="row professor-stats d-lg-none d-md-none d-sm-flex mt-3 mb-2">
                        <div className="col-6 d-flex justify-content-start align-items-start">
                            <div className="priceHour-frequency">
                                <h6 className="card-title hours text-stats">
                                    <i>$</i>
                                    {" "}
                                    {props.price_hour}/hora
                                </h6>
                                <h6 className="card-title frequency text-stats">
                                    <i class="fa-regular fa-calendar-days"></i>
                                    {" "}
                                    {props.frequency[0]}/{props.frequency[1]}
                                </h6>
                            </div>
                        </div>

                        <div className="col-6 d-flex justify-content-end align-items-end">
                            <section className="modality-format">
                                <h6 className="card-title text-stats"><i>#</i>{" "}{props.info[0] && props.info[1] ? "Individual/Grupal" : (props.info[0] ? "Individual" : "Grupal")}</h6>
                                <h6 className="card-title text-stats"><i>#</i>{" "}{props.info[2] && props.info[3] ? "Presencial/Online" : (props.info[2] ? "Presencial" : "Online")}</h6>
                            </section>
                        </div>
                    </div>


                    {/* MOBILE BUTTONS */}
                    <div className="row">
                        <div className="col-6 d-lg-none d-md-none  d-sm-block">
                            <button href="#contractForm" className="btn btn-primary w-100"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                data-bs-whatever="@getbootstrap">Contratar</button>
                                

                        </div>
                        <div className="col-6 d-lg-none d-md-none d-sm-block">
                            <Link to="/claseMatematicaApellido-opiniones" className="btn btn-outline-secondary w-100">Opiniones</Link>
                        </div>

                    </div>
                </div>
            </div>


            {/* REVIEWS */}

            <div className="card-body row professor-reviews d-md-flex">
                <div className="col-md-10 comment">
                    {props.last_review ? <p className="card-text"><i class="fa-solid fa-quote-left"></i>{" "}
                        {props.last_review}</p>
                        : <p className="card-text text-muted">{" "}No existen reseñas para este curso... ¡Sé el primero en dejar una!</p>}
                </div>
                <div className="col-md-2 reviews">
                    {props.last_review ? <Link to="/claseMatematicaApellido-opiniones" className="btn btn-outline-secondary">Opiniones</Link>
                        :<button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalContact" data-bs-whatever="@getbootstrap">Agregar</button>}
                                <div class="modal fade" id="exampleModalContact" tabindex="-1" aria-labelledby="exampleModalContactLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalContactLabel">Calificar</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                        <div class="starwidget">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        </div>
                                        <div class="mb-3">
                                        <label for="validationServer01" class="form-label">Nombre</label>
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
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-primary">Enviar</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                </div>
            </div>
        </div >
    )
}