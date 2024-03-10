const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const crearUsuario = async(req, res) => {
    const {email, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email: email});

        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese correo',
            })
        }

        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();
        //Generar JWT
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}

const loginUsuario = async(req, res) => {
    const {email, password} = req.body;

    try {
        const usuario = await Usuario.findOne({email: email});

        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email',
            })
        }

        //Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto',
            })
        }

        // Generar nuestro JWt
        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
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