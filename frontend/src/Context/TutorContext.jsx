import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import { getAllTutors } from '../controllers/tutors.controller';


const TutorContext = createContext();
export default TutorContext;
export const useTutorContext = () => useContext(TutorContext);


const TutorContextProvider = ({ children }) => {
    // const { userId } = useUserContext();

    const [tutorsContext, setTutorsContext] = useState({});


    useEffect(() => {
        async function fetchTutors() {
            try {
                const data = await getAllTutors();
                setTutorsContext(data);


            } catch (error) {
                console.error('Error obteniendo los cursos:', error);
            }
        }
        fetchTutors();
    }, []);




    return (
        <TutorContext.Provider
            value={{
                tutorsContext,
            }}>
            {children}
        </TutorContext.Provider>
    )
}

export { TutorContextProvider }; 