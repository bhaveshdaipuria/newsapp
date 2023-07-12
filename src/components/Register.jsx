import React from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './Alert';
import FormHeading from './FormHeading';

function Register() {

  if(document.body.classList.contains('bg-dark')){
    document.body.classList.remove('bg-dark')
  }else if(document.body.classList.contains('bg-light')){
    document.body.classList.remove('bg-light')
  }

 const{handleSubmit, register, formState: {errors}, reset} = useForm({
  mode: "onChange"
 });

 document.title = 'News - Register';
 document.body.style.backgroundColor = 'white';

 let navigate = useNavigate();

 const[registerStatus, setRegisterStatus] = useState();


const onSubmit = async(data)=>{
  if(data.password === data.confirmPass){
    const response = await fetch('http://localhost:11000/auth/createuser', {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name: data.name, email: data.email, password: data.password})
  })
  const json = await response.json();
  if(json.success){
    setRegisterStatus(true);
    setTimeout(()=>{
      navigate('/signin');
    }, 2000)
   }
  }else{
    alert('Password Not Confirmed');
  }
  reset();
}


  return (
    <>
    {registerStatus === true && <Alert colorStatus='success' alertText='Registration Successful!!!'></Alert>}
    {registerStatus === false && <Alert colorStatus='danger' alertText='This account already exists.'></Alert>}
    <FormHeading/>
    <div className='registerForm'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='registerContainer'>

    <div className='registerHead'>
    <h1 className='signUpHeading'>Sign up</h1>
    </div>

    <input type="text" {...register('name', {required: "Name Required", minLength: {value: 3, message: "Enter Valid Name"}, pattern: {value: /[A-Za-z]/, message: "Enter Valid Name"}})} placeholder="Enter Name" className='registerInputs' disabled={registerStatus}/><br/>
    {errors.name && <div className='registerSpan text-red-900 text-sm'>*{errors.name.message}</div>}

    <input type="email" {...register('email', {required: "Email Required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Enter Valid Email"}})} placeholder="Enter email" className='registerInputs' disabled={registerStatus}/><br/>
    {errors.email && <div className='registerSpan text-red-900 text-sm'>*{errors.email.message}</div>}

    <input type="password" {...register('password', {required: "Password Required", pattern: {value: /[A-Z]/, message: "Password should contain atleast 1 capital letter"}, minLength: {value: 5, message: "Password should contain atleast 5 characters"}})} placeholder="Set Password" className='registerInputs' disabled={registerStatus}/><br/>
    {errors.password && <div className='registerSpan text-red-900 text-sm'>*{errors.password.message}</div>}

    <input type="password" {...register('confirmPass', {required: "Confirm Your Password"})} placeholder="Confirm Password" className='registerInputs' disabled={registerStatus}/><br/>
    {errors.confirmPass && <div className='registerSpan text-red-900 text-sm'>*{errors.confirmPass.message}</div>}
    </div>

    <hr />

    <div className='registerLinks'>
    <button type='submit' className='registerSubmit'>Register</button>
    <div className='registerDiv_Login'>
    <span>Already Signed Up?</span>
    <Link to ='/signin' className='linkLogin'>Sign in from here</Link>
    </div>
    </div> 

    </form>
    </div>
    </>
  )
}

export default Register;