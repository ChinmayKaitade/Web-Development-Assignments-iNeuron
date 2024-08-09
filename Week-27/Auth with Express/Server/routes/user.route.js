const express = require("express");
const { userSignUp, userLogin, getUserDetails } = require("../controller/user.controller");
const { signupValidator } = require("../middleware/signup.validator");
const { loginValidator } = require("../middleware/login.validator");
const { authenticateUser } = require("../middleware/authenticateUser.js");


const userRoute = express.Router();


userRoute.post("/signup",signupValidator,userSignUp);

userRoute.post("/login",loginValidator,userLogin);

userRoute.get("/",authenticateUser,getUserDetails)  


module.exports ={
    userRoute
}