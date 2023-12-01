import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import { getCourses } from '../controllers/courses.controller'


const CoursesContext = createContext();
export default CoursesContext;
export const useCoursesContext = () => useContext(CoursesContext);


const CoursesContextProvider = ({ children }) => {
    // const { userId } = useUserContext();

    const [allCoursesContext, setAllCoursesContext] = useState({});

    const fetchCourses = async () => {
        try {
            const data = await getCourses();
            setAllCoursesContext(data);
        } catch (error) {
            console.error('Error obteniendo los cursos:', error);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, []);


    return (
        <CoursesContext.Provider
            value={{
                allCoursesContext,
                setAllCoursesContext,
                fetchCourses
            }}>
            {children}
        </CoursesContext.Provider>
    )
}

export { CoursesContextProvider }; 
