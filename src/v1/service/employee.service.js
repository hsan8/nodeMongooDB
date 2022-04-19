class employeeController {
  /**
   *
   * @param {Employee} emp
   * @returns
   */
  static async newEmployee(emp) {
    try {
      const result = await emp.save();
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  /**
   *
   * @param {Employee} emp
   * @param {Number} page
   * @param {String} name
   * @returns
   */
  static async getAllEmployee(emp, page, name) {
    try {
      let result;
      let limit = 3;
      if (!page && !name) {
        result = await emp.find({}).limit(limit);
      }
      if (!name) {
        const skip = (page - 1) * limit;
        result = await emp.find({}).skip(skip).limit(limit);
      }
      if (page && name) {
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
  /**
   *
   * @param {Employee} emp
   * @param {String} id
   * @returns
   */
  static async getEmployeeById(emp, id) {
    try {
      const result = await emp.find({ _id: id });
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  static async updateEmployeeDetails(emp, id, playload) {
    try {
      const result = await emp.findOneAndUpdate(id, playload);
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
}
module.exports = employeeController;
