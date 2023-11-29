

const urlApi = 'http://localhost:4000';


const urlWebServices = {
    login: urlApi + '/api/users/login',
    // register: urlApi + '/api/users/register',
    getProfile: urlApi + '/api/perfil/:id',

    updateProfile: urlApi + '/api/perfil/:id/update',
    // deleteProfile: urlApi + '/api/perfil/',
    // getCourses: urlApi + '/api/categorias',
    
}

export default urlWebServices;