import React from "react"
import "./Card.css"
import pict from "../../assets/tutor1.jpg"
export default function Card(props) {
    return (

        <div class="card mb-2" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={pict}
                            height="90px"
                            width="90px" class="card-image img-fluid rounded-start rounded" alt="..." />
                        <div className="name-rating-price col-md-10">
                            <p class="text-body">John Johnson</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-9">
                    <div class="card-body">

                        <h5 class="card-title">Analisis Matematico I</h5>
                        <p class="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo delectus cum id nulla facere consectetur, deserunt temporibus molestiae corporis qui quaerat dicta laborum adipisci ipsum non odio unde et amet!</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>



    )
}