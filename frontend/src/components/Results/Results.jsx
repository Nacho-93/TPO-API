import React, { useState } from 'react';

import ModalFilter from '../Modal/ModalFilter';
import Card from '../Card/Card';
import './Results.css';
import { useCoursesContext } from '../../Context/CoursesContext';
import { useTutorContext } from '../../Context/TutorContext';
import Loading from '../Loading';

function Results() {


    const [regexCategory, setRegexCategory] = useState(new RegExp(`allCategories.*`, 'i')); // /.*i/ = /.*?/i
    const { tutorsContext } = useTutorContext();
    const { allCoursesContext } = useCoursesContext();
    const [filter, setFilter] = useState({
        category: 'allCategories',
        frequency_class: "",
        type_of_class: '',
        rating: 0,
    });



    const coursesArray = Object.values(allCoursesContext); // Convertir el objeto de cursos en un arreglo

    let filteredCourses = []

    if (coursesArray.length > 0 && coursesArray[0].title) {
        coursesArray.sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();

            return titleA.localeCompare(titleB, 'es', { sensitivity: 'base' });
        });
    }

    if (allCoursesContext && coursesArray) {

        filteredCourses = coursesArray.filter((course) => {
            if (!course.course_public) {
                return false; // Cambiar a false para filtrar el curso
            }
            const ratingAmount = course.reviews.length > 0 ? [(course.reviews.reduce((sum, review) => sum + review.rating, 0) / course.reviews.length).toFixed(1), course.reviews.length] : false

            const categoryMatch =
                filter.category === "allCategories" ? true : (
                    regexCategory.test(course.title));

            const frequencyMatch =
                !filter.frequency_class ? true
                    : (course.frequency[0] === 1 && course.frequency[2] === 1)
                    || (course.frequency[2] >= 1 && filter.frequency_class === 'Semanal')


            const typeMatch =
                !filter.type_of_class ? true : (
                    (filter.type_of_class === "individual" && course.info_course[0])
                    || (filter.type_of_class === "group" && course.info_course[1]));

            const ratingMatch =
                filter.rating === 0 ? true : (
                    parseInt(ratingAmount) === filter.rating);

            return categoryMatch && frequencyMatch && typeMatch && ratingMatch;
        });
    }
    // Usar map para crear un arreglo de componentes Card a partir de los cursos filtrados


    let filtered_list = [];

    let noCoursesFound = true;

    if (filteredCourses.length > 0) {
        filtered_list = filteredCourses.map((course) => (
            <Card
                key={course._id}
                course={course}
                tutor={tutorsContext[course.tutor_id]}
            />

        ));
        noCoursesFound = false;
    }




    const handleFilter = (filter) => {
        setFilter(filter);
        setRegexCategory(new RegExp(`${filter.category}.*`, 'i'));
    };



    return (
        <>
            {filtered_list.length === 0 && !noCoursesFound
                ? <div className='bg-change-color pb-5'> <Loading /> </div> :
                (<div className='bg-change-color pb-5' >
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

                    <div>
                        {noCoursesFound ? <h3 className="text-center text-info my-5">No se encontraron cursos disponibles</h3> :
                            filtered_list}
                    </div>
                    <ModalFilter handleFilter={handleFilter} />

                </div>)}

        </>
    );
}

export default Results;




