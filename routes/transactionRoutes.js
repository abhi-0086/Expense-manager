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

//GET method || Get all transaction
router.get("/get-transactio", getAllTransaction);

//export router
module.exports = router;
