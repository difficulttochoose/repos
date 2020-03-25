const router = require('express').Router();
const uuid = require('uuid');
const models = require('../models');

const authMiddleware = require('../middleware/auth');

router.post('/login', async (req, res) => {
  const token = uuid.v4();

  const result = await models.User.update(
    {
      token
    },
    {
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }
  );

  res.json({
    token
  })
});


router.post('/me', authMiddleware, async (req,res) => {
  res.json({
    user: req.user
  });
});

router.post('/register', () => {

});

router.post('/logout', () => {

});

module.exports = router;
