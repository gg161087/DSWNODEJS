module.exports = (scheme) => {

    return (req, res, next) => {
        let result = scheme.validate(req.body) 

        if (result.error) { 
            res.json({message: result.error.details[0].message})
        } else { 
            next()
        }
    }

}