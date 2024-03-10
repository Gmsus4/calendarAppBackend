const crearUsuario = (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    if(name.length < 5){
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe contener 5 caracteres o más',
        })
    }
    res.json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res) => {
    const {email, password} = req.body;
    res.json({
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