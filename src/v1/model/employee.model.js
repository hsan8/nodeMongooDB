const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
  FullName: String,
  Title: String,
  PhoneNumber: Number,
  Email: String,
  Salary: Number,
  CivilID: Number,
  Address: { Street: String, HouseNumber: Number },
});

// Model
const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
