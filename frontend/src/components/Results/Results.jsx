import React, { useState, useEffect } from 'react';
import { useTutorContext } from '../../Context/TutorContext';
import ModalFilter from '../modal/ModalFilter';
import Card from '../Card/Card';
import './Results.css';

function Results() {
    const { tutors } = useTutorContext();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('allCategories');
    const [filteredProfessors, setFilteredProfessors] = useState([]);

    const handleFilter = (categoriaSeleccionada) => {
        setCategoriaSeleccionada(categoriaSeleccionada);
    };

    useEffect(() => {
        const filteredList = () => {
            return tutors.filter((professor) =>
                professor.courses.some((course) =>
                    categoriaSeleccionada === "allCategories" ? true : (
                        course.course_public && course.title === categoriaSeleccionada
                    )
                )
            );
        };

        const filteredProfessors = filteredList();
        setFilteredProfessors(filteredProfessors);
    }, [categoriaSeleccionada, tutors]);

    return (
        <div className='bg-change-color pb-5'>
            <section id="call-to-action" className="action-diferent section-home">


                <div className="container" data-aos="zoom-out">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h3>Clases disponibles</h3>
                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#filterModal" data-bs-whatever="@getbootstrap">
                                Filtros <i className="fa-solid fa-filter"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ backdropFilter: "blur(5px)" }}>
                {filteredProfessors.map((professor) => {
                    const filteredCourses = professor.courses.filter((course) =>
                        categoriaSeleccionada === "allCategories" ? true : (
                            course.course_public && course.title === categoriaSeleccionada
                        )
                    );

                    return filteredCourses.map((course) => (
                        <Card
                            name={professor.name}
                            lastName={professor.lastName}
                            image_profile={professor.image_profile}
                            frequency={course.frequency}
                            id={professor.id}
                            title={course.title}
                            price_hour={course.price_hour}
                            course_description={course.course_description}
                            last_review={course.reviews.length > 0 ? course.reviews[course.reviews.length - 1].comment : false}
                            info={course.info_course}
                            rating_amount={course.reviews.length > 0 ? [(course.reviews.reduce((sum, review) => sum + review.rating, 0) / course.reviews.length).toFixed(1), course.reviews.length] : false}
                            course_id={course.id}
                            hours_experience={professor.hours_experience}
                            key={course.id}
                        />
                    ));
                })}
            </div>
            <ModalFilter handleFilter={handleFilter} />
        </div>
    );
}

export default Results;




