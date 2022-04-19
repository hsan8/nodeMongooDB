const express = require("express");
const router = express.Router();
const { creat, getAll, getById } = require("../controller/employee.controller");
router.post("/creat", creat);
router.get("/getall", getAll);
router.get("/:id", getById);
module.exports = router;
