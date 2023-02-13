import LoginServices from "../services/LoginServices";

const clas = "session";

class SessionController {
  static async createUser(req, res) {
    let response;
    try {
      const getData = await LoginServices.getUser(req.body);
      console.log("getData", getData);

      const data = getData.find((element) => element.Role === req.body.Role);
      if (data) {
        response = {
          status: 202,
          code: "LR02",
          type: "success",
          message: "User Already exists",
        };
      } else {
        const createUser = await LoginServices.insertUser(req.body);
        response = {
          status: 202,
          code: "LR01",
          type: "success",
          message: "User Register succesfully",
          data: createUser,
        };
      }
      return res.send(response);
    } catch (error) {
      console.error(clas, error);
      return error;
    }
  }

  static async getDatatUser(req, res) {
    let response;
    const paramsUrl = req.params

    try {
      const getUser = await LoginServices.getUser( paramsUrl );
      if (getUser[0]) {
        response = {
          status: 202,
          code: "LR01",
          message: "User found succesfully",
          data: getUser,
        };
      }else{
        response = {
            status: 400,
            code: "LR02",
            message: "User not found",
            data: {},
          };
      }
      return res.send(response);
    } catch (error) {
      console.error(clas, error);
      return error;
    }
  }
}
export default SessionController;
