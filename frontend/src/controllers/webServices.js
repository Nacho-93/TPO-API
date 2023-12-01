

const urlApi = 'http://localhost:4000';


const urlWebServices = {
    // USER
    login: urlApi + '/api/users/login',
    register: urlApi + '/api/users/registration',
    
    // PROFESSOR
    getProfile: urlApi + '/api/perfil/:id',
    updateProfile: urlApi + '/api/perfil/:id/update',
    getAllTutors: urlApi + '/api/tutors',
    contactProfessor: urlApi + '/api/perfil/:id/contact',
    // deleteProfile: urlApi + '/api/perfil/',

    // COURSEs
    getCourses: urlApi + '/api/categorias',
    addReview: urlApi + '/api/categorias',
    acceptReview: urlApi + '/api/perfil/:id/solicitudes-comentarios',
    // rejectReview: urlApi + '/api/perfil/:id/solicitudes-comentarios',
    createCourse: urlApi + '/api/perfil/:id/misClases',
    
}

export default urlWebServices;