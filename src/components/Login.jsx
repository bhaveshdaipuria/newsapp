import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './Alert';
import { userName } from '../reduxToolkit/userStatus';

function Login(){

  let dispatch = useDispatch();

  if(document.body.classList.contains('bg-dark')){
    document.body.classList.remove('bg-dark');
  }else if(document.body.classList.contains('bg-light')){
    document.body.classList.remove('bg-light');
  }

  const{handleSubmit, register, formState: {errors}, reset} = useForm({
   mode: "onChange"
  });

  let navigate = useNavigate();

  const[loginStatus, setLoginStatus] = useState();

  document.title = 'News - Login';
  document.body.style.backgroundColor = 'white'; 

  const onSubmit = async(data)=>{
    const response = await fetch('http://localhost:11000/auth/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: data.email, password: data.password})
    })
    const json = await response.json();
    if(json.success){
      setLoginStatus(true);
      dispatch(userName(json.user.name));
      setTimeout(()=>{
        navigate(`/${json.user.name}`);
      }, 2000);
    }else{
      setLoginStatus(false);
    }
      reset();
  }

  return (
    <>
    {(loginStatus === true) && <Alert colorStatus='success' loginText='Login Successful!!!'></Alert>}
    {(loginStatus === false) && <Alert colorStatus='danger' loginText='Invalid email or password. Please try to login with correct credentials.'></Alert>}
    <h1 className='appHeading'>NEWS APP</h1>
    <div className='loginForm'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='loginContainer'>

    <div className='loginHead'>
    <h1 className='signInHeading'>Sign in</h1>
    <h2>Stay Updated Everytime</h2>
    </div>

    <input type="email" {...register('email', {required: "Email Required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Enter Valid Email"}})} placeholder="Enter Your Email" className='loginInputs' disabled={loginStatus}/><br/>
    {errors.email && <div className='loginSpan text-start'><span className='text-red-900 text-sm'>*{errors.email.message}</span></div>}

    <input type="password" {...register('password', {required: "Password Required"})} placeholder="Enter Your Password" className='loginInputs' disabled={loginStatus}/><br/>
    {errors.password && <div className='loginSpan text-start'><span className='text-red-900 text-sm'>*{errors.password.message}</span></div>}
    </div>

    <hr />

    <div className='loginLinks'>
    <button type='submit' className='loginSubmit'>Sign in</button><br />
    <div className='linkDiv_Login'>
    <span>New to News App?</span>
    <Link to = "/signup" className='linkRegister'>Sign up from here!!</Link>
    </div>
    </div> 
    
    </form>
    </div>
    </>
  )
}

export default Login;