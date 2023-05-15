const {Router} = require("express");
// This imports just the Router method from the express library
const userRouter = Router();
// This renames Router to be userRouter

const {registerUser} = require("./controllers");

userRouter.post("/users/register", registerUser);
// Creates the end point /users/register for a HTTP POST request and causes it to run registerUser

module.exports = userRouter;