import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import News from '../components/News';
import PropTypes from 'prop-types';
import AuthRoute from './AuthRoute';
import Login from '../components/Login';
import ModeSwitch from '../components/ModeSwitch';
import { useSelector } from 'react-redux';

function AppRoute() {

  const signInValue = useSelector((state)=> state.signingIn.value);
  const userNameValue = useSelector((state)=>state.userName.value);

    News.defaultProps = {
        newsCountry: "in",
        newsCategory: "general",
        newsNumber: 12
      }
      
    News.propTypes = {
      newsNumber: PropTypes.number,
      newsCategory: PropTypes.string
    }

    const[modeTxt, setModeTxt] = useState('Enable Dark Mode');
    const[hColor, setHColor] = useState('text-black');
    const[badgeColor, setBadgeColor] = useState('bg-dark');
    const[bodyColor, setBodyColor] = useState('bg-light');
    const[mode, setMode] = useState('bg-light');
  
    const toggleMode = ()=>{
      if(mode === 'bg-light'){
        setMode('bg-dark');
        setModeTxt('Enable Light Mode');
        setHColor('text-white');
        setBadgeColor('bg-danger');
        setBodyColor('bg-dark');
      }else{
        setMode('bg-light');
        setModeTxt('Enable Dark Mode');
        setMode('bg-light');
        setHColor('text-black');
        setBadgeColor('bg-dark');
        setBodyColor('bg-light');
      }
    } 

    

  return (
    <Routes>
    <Route exact path='*' element={<AuthRoute/>}/>
    <Route path='/' element={!signInValue === true?<Login/>:<News key='general' newsCategory='general' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/general' element={<News key='general' newsCategory='general' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/sports' element={<News key='sports' newsCategory='sports' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/science' element={<News key='science' newsCategory='science' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/technology' element={<News key='technology'newsCategory='technology' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/health' element={<News key='health' newsCategory='health' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/business' element={<News key='business' newsCategory='business' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/politics' element={<News key='politics' newsCategory='politics' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
    <Route path='/news/entertainment' element={<News key='entertainment' newsCategory='entertainment' bodyColorProp={bodyColor} hColorProp={hColor} modeProp={mode} badgeColorProp={badgeColor} modeSwitchProp={<ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt}/>}/>}/>
   </Routes>
  )
}

export default AppRoute
