const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(
            [{
                nome: 'Bruno',
                telefone: '9999-2222',
                data: new Date(),
                operadora: {
                    nome: 'Oi',
                    codigo: 14,
                    categoria: 'Celular',
                }
            },
            {
                nome: 'Sandra',
                telefone: '9999-3333',
                data: new Date(),
                operadora: {
                    nome: 'Vivo',
                    codigo: 15,
                    categoria: 'Celular',
                }
            },
            {
                nome: 'Mariana',
                telefone: '9999-9999',
                data: new Date(),
                operadora: {
                    nome: 'Tim',
                    codigo: 41,
                    categoria: 'Celular',
                }
            }]
        );
    },

    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    }
}