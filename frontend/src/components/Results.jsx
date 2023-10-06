import React from 'react'
import Card from './Card/Card'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTutorContext } from '../Context/TutorContext';

function Results() {
    const { tutors } = useTutorContext();


    const professors_list = tutors.map((professor) => {
        return (
            professor.courses.map((course) => {
                let last_review = null;
                let rating_amount = false;
                if (course.reviews.length > 0) {
                    last_review = course.reviews[course.reviews.length - 1].comment;
                    rating_amount = [(course.reviews.reduce((sum, review) => sum + review.rating, 0) / course.reviews.length).toFixed(1), course.reviews.length]
                }
                return (
                    <Card
                        name={professor.name}
                        lastName={professor.lastName}
                        // description={professor.description}   CAMBIAMOS POR course_description
                        image_profile={professor.image_profile}
                        frequency={course.frequency}                 // [cantidad, unidad] ej: [1, "semana"]
                        id={professor.id}
                        title={course.title}                            // "fisica"
                        price_hour={course.price_hour}
                        course_description={course.course_description}
                        last_review={last_review ? last_review : false}
                        info={course.info_course}                       // [individual, group, in_person, online] BOOLEAN
                        rating_amount={rating_amount}
                        course_id={course.id}
                    />
                )
            }
            ))
    });

    return (
        <div className='container'>
            <div>
                {professors_list}
            </div>
        </div>
    )

}


export default Results;