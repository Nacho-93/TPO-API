import React from 'react'
import './Opinion.css'
import ModalAceptar from '../Modal/ModalAceptar'
import ModalRechazar from '../Modal/ModalRechazar'
import { useLocation } from 'react-router-dom'


function Opinion({ review, isUser, course }) {
    const tutor_id = useLocation().pathname.split("/")[2];
    let date_comment = new Date(review.date);
    let date_str = date_comment.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    // `/perfil-profesor/${userId}/solicitudesReseñas
    return (
        // style={{ maxWidth: "400px", margin: "0 auto" }}
        <>
            <div className="" style={{ maxWidth: "700px", margin: "0 auto" }}>
                <div class="card mb-3 mt-5">
                    <div class="card-body">

                        <div className="name-rating d-flex justify-content-between align-items-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <h3 className="card-title me-3">
                                    {review.user_name}
                                </h3>
                                <span className='me-3'>-</span>
                                <span className='card-text me-3' style={{ fontSize: "14px" }}>{course.title}</span>
                                <span className='me-3'>-</span>
                                <span className='card-text' style={{ fontSize: "14px" }}>{date_str}</span>
                            </div>

                            <div className="ml-auto p-1">
                                {review.rating && (<h6 className="card-title rating ">
                                    <i class="fa-solid fa-star"></i> {" "}
                                    <span className="card-text font-weight-bold">{review.rating}</span>

                                </h6>)}
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p class="card-text"><i class="fa-solid fa-quote-left fa-quotes"></i>{" "}
                                {review.comment} {" "}
                                <i class="fa-solid fa-quote-right fa-quotes"></i></p>
                            <div className="btns">
                                {isUser && (
                                    <div className='d-flex align-items-center'>
                                        <button type="button" className="btn btn-success me-2" data-bs-toggle="modal" data-bs-target={`#aceptar:${review._id}`} data-bs-whatever="@getbootstrap">
                                            <i className="fa-solid fa-check"></i>
                                        </button>
                                        <ModalAceptar text="este comentario"
                                            review_id={review._id}
                                            course_id={course._id}
                                            tutor_id={tutor_id}
                                        />

                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#rechazar:${review._id}`} data-bs-whatever="@getbootstrap">
                                            <i className="fa-solid fa-x"></i>
                                        </button>
                                        <ModalRechazar
                                            review_id={review._id}
                                            course_id={course._id}
                                            tutor_id={tutor_id} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
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