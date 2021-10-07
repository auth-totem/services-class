module.exports = ({ classController }) => [
  {
    method: 'get',
    path: '/class',
    handler: classController.getClassList,
  },
  {
    method: 'get',
    path: '/class/:id',
    handler: classController.getClass,
  },
  {
    method: 'get',
    path: '/health',
    handler: classController.health,
  },
];
