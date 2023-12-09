import React, { createContext, useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {

    const [userIdContext, setUserIdContext] = useState(null); // ID del usuario logueado

    // Almacena la lista de tutores aquí

    // Tutor actualmente logueado


    // Función para iniciar sesión
    const loginContext = (id) => {
        setUserIdContext(id);
    };

    // Función para cerrar sesión
    const logoutContext = () => {
        localStorage.clear();
        setUserIdContext(null);
        <Navigate to="/" />
    };


    return (
        <UserContext.Provider
            value={{
                userIdContext,
                loginContext,
                logoutContext,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
