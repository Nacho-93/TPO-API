// const cloudinary = require('../services/cloudinary.service');

var ProfessorService = require('../services/professor.service');


// Async Controller function to get the To do List
exports.getProfessorById = async (req, res, next) => {
    const {id} = req.params;
    try {
        const professor_data = await ProfessorService.getProfessorById(id)
        res.status(200).json(professor_data);
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
    res.status(400).json({status: 400, message: e.message})
    }
}

exports.updateProfessor = async (req, res, next) => {
    const {id} = req.params;
    const professorData = req.body;

    try {
        if (req.file) {
            professorData.image_profile  = req.file.path;
        }
        const updatedProfessor = await ProfessorService.updateProfessor(id, professorData)
        res.status(200).json(updatedProfessor);
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
}

}


exports.deleteProfessor = async (req, res, next) => {
    const {id} = req.params;

    const confirmDelete = req.body.confirmDelete;

    try {
        if (!confirmDelete) {
            throw Error("No se ha confirmado la eliminación del perfil")    
        }
        const deleted = await ProfessorService.deleteProfessor(id)
        res.status(200).json({status: 200, message: "Succesfully Professor Deleted"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}



exports.getAllProfessors = async (req, res, next) => {
    // Check the existence of the query parameters, If doesn't exists assign a default value

    try {
        const professors = await ProfessorService.getAllProfessors();
        
        // Return the Users list with the appropriate HTTP password Code and Message.
        res.status(200).json({status: 200, data: professors, message: "Succesfully Users Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        res.status(400).json({status: 400, message: e.message})
    }
}


exports.contactProfessor = async (req, res, next) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const contact = await ProfessorService.contactProfessor(id, data.name, data.email, data.message, data.course_id);
        res.status(200).json({status: 200, data: contact, message: "Succesfully Contacted Professor"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}