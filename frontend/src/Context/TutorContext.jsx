import React, { createContext, useContext, useState } from 'react';
import dataObj from '../DATA/data.json';
const TutorContext = createContext();
export default TutorContext;
export const useTutorContext = () => useContext(TutorContext);


const TutorContextProvider = ({ children }) => {

    const data = { tutors: dataObj }; // Almacena la lista de tutores aquí
    console.log(data.tutors)
    return (
        <TutorContext.Provider value={data}>
            {children}
        </TutorContext.Provider>
    )
}

export { TutorContextProvider }; 