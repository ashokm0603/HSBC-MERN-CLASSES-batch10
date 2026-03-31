const express=require('express');
const router=express.Router()
const {register,login,getAllUsers,updateProfile}=require("../controller/userController")
router.post('/register',register);
router.post('/login',login);
router.get('/get-allusers',getAllUsers)
router.patch('/update-profile/:id',updateProfile)


module.exports= router;