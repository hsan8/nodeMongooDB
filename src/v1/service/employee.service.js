class employeeController {
  static async newEmployee(emp) {
    try {
      const result = await emp.save();
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  static async getAllEmployee(emp) {
    try {
      const result = await emp.find({});
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  static async getEmployeeById(emp, id) {
    try {
      const result = await emp.find({ _id: id });
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
}
module.exports = employeeController;
