import urlWebServices from "./webServices";


export const getAllTutors = async () => {
    console.log("BEFORE")
    try {
        
        const response = await fetch(urlWebServices.getAllTutors, {
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
  
        return data.data;
    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}