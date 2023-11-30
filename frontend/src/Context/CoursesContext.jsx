import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import { getCourses } from '../controllers/courses.controller'


const CoursesContext = createContext();
export default CoursesContext;
export const useCoursesContext = () => useContext(CoursesContext);


const CoursesContextProvider = ({ children }) => {
    // const { userId } = useUserContext();

    const [allCoursesContext, setAllCoursesContext] = useState({});


    useEffect(() => {
        async function fetchCourses() {
            try {
                const data = await getCourses();
                console.log(data)
                setAllCoursesContext(data);
                console.log("ACACACA" + allCoursesContext)


            } catch (error) {
                console.error('Error obteniendo los cursos:', error);
            }
        }
        fetchCourses();
    }, []);


    return (
        <CoursesContext.Provider
            value={{
                allCoursesContext,
            }}>
            {children}
        </CoursesContext.Provider>
    )
}

export { CoursesContextProvider }; 
