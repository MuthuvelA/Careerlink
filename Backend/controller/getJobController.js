const jobService = require("../service/jobService");

exports.getJob = async(req,res)=>{
    try {
        const {domain} = req.body;
        var obj = [];
        for(let i=0;i<domain.length;i++){
            const result = await jobService.getJob(domain[i]);
            if(result.length!==0){
                obj = [...obj,...result];
            }
        }
        console.log(obj);
        if(obj.length===0){
            res.json({status:false,message:"Sorry No jobs for the domain, Try after some days....!"});
        }else{
            res.json({status:true,message:obj});
        }
       
    } catch (error) {
        res.json({status:false,message:"connection failed...!"});
    }
}