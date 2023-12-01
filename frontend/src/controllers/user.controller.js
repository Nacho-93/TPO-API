import urlWebServices from "./webServices";


export const login_exe = async (user) => {

    try {
        
        const formData = new URLSearchParams();
        formData.append('email', user.email);
        formData.append('password', user.password);
        const response = await fetch(urlWebServices.login, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.WebToken
            },
            body: formData
        });


        let rdo = response.status;
        
        let data = await response.json();

        switch (rdo) {
            case 201:
                {
                let user = data.loginUser.user;
                let token = data.loginUser.token;
                localStorage.setItem('x', token);
                localStorage.setItem('userId', user._id);
                localStorage.setItem("nombre",user.name);
                localStorage.setItem("email",user.email);
                localStorage.setItem("image_url",user.image_profile);
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

export const register_exe = async (user) => {

        try {
            const formData = new URLSearchParams(user);

            const response = await fetch(urlWebServices.register, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Origin': 'http://localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // 'x-access-token': WebToken.WebToken
                },
                body: formData
            });

            if (response.status === 201) {
                const login_response = await login_exe(user);
                return login_response;
            }

        } catch (e) {
            return ({rdo:1,mensaje:"Ha ocurrido un error"});
        }
    }