const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionController");

//create router object
const router = express.Router();

//routes
//POST method || Add transaction
router.post("/add-transaction", addTransaction);

//POST method || Get all transaction
router.post("/get-transaction", getAllTransaction);

//export router
module.exports = router;
