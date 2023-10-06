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
                        tutor={professor}
                        course={course}
                        last_review={last_review}
                        rating_amount={rating_amount}
                        key={course.id}
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