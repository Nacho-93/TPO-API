import React from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import { useLocation } from 'react-router-dom'
import { useUserContext } from '../../../Context/UserContext';
import Opinion from "../../Opinions/Opinion"
import './styleViews.css'
import { ManageRequests } from './ManageRequests';
import { useCoursesContext } from '../../../Context/CoursesContext';


function Comments() {
    const { tutorsContext } = useTutorContext();
    const { allCoursesContext } = useCoursesContext();
    const userId = localStorage.getItem('userId');

    const coursesArray = Object.values(allCoursesContext);

    const requests_list = coursesArray.map((course) => {
        if (course.tutor_id === userId) {
            if (course.reviews) {
                return course.reviews.map((review) => {
                    if (!review.public) {
                        return <Opinion review={review} isUser={userId} course={course} />;
                    }
                    return null; // Si la revisión es pública, devuelve null para evitar elementos vacíos.
                });
            }
            return null; // Si no hay revisiones, devuelve null para evitar elementos vacíos.
        }
        return null; // Si el curso no pertenece al usuario, devuelve null para evitar elementos vacíos.
    }
    );


    return (
        <div className="bg-change-color-profile">

            <ManageRequests />

            <div className="px-10 div-op py-5" >
                <div className="container">
                    {requests_list && requests_list.length > 0 ? (
                        <div>{requests_list}</div>
                    ) : (
                        <p>No hay solicitudes de comentarios disponibles.</p>
                    )}
                </div>
            </div>

        </div>
    );
}



export default Comments;