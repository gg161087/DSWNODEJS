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

        } catch (error) {
            return res.status(500).json({message: error.message})
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
            const patient = req.body                    
            const doctor_id = req.body.doctorId   

            if (!patient) return res.status(500).json({message: 'Campos erroneos'})  

            const doctor = await MODELS.doctors.findByPk(doctor_id)

            if (!doctor) return res.status(500).json({message: 'ID Medico inexistente'})
            console.log(doctor, patient)
            await MODELS.patients.create(patient)
            const patient_doctor = await MODELS.patient_doctor.create({
                doctorId: doctor_id,
                patientId: patient.id
            })
            res.json({
                success: true,
                data: {
                   id: patient.id,
                   doctorId: patient_doctor.id
                }
            })                        

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    updatePatient : async (req, res)=>{
        try {
            const id = req.params.id
            const patient = await MODELS.patients.findByPk(id)

            if (!patient) return res.json({message: 'ID inexistente'})

            patient.set(req.body)            
            
            await patient.save();
            res.json({
                success: true,
                data: {
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
            const patient = await MODELS.patients.findByPk(id)            
            if (patient==null){
                return res.status(500).json({message: 'ID inexistente'})
            }
            await MODELS.patients.destroy({
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