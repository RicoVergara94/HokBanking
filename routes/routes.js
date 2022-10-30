const express = require("express")
const router = express.Router();
const fs = require('fs');

const expensesRoutes = require('./expenses.js');
router.use(expensesRoutes);

module.exports = router;