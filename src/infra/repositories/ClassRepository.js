const fileName = 'ClassRepository';

module.exports = class ClassRepository {
  constructor({ db, logger }) {
    this.db = db;
    this.logger = logger;
  }

  async getClassList() {
    const callName = `${fileName}.getClassList()`;
    this.logger.info(`${callName} trying to get class list`);
    return await this.db
      .select('*')
      .from('class');
  }

  async getStudentsOnClass(codeClasscase) {
    const callName = `${fileName}.getStudentsOnClass()`;
    this.logger.info(
      `${callName} trying to get Class by code, with code: ` + codeClasscase
    );
    return await this.db
      .select('*')
      .from('cadaster')
      .leftJoin('cadaster_has_event', 'cadaster_has_event.idCadaster', 'cadaster.idCadaster')
      .where('idClass', codeClasscase)
      .andWhere('cadaster_has_event.idEvent', 2)
  }
};
