const userModel = require('../model/userModel');
const db = require("../config/db");

class userService{
    static async userRegistration(username,email,password){
        try{
            const createUser = new userModel({username,email,password});
            return await createUser.save();
        }catch(err){
           throw err;
        }
    }
    
    static async userLogin(email){
        try {
            const collection = await db.collection("users");
            return await collection.findOne({"email":email});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userService;