import urlWebServices from "./webServices";


export const login_exe = async (user) => {
    try {
        console.log("user",user)
        const response = await fetch(urlWebServices.login, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.WebToken
            },
            body: {
                email: user.email,
                password: user.password
            }
        });


        let rdo = response.status;
        let data = await response.json();
        console.log("DATA",data)
        switch (rdo) {
            case 201:
                {
                localStorage.setItem('x', data.loginUser.token);
                let user = data.loginUser.user;
                localStorage.setItem("nombre",user.name);
                localStorage.setItem("email",user.email);
                return ({rdo:0,mensaje:"Ok", user: user});
                }
            case 202:
                {
                return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
            case 203:
                {
                return ({rdo:1,mensaje:"La contraseña ingresada es incorrecta."});
                }
            default:
                return ({rdo:1,mensaje:"Ha ocurrido un error"});    
        }
        
    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}