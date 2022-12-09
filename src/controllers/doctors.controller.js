const MODELS = require('../database/models/index')

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

        } catch (error) {
            return res.status(500).json({message: error.message})
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
            if(!doctor) return res.status(500).json({message: 'ID inexistente'})

            res.json({
                success: true,
                data: {
                    doctor: doctor
                }
            })

        } catch (error) {
            return res.status(500).json({message: error.message})
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

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    updateDoctor : async (req, res)=>{
        try {
            const id = req.params.id
            const doctor = await MODELS.doctors.findByPk(id)
            
            if (!doctor) return res.json({message: 'ID inexistente'})

            doctor.set(req.body)            
            await doctor.save();
            res.json({
                success: true,
                data: {
                    id: doctor.id
                }
            })     
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    deleteDoctor : async (req, res)=>{
        try {
            const id = req.params.id
            const doctor = await MODELS.doctors.findByPk(id)            
            if (doctor==null){
                return res.status(500).json({message: 'ID inexistente'})   
            }
            await MODELS.doctors.destroy({
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