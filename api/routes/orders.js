const router = require('express').Router();
const models = require('../models');

// router.get('/orders', ordersController.allOrders);

router.get('/', (req,res) => {
    models.Order.findAll({
        include:{
            model: models.User
        }
    })
        .then(data => res.json({
            data
        }));
});

module.exports = router;