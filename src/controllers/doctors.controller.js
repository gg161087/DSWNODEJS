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
            return next(err)
        }
    },
    getDoctor : async(req, res)=>{
        try {
            const doctor = await MODELS.doctors.findOne({
                where: {
                    id: req.params.idDoctor
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
            return next(err)
        }
    },
    postDoctor : async (req, res)=>{
        try {
            const doctor = await MODELS.doctors.create(req.body)

            res.json({
                success: true,
                data: {
                    id: doctor.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    putDoctor : (req, res)=>{
        res.send('Actualizando doctors')
    },
    deleteDoctor : async (req, res)=>{
        try {
            const doctor = await MODELS.doctors.delete({
                where: {
                    id: req.params.idDoctor
                }
            })

            res.json({
                success: true                
            })

        } catch (err) {
            return next(err)
        }
    },
    test : async (req, res, next) => {
        try {
            console.log('Ejecutando test en doctors')

            res.json({
                message: 'Hola doctors'
            })
        } catch (err) {
            console.log(err)
        }
    }
}