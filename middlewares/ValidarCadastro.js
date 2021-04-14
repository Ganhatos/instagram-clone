const {Usuario} = require('../models');

module.exports = async (req, res, next) => {
    let {nome, email, senha} = req.body;
    let users = await Usuario.findAll({ where: {email} });
    
    if (users.length) {
        res.status(400).json({ erro: "Email já cadastrado"});
        return;
    } else if (!email) {
        res.status(400).json({ erro: "Email precisa ser informado"});
        return;
    } else if (!nome) {
        res.status(400).json({ erro: "Nome precisa ser informado"});
        return;
    } else if (senha.length == 0 || senha.length < 6 || senha.length > 12) {
        res.status(400).json({ erro: "Senha precisa ter entre 6 e 12 caracteres"});
        return;
    } else {
        next();
    }
}