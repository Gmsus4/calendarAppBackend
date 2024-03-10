const Usuario = require('../models/Usuario');

const crearUsuario = async(req, res) => {
    // const {name, email, password} = req.body;

    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            msg: 'register',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}

const loginUsuario = (req, res) => {
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