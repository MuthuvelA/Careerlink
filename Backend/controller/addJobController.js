const jobService = require("../service/jobService");

exports.addJob = async(req,res)=>{
    try {
        const {title,domain,salary,company,description,vacancy,deadline,category,email,name} = req.body;
        await jobService.addJob(title,domain,salary,company,description,vacancy,deadline,category,email,name);
        res.json({status:true,message:"job added Sucessfully...!"});
        
    } catch (error) {
        res.json({status:false,message:error.message});   
    }
}