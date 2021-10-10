const fileName = 'ClassController';

module.exports = ({ logger, getClassListUsecase, getStudentsOnClass }) => ({
  getClassList: async (req, res) => {
    const callName = `${fileName}.getClassList()`;
    try {
      logger.info(`${callName} entered`);
      const classList = await getClassListUsecase.getClassList();
      return res.status(200).json(classList);
    } catch (err) {
      logger.error(`${callName} error ocurred with error`, err);
      return res.status(403).json({ error: 'a error has ocurred' });
    }
  },

  getClass: async (req, res) => {
    const callName = `${fileName}.getClass()`;
    try {
      const { id } = req.params;
      logger.info(`${callName} entered with id ${id}`);
      const studentsOnClass = await getStudentsOnClass.getClass(id);
      return res.status(200).json(studentsOnClass);
    } catch (err) {
      logger.error(`${callName} error ocurred with error ${err}`);
      return res.status(403).json({ error: 'a error has ocurred' });
    }
  },

  health: (req, res) => {
    const callName = `${fileName}.health()`;
    logger.info(`${callName} entered with data`, req.body);
    return res.status(200).json({ health: 'api up and running' });
  },
});
