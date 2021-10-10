const fileName = 'GetStudentsOnClass';

module.exports = ({ logger, classRepository }) => ({
  getClass: async (codeClass) => {
    const callName = `${fileName}.getClass()`;
    logger.info(`${callName} entered with code ${codeClass}`);
    const students = await classRepository.getStudentsOnClass(codeClass);
    logger.info(
      `${callName} returned from repo with the students ${JSON.stringify(
        students
      )}`
    );
    return students;
  },
});
