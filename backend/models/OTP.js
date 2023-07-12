const mongoose = require('mongoose');
const { Schema } = mongoose;

const OTPSchema = new Schema({
  user:{
    type: String,
    required: true
  },  
  otp:{
    type: Number,
    required: true
  }
});

const OTP = mongoose.model('UserOtpList', OTPSchema);
module.exports = OTP;