const express = require('express');
const User = require('../models/User');
const { body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5})
], async (req, res)=>{
    try {
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({success, error: 'Sorry a user with this email already exits'});
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
    }); 
    success = true;
    res.json({success, msg: "User created successfully"});
    } catch (error) {
        return res.status(500).send('Internet Server Error')
    }
});

//For login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async(req, res)=>{
    try {
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email, password} = req.body;
    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({success, error: "Please try to login with correct credentials"});
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
        return res.status(400).json({success, error: "Please try to login with correct credentials"});
    }
    success = true;
    res.json({success, user});
    } catch (error) {
        return res.status(500).send('Internet Server Error');
    }
})

module.exports = router