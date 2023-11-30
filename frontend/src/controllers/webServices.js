

const urlApi = 'http://localhost:4000';


const urlWebServices = {
    // USER
    login: urlApi + '/api/users/login',
    register: urlApi + '/api/users/registration',
    
    // PROFESSOR
    getProfile: urlApi + '/api/perfil/:id',
    updateProfile: urlApi + '/api/perfil/:id/update',
    getAllTutors: urlApi + '/api/tutors',
    // deleteProfile: urlApi + '/api/perfil/',

    // COURSEs
    getCourses: urlApi + '/api/categorias',
    
}

export default urlWebServices;