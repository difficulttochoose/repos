const models = require('../models');

const authMiddleware = async (req,res,next) => {

  const returnUnauthorized = response => {
    return response.status(401).json({
      errors: [
        "Unauthorized"
      ]
    });
  };

  if(!req.header('authorization')) return returnUnauthorized(res);

  const user = await models.User.scope('hidePersonalData').findOne({
    where: {
      token: req.header('authorization').replace('Bearer ', '')
    }
  });

  if(!user) return returnUnauthorized(res);

  req.user = user;

  next();
};

module.exports = authMiddleware;
