const fileName = 'GetClassListUsecase';

module.exports = ({ logger, classRepository }) => ({
  getClassList: async () => {
    const callName = `${fileName}.getClassList()`;
    logger.info(`${callName} entered`);
    return await classRepository.getClassList();
  },
});