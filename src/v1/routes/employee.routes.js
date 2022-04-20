const express = require("express");
const router = express.Router();
const { creat, getAll, getById, update, deleteEmp } = require("../controller/employee.controller");
router.post("/creat", creat);
router.get("/getall/:page?/:name?", getAll);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", deleteEmp);
module.exports = router;
