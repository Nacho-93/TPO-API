import React from 'react'
import './Opinion.css'
import ModalComment from '../../modal/ModalComment'
function Opinion({ review }) {
    return (

        <div class="card mb-3 mt-5">
            <div class="card-body">

                <div className="name-rating d-flex align-items-center">
                    <h3 class="card-title p-1">De{" "}{review.user_name}</h3>
                    <div className="ml-auto p-1">
                        {review.rating && (<h6 className="card-title rating ">
                            <i class="fa-solid fa-star"></i> {" "}
                            <span className="card-text font-weight-bold">{review.rating}</span>
                            <ModalComment />
                        </h6>)}
                    </div>
                </div>

                <p class="card-text"><i class="fa-solid fa-quote-left fa-quotes"></i>{" "}
                    {review.comment} {" "}
                    <i class="fa-solid fa-quote-right fa-quotes"></i></p>

            </div>
        </div>
    )
}

//        "reviews": [{
//     "comment": "Me distraje por la belleza del carlitos",
//     "user_name": "Javier",
//     "date": "2023-06-15",
//     "rating": 5
//   }]
export default Opinion