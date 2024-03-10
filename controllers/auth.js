const crearUsuario = (req, res) => {
    const {name, email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
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