const sendMailService = require("../service/sendMailService");

exports.sendMail = async(req,res)=>{
    try {
        const {posterMail,seekerMail,subject,body} = req.body;
        const result = await sendMailService(posterMail,seekerMail,subject,body);
       res.json({status:true});
        
    } catch (error) {
        res.json({status:true});
    }
}