"use strict";

const Service = require("egg").Service;

class TypeService extends Service {
  // 标签列表
  async list() {
    const { app } = this;
    try {
      const result = await app.mysql.select("type");

      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = TypeService;
