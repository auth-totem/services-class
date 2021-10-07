const fileName = 'GetStudentsOnClass';

module.exports = ({ logger, classRepository }) => ({
  getClass: async (codeClass) => {
    const callName = `${fileName}.getClass()`;
    logger.info(`${callName} entered`);
    return await classRepository.getStudentsOnClass(codeClass);
  },
});