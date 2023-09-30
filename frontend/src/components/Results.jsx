import React from 'react'
import Card from './Card/Card'
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../DATA/data.json'
function Results() {
    const [proffesors, setProffessors] = useState([]);


    // useEffect(() => {
    //     fetch("./data.json")
    //         .then((response) => response.json())
    //         .then((data) => setProffessors(data))

    // }, [])

    const professors_list = data.map((professor) => {
        return (
            professor.courses.map((course) => {
                let last_review = null;
                if (course.reviews.length > 0) {
                    last_review = course.reviews[course.reviews.length - 1].comment;
                }
                return (
                    <Card
                        name={professor.name}
                        lastName={professor.lastName}
                        description={professor.description}
                        image_profile={professor.image_profile}
                        hours_experience={professor.hours_experience}
                        id={professor.id}
                        title={course.title}
                        price_hour={course.price_hour}
                        last_review={last_review ? last_review : false}
                        info={course.info_course}
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