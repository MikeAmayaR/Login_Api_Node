import database from "../repository";
const fs = require("fs");
const clas = "LoginServices";

class LoginServices {
  static async insertUser(params) {
    try {
      return await database.Users.create(params);
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }
  static async getUser(params) {
    try {
      return await database.Users.findAll({
        where: {
          Mail: params.Mail
        },
      });
    } catch (error) {
      console.log(clas, error);
      return error;
    }
  }
}

export default LoginServices;
