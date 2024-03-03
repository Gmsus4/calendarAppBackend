const crearUsuario = (req, res) => {
    res.json({
        ok: true,
        msg: 'register'
    })
}

const loginUsuario = (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
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