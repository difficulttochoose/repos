const models = require('../models');

exports.allUsers = async (req,res) => {
    try{
        let users = await models.User.scope('hidePersonalData').findAll({
            include: {
                model: models.Order
            }
        });
        res.json({
            data: users
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.createUser = async (req,res) => {
    try {
        const user = await models.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName || null,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            role: req.body.role || 'user'
        });
        res.json({
            data: user
        })
    }catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.getUser = async (req,res) => {
    try {
        const user = await models.User.scope('hidePersonalData').findByPk(req.params.user_id);
        res.json({
            data: user
        })
    }catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};