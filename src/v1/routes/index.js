module.exports = (app) => {
  const employeeRouter = require("./employee.routes");
  app.use("/employee", employeeRouter);
};
