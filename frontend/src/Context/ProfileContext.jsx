import React, { createContext, useState, useContext, useEffect } from 'react';
import { getProfile } from '../controllers/professor.controller';
import { useLocation } from 'react-router-dom';
import { useUserContext } from './UserContext';
const ProfileContext = createContext();

export const useProfileContext = () => {
    return useContext(ProfileContext);
};

export const ProfileContextProvider = ({ children }) => {
    const [professorData, setProfessorData] = useState({});

    const { userIdContext } = useUserContext();
    const pathId = useLocation().pathname.split('/')[2];


    const fetchProfileData = async (userId) => {
        try {
            const profileData = await getProfile(userId);
            setProfessorData(profileData);

        } catch (error) {
            console.error('Error obteniendo el perfil:', error);
            // Handle errors fetching profile data
        }
    };

    useEffect(() => {
        if (!professorData) {
            fetchProfileData(pathId);
        }
    }, [pathId, professorData]);

    return (
        <ProfileContext.Provider value={{ professorData, setProfessorData, fetchProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileContext;
