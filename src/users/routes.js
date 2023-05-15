const {Router} = require("express");
// This imports just the Router method from the express library
const userRouter = Router();
// This renames Router to be userRouter

const {registerUser, login} = require("./controllers");
const {hashThePassword, comparePasswords } = require ("../middleware/index")

userRouter.post("/users/register", hashThePassword, registerUser);
// Creates the end point /users/register for a HTTP POST request and causes it to run registerUser

userRouter.post("/users/login", comparePasswords, login)

module.exports = userRouter;