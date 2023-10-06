import React from 'react'
import { useUserContext } from '../../../Context/UserContext'
import { useTutorContext } from '../../../Context/TutorContext'
import ModalAgregar from '../../modal/ModalAgregar'
import Card from '../../Card/Card';
import ModalEliminar from '../../modal/ModalEliminar';
import ModalEsconder from '../../modal/ModalEsconder';
import { useLocation } from 'react-router-dom';


function Classes() {
    const { tutors } = useTutorContext();
    const { isLoggedIn, userId, login, logout } = useUserContext();
    const [isPublic, setIsPublic] = React.useState(true);

    // course_public
    const user_id_byLocation = parseInt(useLocation().pathname.split("/")[2]);
    const isActual_user = isLoggedIn && userId && (userId === user_id_byLocation);

    // /perfil-profesor/3/clases
    const classes_list = tutors.map((tutor) => {
        if (tutor.id === user_id_byLocation && tutor.courses) {
            return tutor.courses.map((course) => {
                let last_review = null;
                let rating_amount = false;
                if (!isActual_user && !course.course_public) {
                    return null;
                }
                if (course.reviews.length > 0) {

                    last_review = course.reviews[course.reviews.length - 1].comment;
                    rating_amount = [
                        (
                            course.reviews.reduce((sum, review) => sum + review.rating, 0) /
                            course.reviews.length
                        ).toFixed(1),
                        course.reviews.length,
                    ];
                }

                return (
                    <>
                        <div className=''>
                            <Card
                                name={tutor.name}
                                lastName={tutor.lastName}
                                image_profile={tutor.image_profile}
                                frequency={course.frequency}
                                id={tutor.id}
                                title={course.title}
                                price_hour={course.price_hour}
                                course_description={course.course_description}
                                last_review={last_review ? last_review : false}
                                info={course.info_course}
                                rating_amount={rating_amount}
                                course_id={course.id}
                                hours_experience={tutor.hours_experience}
                                key={course.id}
                                isTutor={true}
                            />

                            {isActual_user && <div className='d-flex justify-content-end align-items-end mb-5' style={{ maxWidth: "720px", margin: "0 auto" }}>
                                <button type="button" class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#AgregarModal" data-bs-whatever="@getbootstrap">
                                    <i class="fa-regular fa-pen-to-square"></i>
                                </button>
                                <ModalAgregar />
                                <button type="button" class="btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#OcultarModal" >
                                    {!isPublic ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}
                                </button>
                                <ModalEsconder isPublic={isPublic} handleClick={(e) => setIsPublic(!isPublic)} />

                                <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#EliminarModal" data-bs-whatever="@getbootstrap">
                                    <i className="fa-solid fa-x"></i>
                                </button>
                                <ModalEliminar />
                            </div>}
                        </div>
                    </>
                );
            });
        }

        return null; // Retornar null si no se cumple la condición
    });


    return (
        <>
            <section id="call-to-action" class="action-diferent section-home">
                <div class="container" data-aos="zoom-out">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            {isLoggedIn ? <h3>Mis clases</h3> : <h3>Clases de { }</h3>}
                            <button type="button"
                                className="btn btn-info w-50"
                                data-bs-toggle="modal"
                                data-bs-target="#AgregarModal"
                                data-bs-whatever="@getbootstrap">
                                Agregar clase
                            </button>
                            <ModalAgregar />

                        </div>

                    </div>
                </div>
            </section>
            <div>
                {classes_list}
            </div>
        </>
    )
}

export default Classes;