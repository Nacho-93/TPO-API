var ProfessorService = require('../services/professor.service');


// Async Controller function to get the To do List
exports.getProfessorById = async (req, res, next) => {
    const {id} = req.params;

    try {
        console.log("Professor id CONTROLLER:",id)
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


