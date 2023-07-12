import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import FormHeading from './FormHeading';
import Alert from './Alert';


function ForgotPass() {

    const [alertMsg, setAlertMsg] = useState();

    const [otpStatus, setOTPStatus] = useState();

    document.title = 'NewsApp - Change Password';

    const{handleSubmit, register, formState: {errors}, reset} = useForm({
        mode: "onChange"
    });

    const navigate = useNavigate();

    const onSubmit = async(data)=>{
        const response = await fetch('http://localhost:11000/forgotpass/getotp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({forgotEmail: data.forgotEmail})
        })
        const json = await response.json();
        if(json.otpSuccess){
          localStorage.setItem('user', data.forgotEmail);
          setOTPStatus(true);
          setAlertMsg('Please check your mail for OTP.')
          setTimeout(()=>{
            navigate('/verifyotp')
          }, 4000)
        }else if(json.emailError){
          setOTPStatus(false);
          setAlertMsg('Wrong Email Entered. Please Try Again.');
        }
        reset();
    }
     
  return (
    <>
    {otpStatus === true && <Alert colorStatus='success' alertText={alertMsg}/>}
    {otpStatus === false && <Alert colorStatus='danger' alertText={alertMsg}/>}
    <FormHeading/>
    <div className='forgot-pass-container'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='forgot-pass-form'>
        <h1 className='reset-password-heading'>Reset Your Password</h1>
        <input type="email" {...register('forgotEmail', {required: "Email Required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Enter Valid Email"}})} placeholder="Enter Your Email" className='forgot-email-input'/><br/>
        {errors.forgotEmail && <div className='forgot-email-span text-start'><span className='text-red-900 text-sm'>*{errors.forgotEmail.message}</span></div>}
        </div>
       <hr/>
    <div className='forgot-pass-links'>
    <button type='submit' className='get-otp-button'>Get OTP</button><br />
    <div className='back-to-login-div'>
    <span>Already Know Your Password?</span>
    <Link to = "/signin" className='back-to-login-link'>Sign in from here!!</Link>
    </div>
    </div> 
    </form>
    </div>
    </>
  )
}

export default ForgotPass;
