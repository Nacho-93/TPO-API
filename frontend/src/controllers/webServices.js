

const urlApi = 'http://localhost:4000';


const urlWebServices = {
    // USER
    login: urlApi + '/api/users/login',
    register: urlApi + '/api/users/registration',
    recovery: urlApi + '/api/users/recuperarContrasenia',
    updatePassword: urlApi + '/api/users/recuperarContrasenia/updatePassword',
    
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
    rejectReview: urlApi + '/api/perfil/:id/solicitudes-comentarios',

    createCourse: urlApi + '/api/perfil/:id/misClases',
    updateCourse: urlApi + '/api/perfil/:id/misClases',
    deleteCourse: urlApi + '/api/perfil/:id/misClases',
    manageCourseStatus: urlApi + '/api/perfil/:id/solicitudes-clases',
    
}

export default urlWebServices;