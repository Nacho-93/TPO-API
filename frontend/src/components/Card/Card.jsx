import React from "react"
import "./Card.css"
import pict from "../../assets/tutor1.jpg"
export default function Card(props) {
    return (

        <div className="card">
            <div className="card-body row profesor-content">
                <div className="col-md-1 g-0">
                    <div className="profesor-img">
                        <span className="round-photo">
                            <img src={pict} alt="profesor" className="img-fluid" />
                        </span>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="profesor-course">
                        <a href="#profile" className="card-title name">John Johnson</a>
                        <h3 className="card-title clase">Clase de Algrebra</h3>
                        <p className="card-text text-muted profesor-description">Hello! I'm a dedicated and experienced programming tutor here to help you master the art of coding. I possess a deep understanding of various programming languages and paradigms. My goal is to empower students like you with the knowledge and skills necessary to excel in the world of programming.<a href="#profile" className="text-muted profesor-profile">...ver perfil</a>
                        </p>

                    </div>
                </div>

                <div className="col-md-1 line"></div>

                <div className="col-md-3">
                    <div className="profesor-stats">
                        <h6 className="card-title"><i>$</i> 50/hora</h6>
                        <h6 className="card-text text-muted"><i class="fa-solid fa-hourglass-end"></i> 54 horas</h6>
                        <h6 className="card-title">Presencial/Online</h6>
                        <h6 className="card-title">Individual/Grupal</h6>
                        <button className="btn btn-primary">Contratar</button>
                    </div>
                </div>
            </div>
            <div className="card-body row profesor-lastrow">
                <div className="col-md-10 comment">
                    <p className="card-text"><i class="fa-solid fa-quote-left"></i>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, aliquid architecto est numquam omnis cumque sunt maiores velit atque quae rem, rerum repellat accusantium. Architecto, unde saepe eligendi sit quaerat quisquam! Dolor.</p>
                </div>
                <div className="col-md-2 reviews">
                    <button className="btn btn-outline-secondary">Opiniones</button>
                </div>
            </div>
        </div>
    )
}