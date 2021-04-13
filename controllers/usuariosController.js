const {Usuario, sequelize} = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    create: async (req, res) => {
        const usuario = req.body;
        await Usuario.create(usuario);
        return res.json(usuario);
    },
    update: async (req, res) => {
        const usuarioId = req.params;
        const usuarioInfo = req.body;
        await Usuario.update(usuarioInfo, { 
            where: {id: usuarioId.id}
        });
        return res.json(usuarioInfo);
    },
    delete: async (req, res) => {
        const usuario = req.params;
        await Usuario.destroy({ where: {
            id: usuario.id
        }});
        return res.send('Deletado com sucesso!');
    }
}

module.exports = usuariosController;