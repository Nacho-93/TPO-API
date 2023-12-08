import React, { useEffect } from 'react'
import { useTutorContext } from '../../../Context/TutorContext'
import { useLocation } from 'react-router-dom'
import { useUserContext } from '../../../Context/UserContext';
import Opinion from "../../Opinions/Opinion"
import './styleViews.css'
import { ManageRequests } from './ManageRequests';
import { useCoursesContext } from '../../../Context/CoursesContext';
import Loading from '../../Loading';


function Comments() {
    const { tutorsContext } = useTutorContext();
    const { allCoursesContext, fetchCourses } = useCoursesContext();
    const userId = localStorage.getItem('userId');
    const [coursesArray, setCoursesArray] = React.useState([]);
    let requests_list = [];



    useEffect(() => {
        setCoursesArray(Object.values(allCoursesContext));
    }, [allCoursesContext]);



    requests_list = coursesArray.reduce((acc, course) => {
        if (course.tutor_id === userId && course.reviews) {
            const nonPublicReviews = course.reviews.filter(review => !review.public);
            const reviewsJSX = nonPublicReviews.map(review => (
                <Opinion key={review.id} review={review} isUser={userId} course={course} />
            ));
            acc.push(...reviewsJSX);
        }
        return acc;
    }, []);



    return (
        <div className="bg-change-color-profile">

            <ManageRequests />
            <>
                {
                    requests_list.length === 0
                        ?
                        <div className="py-5 div-op" style={{ backdropFilter: "blur(6px)" }}>
                            <h3 className="text-center text-light">No hay opiniones</h3>
                        </div>
                        :
                        <div className="px-10 div-op py-5" >
                            <div className="container">
                                {<div>{requests_list}</div>}
                            </div>
                        </div>}
            </>
        </div>
    );
}



export default Comments;