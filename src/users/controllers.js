const User = require("./model");

async function registerUser(req,res) {
    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.status(201).send({ message: "Account succesfully created",
                                user: req.body.username})
    } catch (error) {
        console.log(error);
        res.status(501).send({message: error.message});
    }
}

async function login (req,res){
    try {
        console.log({message: "User successfully logged in",
                                user:req.body.username});
    } catch (error) {
        console.log(error);
        res.status(501).send({message: error.message});
    }
}

module.exports= {registerUser, login};