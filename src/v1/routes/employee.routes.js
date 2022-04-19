const express = require("express");
const router = express.Router();
const { creat, getAll, getById } = require("../controller/employee.controller");
router.post("/creat", creat);
router.get("/getall/:page?/:name?", getAll);
router.get("/byID/:id", getById);
module.exports = router;
