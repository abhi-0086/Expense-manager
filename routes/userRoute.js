const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//create router object
const router = express.Router();

//routes
//method = POST || login route
router.post("/login", loginController);

//method = POST || register route
router.post("/register", registerController);

//export router
module.exports = router;
