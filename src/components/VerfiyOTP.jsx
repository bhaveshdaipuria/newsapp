import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from './Alert';
import FormHeading from './FormHeading';

function VerfiyOTP() {

  const [alertMsg, setAlertMsg] = useState();

  const [verifyStatus, setVerifyStatus] = useState();

  const{handleSubmit, register, formState: {errors}, reset} = useForm({
    mode: "onChange"
});

  const onSubmit = async(data)=>{
    const response = await fetch('http://localhost:11000/forgotpass/verifyotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({verifyOTP: data.VerfiyOTP, verifyEmail: localStorage.getItem('user')})
    })
    const json = await response.json();
    if(json.verifySuccess){
      setVerifyStatus(true);
      setAlertMsg('Correct OTP Entered. Now you can set your new password');
      localStorage.removeItem('user');
    }else{
      setVerifyStatus(false);
      setAlertMsg('Wrong OTP Entered. Please Try Again');
    }
    reset();
  }

  return (
  <>
  {verifyStatus === true && <Alert colorStatus='success' alertText={alertMsg}/>}
  {verifyStatus === false && <Alert colorStatus='danger' alertText={alertMsg}/>}
  <FormHeading/>
    <div className='verify-otp-container'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='verify-otp-form'>
        <input type="number" {...register('verifyOTP', {required: "OTP Required", pattern: {value: /\d{4}/, message: "Enter Valid OTP"}})} placeholder="Enter OTP" className='verify-otp-input'/><br/>
        {errors.verifyOTP && <div className='verify-otp-span text-start'><span className='text-red-900 text-sm'>*{errors.verifyOTP.message}</span></div>}
        </div>
       <hr/>
    <div className='verify-button-container'>
    <button type='submit' className='verify-otp-button'>Verify OTP</button><br />
    </div> 
    </form>
    </div>
  </>
  )
}

export default VerfiyOTP
