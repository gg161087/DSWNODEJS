const MODELS = require('../database/models/index')
const ERRORS = require("../const/errors_patients")

module.exports = {
    
    getPatients : async(req, res)=>{
        try {
            const patients = await MODELS.patients.findAll({
                include: [{
                    model: MODELS.patient_doctor,
                    include: [{
                        model: MODELS.doctors,
                        attributes: ["name", "last_name", "enrollment"]
                    }]                        
                }]
            })

            res.json({
                success: true,
                data: {
                    patients: patients
                }
            })

        } catch (err) {
            return next(ERRORS.alCargarLista)
        }
    },

    getPatient : async(req, res)=>{
        try {
            const patient = await MODELS.patients.findOne({
                where: {
                    id: req.params.id
                },                                   
                include: [{
                    model: MODELS.patient_doctor,
                    include: [{
                        model: MODELS.doctors,
                        attributes: ["name", "last_name", "enrollment"]
                    }]                        
                }]            
            })
            if (!patient) return next(ERRORS.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    patient: patient
                }
            })

        } catch (err) {
            return next(ERRORS.alObtener)
        }
    },

    createPatient : async (req, res)=>{
        try {
            const patient = await MODELS.patients.create(req.body)            
            
            const patient_doctor = await MODELS.patient_doctor.create({
                doctorId: req.body.doctorId,
                patientId: patient.id
            })
            if (!patient) return next(ERRORS.PacienteInexistente)    
            res.json({
                success: true,
                data: {
                   id: patient.id
                }
            })                        

        } catch (err) {
            return next(ERRORS.alCrear)
        }
    },

    updatePatient : async (req, res)=>{
        try {
            const patient = await MODELS.patients.findByPk(req.params.id) 
            const { name, last_name, dni, email,  age, social_work} = req.body;
            patient.name = name;
            patient.last_name = last_name;
            patient.dni = dni;
            patient.email = email;
            patient.age = age;
            patient.social_work = social_work; 
            await patient.save();
            res.json({
                success: true,
                data: {
                    id: patient.id
                }
            })     
        } catch (err) {
            return next(ERRORS.alActualizar);
        } 
    },

    deletePatient : async (req, res)=>{
        try {
            await MODELS.patients.destroy({
                where:{
                    id: req.params.id
                }
            }) 
        } catch (error) {
            return next(ERRORS.alEliminar)
        } 
    }

}