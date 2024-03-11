const Evento = require('../models/Evento');

const getEventos = (req, res) => {
    try {
        res.status(201).json({
            ok: true,
            msg: 'getEventos'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}


const crearEvento = async(req, res) => {
    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.status(201).json({
            ok: true,
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}

const actualizarEvento = (req, res) => {
    try {
        res.status(201).json({
            ok: true,
            msg: 'actualizarEvento'
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}

const eliminarEvento = (req, res) => {
    try {
        res.status(201).json({
            ok: true,
            msg: 'eliminarEvento'
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}