import urlWebServices from "./webServices";


export const getCourses = async () => {
    try {
        const response = await fetch(urlWebServices.getCourses, {
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
