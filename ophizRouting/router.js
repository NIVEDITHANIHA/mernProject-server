const express = require("express")

/* import Router--------- Create an object for router() class in the express module------------------------- */
const router = new express.Router()
const userController = require("../controller/userController")

router.post("/ophiztask/register", userController.ophiztaskRegister)
router.post("/ophiztask/login", userController.ophiztaskLogin)


module.exports = router