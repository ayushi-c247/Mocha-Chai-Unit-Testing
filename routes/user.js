const express = require('express');
const { UserController } = require("../controller")
const router = express.Router()

router.get("/",  UserController.getAllUSer)
router.post("/signup", UserController.createUser)
router.post("/login",  UserController.login)
router.put("/:id", UserController.updateUser)
router.get('/:id', UserController.getUserDetails)



module.exports =router

