const models = require('../database/models/index')

module.exports = {
    
    getPatients : async(req, res)=>{
        try {
            const patients = await models.patients.findAll({
                include: [{
                    model: models.patient_doctor,
                    include: [{
                        model: models.doctors,
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

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    getPatient : async(req, res)=>{
        try {
            const patient = await models.patients.findOne({
                where: {
                    id: req.params.id
                },                                   
                include: [{
                    model: models.patient_doctor,
                    include: [{
                        model: models.doctors,
                        attributes: ["name", "last_name", "enrollment"]
                    }]                        
                }]            
            })
            if (!patient) return res.status(500).json({message: 'ID inexistente'})

            res.json({
                success: true,
                data: {
                    patient: patient
                }
            })

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    createPatient : async (req, res)=>{
        try {
            const patient = await models.patients.create(req.body)                 
               
            if (!patient) return res.status(500).json({message: 'Campos erroneos'})  

            const doctor = await models.doctors.findByPk(req.body.doctorId)

            if (!doctor) return res.status(500).json({message: 'ID Medico inexistente'})
            
            const patient_doctor = await models.patient_doctor.create({
                doctorId: req.body.doctorId,
                patientId: patient.id
            })
            res.json({
                success: true,
                data: {
                    doctorId: patient_doctor.doctorId,
                    id: patient.id
                }
            })                        

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    updatePatient : async (req, res)=>{
        try {
            const id = req.params.id
            const patient = await models.patients.findByPk(id)

            if (!patient) return res.json({message: 'ID inexistente'})

            const doctor = await models.doctors.findByPk(req.body.doctorId)

            if (!doctor) return res.status(500).json({message: 'ID Medico inexistente'})
            
            const patient_doctor = await models.patient_doctor.create({
                doctorId: req.body.doctorId,
                patientId: patient.id
            })

            patient.set(req.body)            
            
            await patient.save();
            res.json({
                success: true,
                data: {
                    doctorId: patient_doctor.doctorId,
                    id: patient.id
                }
            })     
        } catch (error) {
            return res.status(500).json({message: error.message})
        } 
    },

    deletePatient : async (req, res)=>{
        try {
            const id = req.params.id
            const patient = await models.patients.findByPk(id)            
            if (patient==null){
                return res.status(500).json({message: 'ID inexistente'})
            }
            await models.patients.destroy({
                where:{
                    id: id
                }
            })
            return res.status(500).json({message: 'Eliminado Correctamente'})
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        } 
    }

}