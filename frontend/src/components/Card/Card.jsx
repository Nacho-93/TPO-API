import React from "react"
import "./Card.css"

export default function Card(props) {

    // props.info_course == [individual, group, in_person, online]

    return (

        <div className="card">
            <div className="card-body row professor-content">
                <div className="col-md-1 g-0">
                    <div className="professor-img">
                        <span className="round-photo">
                            <img src={props.image_profile} alt="professor" className="img-fluid" />
                        </span>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="professor-course">
                        <a href="#profile" className="card-title name">{props.name} {props.lastName}</a>
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
                        <h6 className="card-title hours">
                            <i>$</i>
                            {" "}
                            {props.price_hour}/hora
                        </h6>
                        <h6 className="card-text text-muted hours">
                            <i class="fa-solid fa-hourglass-end"></i>
                            {" "}
                            {props.hours_experience} horas dictadas
                        </h6>

                        <h6 className="card-title"><i>#</i>{" "}{props.info[0] && props.info[1] ? "Individual/Grupal" : (props.info[0] ? "Individual" : "Grupal")}</h6>
                        <h6 className="card-title"><i>#</i>{" "}{props.info[2] && props.info[3] ? "Presencial/Online" : (props.info[2] ? "Presencial" : "Online")}</h6>
                        <a href="#contractForm" className="btn btn-primary">Contratar</a>
                    </div>
                </div>
            </div>
            <div className="card-body row professor-lastrow">
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