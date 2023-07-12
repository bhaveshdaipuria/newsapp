const express = require('express');
const OTP = require('../models/OTP');
const User = require('../models/User');
const { body, validationResult} = require('express-validator');
const router = express.Router();
const nodemailer = require('nodemailer');

function expireOTP(setEmail){
    setTimeout(async()=>{
        await OTP.findOneAndDelete(setEmail)
     }, 300000)
}

function sendOTP(senderMail, setPass, clientMail, valueOTP){
    const transport = nodemailer.createTransport({
        service:'gmail',
         auth: {
                   user: senderMail,
                   pass: setPass
              }
         });
        const mailOptions = {
              from: senderMail, 
              to: clientMail,
              subject: 'OTP for changing password', 
              text: `Your generated OTP is ${valueOTP}. It will expire in 5 minutes`
          }
        transport.sendMail(mailOptions);
}

router.post('/getotp', [
    body('forgotEmail', 'Enter a valid email').isEmail()
], async(req, res)=>{
    try {
        let success = false;
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()})
        }

    const {forgotEmail} = req.body;
    let user = await User.findOne({email: forgotEmail});

    if(user){
        success = true;
        const otp = Math.floor(Math.random() * 9000 + 1000);
        let generatedOTP = await OTP.findOne({user: user.email});
        sendOTP(process.env.EMAIL_ID, process.env.EMAIL_PASS, forgotEmail, otp);
    if(generatedOTP){
        await OTP.findOneAndReplace({user: user.email}, {user: forgotEmail, otp: otp});
        expireOTP({user: forgotEmail});
    }else{
        await OTP.create({user: forgotEmail, otp: otp});
        expireOTP({user: forgotEmail});
      }
     res.json({success, otpSuccess: "OTP has been generated successfully"})

    }else{
        success = false
        res.status(400).json({success,  emailError: "Please  enter the correct email id"})
      }
    } catch (error) {
        console.error(error);
    }
})

router.post('/verifyotp', [
    body('verifyOTP', 'Enter valid OTP').isNumeric()
], async(req, res)=>{
    try {
    let success = false;

    const {verifyOTP, verifyEmail} = req.body;
    const OTPUser = await OTP.find({user: verifyEmail})
    if(verifyOTP === OTPUser.otp){
        success = true;
        res.json({success, verifySuccess: 'Correct OTP entered. Please set a new password'})
        await OTP.deleteOne({user: verifyEmail})
    }else{
        success = false
        res.status(401)({success, verifyFailure: 'Wrong OTP Entered. Please Try Again'})
    }
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;