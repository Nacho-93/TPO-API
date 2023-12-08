import urlWebServices from "./webServices";
const localUserId = localStorage.getItem('userId');

export const getProfile = async (userId) => {
    
    // if (userId !== localUserId) {
    //     return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    // }
    const url = urlWebServices.getProfile.replace(":id", userId);
    const token = localStorage.getItem('x');
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': token
            }
        });
        let data = await response.json();

        return data;
                
        
    } catch (e) {
        return ({rdo:1,mensaje: e});
    }
}


export const updateProfile = async (user, userId) => {

    if (userId !== localUserId) {
        return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    }
    
    const url = urlWebServices.updateProfile.replace(":id", userId);

    try {


        const formData = new FormData();
        Object.keys(user).forEach((key) => {
            formData.append(key, user[key]);
            });

       
        const token = localStorage.getItem('x');
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'x-access-token': token
            },
            body: formData,
        });
        
        let data = await response.json();

        return data;
                
        
    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}


export const contactProfessor = async (info, id) => {
    const url = urlWebServices.contactProfessor.replace(":id", id);
    try {

        const formData = new URLSearchParams();
        Object.keys(info).forEach((key) => {
            formData.append(key, info[key]);
            });
        
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        let data = await response.json();
        return data;

    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}

