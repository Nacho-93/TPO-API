import React, { createContext, useContext, useState, useEffect } from 'react';
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Estado de inicio de sesión
    const [userId, setUserId] = useState(isLoggedIn ? 3 : null); // ID del usuario logueado
    // Almacena la lista de tutores aquí

    // Tutor actualmente logueado


    // Función para iniciar sesión
    const login = (id) => {
        setIsLoggedIn(true);
        setUserId(id);
    };

    // Función para cerrar sesión
    const logout = () => {
        setIsLoggedIn(false);
        setUserId(null);
    };


    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                userId,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
