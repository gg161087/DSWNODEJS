const MODELS = require('../database/models/index')

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
            return next(err)
        }
    },
    getPatient : async(req, res)=>{
        try {
            const patient = await MODELS.patients.findOne({
                where: {
                    id: req.params.idPatient
                },                                   
                include: [{
                    model: MODELS.patient_doctor,
                    include: [{
                        model: MODELS.doctors,
                        attributes: ["name", "last_name", "enrollment"]
                    }]                        
                }]            
            })
            if (!patient) return next()

            res.json({
                success: true,
                data: {
                    patient: patient
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    postPatient : async (req, res)=>{
        try {
            const patient = await MODELS.patients.create(req.body)
            doctor_id = await MODELS.doctors.findOne({where:{id: req.params.doctorId}})
            console.log(doctor_id)
            if (!doctor_id) return next()
            
            const patient_doctor = await MODELS.patient_doctor.create({
                doctorId: req.body.doctorId,
                patientId: patient.id
            })    
            res.json({
                success: true,
                data: {
                   id: patient.id
                }
            })                        

        } catch (err) {
            return next(err)
        }
    },
    putPatient : (req, res)=>{
        res.send('Actualizando patients')
    },
    deletePatient : (req, res)=>{
        res.send('eliminando patients')
    },
    test : async (req, res, next) => {
        try {
            console.log('Ejecutando test en patient')

            res.json({
                message: 'Hola patients'
            })
        } catch (err) {
            console.log(err)
        }
    }
}