import React, { createContext, useContext, useState } from 'react';
import { useUserContext } from './UserContext';
const TutorContext = createContext();
export default TutorContext;
export const useTutorContext = () => useContext(TutorContext);


const TutorContextProvider = ({ children }) => {
    const { userId } = useUserContext();
    const [tutorsContext, setTutorsContext] = useState([]);
    const [professorContext, setProfessorContext] = useState(null);
    const [coursesContext, setCoursesContext] = useState([]);


    const getTutors = (allTutors) => {
        setTutorsContext(allTutors);
    }

    const getCourses = (allCourses) => {
        setCoursesContext(allCourses);
    }






    return (
        <TutorContext.Provider
            value={{
                tutorsContext,
                coursesContext,
                professorContext,
                setProfessorContext,
                getTutors,
                setCoursesContext,

            }}>
            {children}
        </TutorContext.Provider>
    )
}

export { TutorContextProvider }; 