const db = require('../config/db');
const postModel = require('../model/jobPostModel');

class jobService{
    static async addJob(title,domain,salary,company,discription,vacancy,deadline,category,email,name){
        try {
            const jobModel = db.model(domain,postModel);
            console.log(title,salary,company,discription,vacancy,deadline,category,email,name);
            const newJob = new jobModel({title,salary,company,discription,vacancy,deadline,category,email,name});
            return await newJob.save();
            
        } catch (error) {
            throw error
        }
    }

    static async getJob(domain){
        try {
            const collection  = db.collection(domain+"s");
            const jobs = await collection.find();
            const jobsArr = await jobs.toArray();
            return jobsArr;
            
        } catch (error) {
            throw error;
        }
    }
}


module.exports = jobService;