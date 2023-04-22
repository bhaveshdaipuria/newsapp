import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './Alert';
import { SIGN_IN } from '../reduxToolkit/signInStatus';
import { userName } from '../reduxToolkit/userStatus';

function Login(){

  let dispatch = useDispatch();

  if(document.body.classList.contains('bg-dark')){
    document.body.classList.remove('bg-dark');
  }else if(document.body.classList.contains('bg-light')){
    document.body.classList.remove('bg-light');
  }

  const{handleSubmit, register, formState: {errors}} = useForm({
   mode: "onChange"
  });

  let navigate = useNavigate();

  const[loginStatus, setLoginStatus] = useState();

  document.title = 'News - Login';
  document.body.style.backgroundColor = 'white'; 

  const onSubmit = (data) =>{
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
        if (userData.password === data.password){
          dispatch(SIGN_IN());
          dispatch(userName(userData.email));
          setLoginStatus(true);
          setTimeout(()=>{
            navigate(`/`);
          }, 2000)
        } else {
          setLoginStatus(false);
        }
      }else{
        alert('This account does not exist. Register first.');
      }
  }

  return (
    <>
    {(loginStatus === true) && <Alert colorStatus='success' loginText='Login Successful!!!'></Alert>}
    {(loginStatus === false) && <Alert colorStatus='danger' loginText='Wrong Password. Try Again.'></Alert>}
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