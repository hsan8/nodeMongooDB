const { newEmployee, getAllEmployee, getEmployeeById } = require("../service/employee.service");
const httpRespondCode = require("../Util/httpStatusCode.status");
const Employee = require("../model/employee.model");
class employeeController {
  static async creat(req, res) {
    try {
      const emp = new Employee({
        FullName: req.body.FullName,
        Title: req.body.Title,
        PhoneNumber: req.body.PhoneNumber,
        Email: req.body.Email,
        Salary: req.body.Salary,
        CivilID: req.body.CivilID,
        Address: { Street: req.body.Address.street, HouseNumber: req.body.Address.HouseNumber },
      });
      const response = await newEmployee(emp);
      return response.status == "success"
        ? res.status(httpRespondCode.OK).send({ data: response.message })
        : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    } catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }
  }
  static async getAll(req, res) {
    try {
      const response = await getAllEmployee(Employee);
      return response.status == "success"
        ? res.status(httpRespondCode.OK).send({ data: response.message })
        : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    } catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }
  }
  static async getById(req, res) {
    const response = await getEmployeeById(Employee, req.params.id);
    console.log(response);
    return response.status == "success"
      ? res.status(httpRespondCode.OK).send({ data: response.message })
      : res.status(httpRespondCode.BAD_REQUEST).send({ error: response.message });
    /*} catch (error) {
      return res.status(httpRespondCode.INTERNAL_ERROR_SERVER).send({ error: "error found during this request" });
    }*/
  }
}
module.exports = employeeController;
