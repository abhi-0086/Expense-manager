const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//create router object
const router = express.Router();

//routes
//POST method || Add transaction
router.post("/add-transaction", addTransaction);

//POST method || Edit transaction
router.post("/edit-transaction", editTransaction);

//POST method || Delete transaction
router.post("/delete-transaction", deleteTransaction);

//POST method || Get all transaction
router.post("/get-transaction", getAllTransaction);

//export router
module.exports = router;
