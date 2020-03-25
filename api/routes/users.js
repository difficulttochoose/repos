const router = require('express').Router();

const authMiddleware = require('../middleware/auth');
const usersController = require('../controllers/usersController');

router.get('/', authMiddleware, usersController.allUsers);
router.get('/:user_id', authMiddleware, usersController.getUser);
router.post('/', authMiddleware, usersController.createUser);
// set user status
// delete user

// get all active users
// get all not active users


module.exports = router;
