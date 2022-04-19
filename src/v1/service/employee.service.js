class employeeController {
  static async newEmployee(emp) {
    try {
      const result = await emp.save();
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  static async getAllEmployee(emp, page, name) {
    try {
      let result;
      let limit = 3;
      if (!page && !name) {
        console.log(1);
        result = await emp.find({}).limit(limit);
      }
      if (!name) {
        console.log(2);
        const skip = (page - 1) * limit;
        result = await emp.find({}).skip(skip).limit(limit);
      }
      if (page && name) {
        console.log(3);
        const skip = (page - 1) * limit;
        result = await emp
          .find({ FullName: new RegExp("^" + name + "$", "i") })
          .skip(skip)
          .limit(limit);
      }
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
  static async getEmployeeWithPagination(emp, page) {
    try {
      const result = await emp.find({ _id: id });
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
}
module.exports = employeeController;
