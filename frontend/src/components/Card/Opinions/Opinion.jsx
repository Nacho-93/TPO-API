import React from 'react'
import './Opinion.css'
import ModalAceptar from '../../modal/ModalAceptar'
import ModalRechazar from '../../modal/ModalRechazar'



function Opinion({ review, isUser }) {


    // `/perfil-profesor/${userId}/solicitudesReseñas
    return (
        // style={{ maxWidth: "400px", margin: "0 auto" }}
        <>
            <div className="" style={{ maxWidth: "700px", margin: "0 auto" }}>
                <div class="card mb-3 mt-5 bg-dark text-white">
                    <div class="card-body">

                        <div className="name-rating d-flex justify-content-between align-items-center">
                            <h3 class="card-title p-1">{review.user_name}</h3>
                            <div className="ml-auto p-1">
                                {review.rating && (<h6 className="card-title rating ">
                                    <i class="fa-solid fa-star"></i> {" "}
                                    <span className="card-text font-weight-bold">{review.rating}</span>

                                </h6>)}
                            </div>
                        </div>

                        <p class="card-text"><i class="fa-solid fa-quote-left fa-quotes"></i>{" "}
                            {review.comment} {" "}
                            <i class="fa-solid fa-quote-right fa-quotes"></i></p>

                    </div>

                </div>
                {isUser && (
                    <div className='d-flex justify-content-end align-items-end mb-5'>
                        <button type="button" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#AceptarModal" data-bs-whatever="@getbootstrap">
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <ModalAceptar text="este comentario" />

                        <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#RechazarModal" data-bs-whatever="@getbootstrap">
                            <i className="fa-solid fa-x"></i>
                        </button>
                        <ModalRechazar text="de comentario" />
                    </div>
                )}
            </div>

        </>
    )
}

//        "reviews": [{
//     "comment": "Me distraje por la belleza del carlitos",
//     "user_name": "Javier",
//     "date": "2023-06-15",
//     "rating": 5
//   }]
export default Opinion