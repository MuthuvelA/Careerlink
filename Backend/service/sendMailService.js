const nodemailer = require("nodemailer");
require("dotenv").config();

async function Mail(reciverID,senderID,subject,body){
   try {
     body = "JOB SEEKER mail ID : "+senderID+"\n"+body;
    const maidFormate = {
        from:{
          name:"Job Portal",
          address:process.env.USER
        },
        to: reciverID,
        subject: subject,
        text: body,
    };
    var transport = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD
        }
      });

        const info =  await transport.sendMail(maidFormate);
        console.log(info.accepted);
        return;
    
   } catch (error) {
    throw error;
   }
}

module.exports = Mail;