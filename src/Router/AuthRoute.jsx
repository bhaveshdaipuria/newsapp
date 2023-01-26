import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

function AuthRoute(){

  return (
    <Routes>
    <Route path='/signin' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    </Routes> 
  )
}

export default AuthRoute;
