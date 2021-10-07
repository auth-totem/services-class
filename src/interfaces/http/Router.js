const { Router, json } = require('express');
const cors = require('cors');

module.exports = ({ classRoutes, routerRegister }) => {
  const router = Router();
  router
    .use(cors())
    .use(json())
    .use('/api/v1', routerRegister.register(classRoutes));
  return router;
};
