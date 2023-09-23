import React from 'react'
import Card from './Card/Card'
import { profesors } from '../Profesors'
function Results() {

    const data = profesors.map((p) => {
        return (
            <Card
                name={p.name}
                lastName={p.lastName}
                description={p.description}
                image_profile={p.image_profile}
                hours_experience={p.hours_experience}
                id={p.id}

            />
        )
    });


    return (
        <div className='container'>
            <div>
                {data}
            </div>
        </div>
    )

}

export default Results