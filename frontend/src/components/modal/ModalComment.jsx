import React from 'react'
import { Star } from '../Opinions/Star/Star';
import { useCoursesContext } from '../../Context/CoursesContext';
import { addReview } from '../../controllers/courses.controller';
import { useState } from 'react';

function ModalComment({ course_id }) {
    const { fetchCourses } = useCoursesContext();
    const [review, setReview] = useState({
        rating: 0,
        comment: "",
        user_name: "",
    });


    const handleInputChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value,
        });
    }

    const handleRatingChange = (newRating) => {
        setReview({
            ...review,
            rating: newRating,
        });
    }

    const createReview = async () => {
        if (!review.user_name && !review.rating) {
            return;
        }
        try {
            const review_response = await addReview(review, course_id);

            console.log("Review creada, tenes que esperar que la acepte el profesor:(");
            fetchCourses();

            setReview({
                rating: 0,
                comment: "",
                user_name: "",
            });
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div class="modal fade text-white" data-bs-theme="dark" id="exampleModalComment"
            tabindex="-1" aria-labelledby="exampleModalCommentLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCommentLabel">Calificar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>

                            <div class="mb-2">
                                <label for="validationServer01" class="form-label">Nombre:</label>
                                <input type="text"
                                    class="form-control"
                                    id="validationServer01"
                                    name="user_name"
                                    value={review.user_name}
                                    onChange={handleInputChange}
                                    required></input>
                            </div>

                            <div class="mb-2">
                                <label for="message-text" class="col-form-label">Comentario:</label>
                                <textarea class="form-control"
                                    id="message-text"
                                    value={review.comment}
                                    name="comment"
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div class="starwidget mb-2" name="rating">
                                <Star onChange={handleRatingChange} value={review.rating} />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary w-100"
                            onClick={createReview}
                            data-bs-dismiss="modal" aria-label="Close">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComment;