const { json } = require('body-parser');
const userService = require('../service/signupService');

exports.login = async (req,res)=>{
    try {

        const {email,password} = req.body;
        const result = await userService.userLogin(email);
        if(result===null){
            res.json({status:false,message:"emailID is invalid..!"});
        }else{
            if(result.password===password){
                res.json({status:true,message:"login Sucessful..!",user:result.username});
            }else{
                res.json({status:false,message:"password not match",user:""});
            }
        }
        
    } catch (error) {
        res.json({status:false,message:error.message,user:""});
    }

}
