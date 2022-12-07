const MODELS = require('../database/models/index')
const ERRORS = require("../const/errors_doctors")

module.exports = {

    getDoctors : async(req, res)=>{
        try {
            const doctors = await MODELS.doctors.findAll({
                include: [{
                    model: MODELS.patient_doctor,
                    include: [{
                        model: MODELS.patients
                    }]
                }]
            })

            res.json({
                success: true,
                data: {
                    doctors: doctors
                }
            })

        } catch (err) {
            return next(ERRORS.alCargarLista)
        }
    },

    getDoctor : async(req, res)=>{
        try {
            const doctor = await MODELS.doctors.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    model: MODELS.patient_doctor,
                    include: [{
                        model: MODELS.patients
                    }]
                }]
            })
            if(!doctor) return next(ERRORS.MedicoInexistente)

            res.json({
                success: true,
                data: {
                    doctor: doctor
                }
            })

        } catch (err) {
            return next(ERRORS.alObtener);
        }
    },

    createDoctor : async (req, res)=>{
        try {
            const doctor = await MODELS.doctors.create(req.body)

            res.json({
                success: true,
                data: {
                    id: doctor.id
                }
            })

        } catch (err) {
            return next(ERRORS.alCrear);
        }
    },

    updateDoctor : async (req, res)=>{
        try {
            const doctor = await MODELS.doctors.findByPk(req.params.id)    
            const { name, last_name, email, specialty, enrollment} = req.body;
            doctor.name = name;
            doctor.last_name = last_name;
            doctor.email = email;
            doctor.specialty = specialty;
            doctor.enrollment = enrollment; 
            await doctor.save();
            res.json({
                success: true,
                data: {
                    id: doctor.id
                }
            })     
        } catch (err) {
            return next(ERRORS.alActualizar);
        }
    },

    deleteDoctor : async (req, res)=>{
        try {
            await Doctors.destroy({
                where:{
                    id: req.params.id
                }
            }) 
        } catch (error) {
            return next(ERRORS.alEliminar);
        } 
    }

}