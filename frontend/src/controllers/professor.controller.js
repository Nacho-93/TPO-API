import urlWebServices from "./webServices";
const localUserId = localStorage.getItem('userId');

export const getProfile = async (userId) => {
    
    // if (userId !== localUserId) {
    //     return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    // }

    const url = urlWebServices.getProfile.replace(":id", userId);
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'x-access-token': localStorage.getItem('x')
            }
        });
        let data = await response.json();

        return data;
                
        
    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}


export const updateProfile = async (user ,userId) => {

    if (userId !== localUserId) {
        return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    }

    const url = urlWebServices.updateProfile.replace(":id", userId);

    try {

        const formData = new URLSearchParams(user);

        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'x-access-token': localStorage.getItem('x')
            },
            body: formData
        });
       
        let data = await response.json();
   
        return data;
                
        
    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}


