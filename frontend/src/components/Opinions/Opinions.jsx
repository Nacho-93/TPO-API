import React from 'react'
import './Opinions.css'
import { useLocation } from 'react-router-dom'
import Opinion from './Opinion';
import ModalComment from '../Modal/ModalComment';
import { useCoursesContext } from '../../Context/CoursesContext';


function Opinions() {
    const location = useLocation().pathname.split("/")[2].split("-");
    const course_id = location[2];

    const { allCoursesContext } = useCoursesContext();

    const course = allCoursesContext[course_id];


    let opinions_list = [];

    if (allCoursesContext) {
        opinions_list = course.reviews.map((review) => (
            review.public ? <Opinion review={review} isUser={false} /> : null
        ));
    }

    return (
        <>
            {opinions_list &&
                (<div className='bg-change-color-profile' >

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
                                    <ModalComment course_id={course_id} />
                                </div>

                            </div>
                        </div>
                    </section>
                    <div className="p-5 div-op" style={{ backdropFilter: "blur(5px)" }}>
                        <div className="container">
                            {opinions_list.length > 0 ? (
                                <div>{opinions_list}</div>
                            ) : (
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white'>No hay opiniones disponibles.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>)}
        </>
    );
}

export default Opinions;
