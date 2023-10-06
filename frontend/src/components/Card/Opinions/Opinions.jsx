import React from 'react'
import './Opinions.css'
import { useTutorContext } from '../../../Context/TutorContext'
import { useLocation } from 'react-router-dom'
import Opinion from './Opinion';


function Opinions() {
    const location = useLocation().pathname.split("/")[2].split("-");
    const course_id = parseInt(location[2]);
    const tutor_id = parseInt(location[3]);
    const { tutors } = useTutorContext();

    const opinions_list = tutors.map((professor) => {

        if (professor.id === tutor_id && professor.courses) {

            return professor.courses.map((course) => {

                if (course.id === course_id && course.reviews) {
                    return course.reviews.map((review) => (
                        <Opinion review={review} />
                    ));
                }

            });
        }

    });

    return (
        <>

            <section id="call-to-action" class="action-diferent section-home">
                <div class="container" data-aos="zoom-out">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h3>Opiniones</h3>
                            <button type="button"
                                className="btn btn-info w-50"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalComment"
                                data-bs-whatever="@getbootstrap">
                                Agregar

                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <div className="px-10 div-op">
                <div className="container">
                    {opinions_list && opinions_list.length > 0 ? (
                        <div>{opinions_list}</div>
                    ) : (
                        <p>No hay opiniones disponibles.</p>
                    )}
                </div>
            </div>

        </>
    );
}

export default Opinions;