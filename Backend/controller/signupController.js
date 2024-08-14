const userService = require('../service/signupService');

 exports.signup = async(req,res) =>{
    try{
        const {email,password,username} = req.body;
        console.log("SIGNUP : "+email,password);
            const sucessRes = await userService.userRegistration(username,email,password);
            console.log("SIGNUP : "+email,password);
            res.json({status:true,message:"successfully registered....!"});
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}

