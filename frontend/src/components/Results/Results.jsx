import React, { useState, useEffect } from 'react';
import { useTutorContext } from '../../Context/TutorContext';
import ModalFilter from '../Modal/ModalFilter';
import Card from '../Card/Card';
import './Results.css';

function Results() {
    const { tutors } = useTutorContext();
    const [regexCategory, setRegexCategory] = useState(new RegExp(`allCategories.*`, 'i')); // /.*i/ = /.*?/i
    const [filteredProfessors, setFilteredProfessors] = useState(tutors);
    const [filter, setFilter] = useState({
        category: 'allCategories',
        frequency_class: "",
        type_of_class: '',
        rating: 0,
    });

    const filteredCourses = filteredProfessors.map((professor) => {
        // Usar filter para filtrar los cursos del profesor
        const filteredProfessorCourses = professor.courses.filter((course) => {
            if (!course.course_public) {
                return false; // Cambiar a false para filtrar el curso
            }
            const ratingAmount = course.reviews.length > 0 ? [(course.reviews.reduce((sum, review) => sum + review.rating, 0) / course.reviews.length).toFixed(1), course.reviews.length] : false

            const categoryMatch =
                filter.category === "allCategories" ? true : (
                    regexCategory.test(course.title));

            const frequencyMatch =
                !filter.frequency_class ? true : (
                    course.frequency[1] === filter.frequency_class);

            const typeMatch =
                !filter.type_of_class ? true : (
                    (filter.type_of_class === "individual" && course.info_course[0])
                    || (filter.type_of_class === "group" && course.info_course[1]));

            const ratingMatch =
                filter.rating === 0 ? true : (
                    parseInt(ratingAmount) === filter.rating);

            return categoryMatch && frequencyMatch && typeMatch && ratingMatch;
        });
        console.log(filter.rating)
        // Usar map para crear un arreglo de componentes Card a partir de los cursos filtrados
        return filteredProfessorCourses.map((course) => (
            <Card
                key={course.id}
                course={course}
            />
        ));
    });


    const handleFilter = (filter) => {
        setFilter(filter);
        setRegexCategory(new RegExp(`${filter.category}.*`, 'i'));
    };



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
                {filteredCourses}
            </div>
            <ModalFilter handleFilter={handleFilter} />
        </div>
    );
}

export default Results;




