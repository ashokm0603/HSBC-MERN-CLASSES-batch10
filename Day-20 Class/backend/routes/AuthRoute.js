const express = require("express");
const router = express.Router();
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");
const {
  register,
  login,
  refreshToken,
} = require("../controller/authController");


router.post('/register',register);
router.post("/login",login);
router.post("/refresh",refreshToken)

//protected route
router.get('/dashboard',verifyToken,(req, res)=>{
    res.json({msg:"welcome User dashboard"})
})

// Admin route 
router.get("/admin",verifyToken, authorizeRoles('admin'),(req, res)=>{
    res.json({msg:"welcome  admin"})
})

module.exports=router;