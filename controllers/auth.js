const { validationResult } = require('express-validator')
const crearUsuario = (req, res) => {
    const {name, email, password} = req.body;

    //Manejo de errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res) => {
    //Manejo de errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    const {email, password} = req.body;
    
    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const revalidarToken = (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario, 
    loginUsuario,
    revalidarToken
}