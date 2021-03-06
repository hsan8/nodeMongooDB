const { newEmployee, getAllEmployee, getEmployeeById, updateEmployeeDetails, deleteEmployee } = require("../service/employee.service");
const httpRespondCode = require("../Util/httpStatusCode.status");
const Employee = require("../model/employee.model");
class employeeController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async creat(req, res) {
    try {
      const emp = new Employee(req.body);
      const response = await newEmployee(emp);
      return response.status == "success"
        ? res.status(httpRespondCode.OK).send({ data: response.message })
        : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    } catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }
  }
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async getAll(req, res) {
    try {
      const page = req.params.page;
      const name = req.params.name;
      const response = await getAllEmployee(Employee, page, name);
      return response.status == "success"
        ? res.status(httpRespondCode.OK).send({ data: response.message })
        : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    } catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }
  }
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async getById(req, res) {
    try {
      const response = await getEmployeeById(Employee, req.params.id);
      return response.status == "success"
        ? res.status(httpRespondCode.OK).send({ data: response.message })
        : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    } catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async update(req, res) {
    try {
      const id = { _id: req.params.id };
      const payload = req.body;
      const response = await updateEmployeeDetails(Employee, id, payload);
      return response.status == "success"
        ? res.status(httpRespondCode.OK).send({ data: response.message })
        : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    } catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }
  }
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async deleteEmp(req, res) {
    try {
      const response = await deleteEmployee(Employee, req.params.id);
      return response.status == "success"
        ? res.status(httpRespondCode.OK).send({ data: 204 })
        : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    } catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }
  }
}
module.exports = employeeController;
