const bcrypt = require('bcryptjs');
const {Usuario, sequelize} = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.render('usuarios', {listaUsuarios: usuarios});
    },
    login: (req, res) => {
        return res.render('login');
    },
    auth: async (req, res) => {
        const {email, senha} = req.body;

        const usuario = await Usuario.findOne({
            where: { email }
        });

        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
            req.session.usuarioLogado = usuario;
            return res.redirect('/');
        }
    },
    registro: (req, res) => {
        return res.render('registro');
    },
    create: async (req, res) => {
        let {nome, email, senha} = req.body;

        const senhaCrypt = bcrypt.hashSync(senha, 10);
        
        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCrypt
        });

        return res.redirect('/usuarios/login');
    },
    update: async (req, res) => {
        let {id} = req.params;
        let {nome, email, senha} = req.body;

        let usuarioAtualizado = await Usuario.update({
            nome, email, senha
        }, {
            where: {id}
        });
        return res.json(usuarioAtualizado);
    },
    delete: async (req, res) => {
        let {id} = req.params;
        const usuarioDeletado = await Usuario.destroy({
            where: {id}
        });
        return res.json(usuarioDeletado);
    }
}

module.exports = usuariosController;