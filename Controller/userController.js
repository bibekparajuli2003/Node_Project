const { users } = require("../model/")


exports.registerUser = async (req,res)=>{
    // console.log(req.body)
   await users.create(req.body)
   res.redirect("/register")

   
}
exports.loginUser = async(req,res)=>{
    await users.create(req.body)
    res.redirect("/")
}
