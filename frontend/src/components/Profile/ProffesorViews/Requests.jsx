import React from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import { useLocation } from 'react-router-dom'
import { useUserContext } from '../../../Context/UserContext';
import Opinion from '../../Card/Opinions/Opinion';

function Requests() {
    const { tutors } = useTutorContext();
    const { isLoggedIn, userId, login, logout } = useUserContext();

    const requests_list = tutors.map((tutor) => {
        if (tutor.id === userId && tutor.courses) {
            return tutor.courses.map((course) => {
                if (course.reviews) {
                    return course.reviews.map((review) => {
                        if (!review.public) {
                            return <Opinion review={review} isUser={userId} />;
                        }
                        return null; // Si la revisión es pública, devuelve null para evitar elementos vacíos.
                    });
                }
                return null; // Si no hay revisiones, devuelve null para evitar elementos vacíos.
            });
        }
        return null; // Si no se cumple la condición del tutor, devuelve null para evitar elementos vacíos.
    });



    return (
        <>

            <section id="call-to-action" class="action-diferent section-home">
                <div class="container" data-aos="zoom-out">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h3>Solicitudes de comentarios</h3>
                        </div>

                    </div>
                </div>
            </section>
            <div className="px-10 div-op">
                <div className="container">
                    {requests_list && requests_list.length > 0 ? (
                        <div>{requests_list}</div>
                    ) : (
                        <p>No hay solicitudes de comentarios disponibles.</p>
                    )}
                </div>
            </div>

        </>
    );
}



export default Requests