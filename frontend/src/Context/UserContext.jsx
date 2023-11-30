import React, { createContext, useContext, useState, useEffect } from 'react';
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {

    const [userId, setUserId] = useState(null); // ID del usuario logueado

    // Almacena la lista de tutores aquí

    // Tutor actualmente logueado


    // Función para iniciar sesión
    const loginContext = (id) => {
        setUserId(id);
    };

    // Función para cerrar sesión
    const logoutContext = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('x');
        localStorage.removeItem('nombre');
        localStorage.removeItem('email');
        localStorage.removeItem('image_url');
        setUserId(null);
    };


    return (
        <UserContext.Provider
            value={{
                userId,
                loginContext,
                logoutContext,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
