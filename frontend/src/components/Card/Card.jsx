import React from "react"
import "./Card.css"

export default function Card(props) {

    // Como funciona el array info_course:
    // props.info_course == [individual, group, in_person, online]

    return (

        <div className="card">
            <div className="card-body row professor-content">
                <div className="col-md-1 g-0 row-sm">
                    <div className="professor-img">
                        <span className="round-photo">
                            <img src={props.image_profile} alt="professor" className="img-fluid" />
                        </span>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="professor-course">
                        <section className="name-rating d-flex justify-content-between align-items-center">

                            <a href="#profile" className="card-title name">{props.name}
                                {" "}{props.lastName}</a>


                            <h6 className="card-title rating">
                                <i class="fa-solid fa-star"></i>
                                {" "}
                                <span className="card-text font-weight-bold">5.0</span> {" "}
                                <span className="card-text text-muted amount-reviews">(6)</span>
                            </h6>

                        </section>
                        <h3 className="card-title clase">Clase de {props.title}</h3>
                        <p className="card-text text-muted professor-description">
                            {props.description}
                            <a href="#profile" className="text-muted professor-profile">...ver perfil</a>
                        </p>

                    </div>
                </div>

                <div className="col-md-1 line"></div>

                <div className="col-md-3">
                    <div className="professor-stats">
                        <h6 className="card-title hours text-stats">
                            <i>$</i>
                            {" "}
                            {props.price_hour}/hora
                        </h6>
                        <h6 className="card-text text-muted hours text-stats">
                            <i class="fa-solid fa-hourglass-end text-stats"></i>
                            {" "}
                            {props.hours_experience} horas dictadas
                        </h6>

                        <h6 className="card-title text-stats"><i>#</i>{" "}{props.info[0] && props.info[1] ? "Individual/Grupal" : (props.info[0] ? "Individual" : "Grupal")}</h6>
                        <h6 className="card-title text-stats"><i>#</i>{" "}{props.info[2] && props.info[3] ? "Presencial/Online" : (props.info[2] ? "Presencial" : "Online")}</h6>
                        <div className="row">
                            <div className="col-lg-12 col-6">
                                <a href="#contractForm" className="btn btn-primary">Contratar</a>
                            </div>
                            <div className="col-6 d-lg-none d-sm-block">
                                <a href="#opinions" className="btn btn-outline-secondary">Opiniones</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body row professor-reviews">
                <div className="col-md-10 comment">
                    {props.last_review ? <p className="card-text"><i class="fa-solid fa-quote-left"></i>{" "}
                        {props.last_review}</p>
                        : <p className="card-text text-muted">{" "}No existen reseñas para este curso... ¡Sé el primero en dejar una!</p>}
                </div>
                <div className="col-md-2 reviews">
                    {<a href={props.last_review ? "#opinions" : "#newReview"} className="btn btn-outline-secondary">{props.last_review ? "Opiniones" : "Agregar"}</a>}
                </div>
            </div>
        </div>
    )
}