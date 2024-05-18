const express=require('express')
const router= express.Router()
const mailer= require("./NodeMailer")
const{login,SignUp,logout,sessionLogout}= require('./Auth_folder/Authentication')
const {profileUpdate, upload}= require('./Auth_folder/UpdateRoutes')
const {getProfile,getUser,getInitials,getPersonalResult}= require('./Auth_folder/UserProfileRoutes')
const {postResult,findAllResult,filter,findByProgramme,Delete,Delete1,updateById}= require("./ResultRoutes/ResultRoutesData")

router.post("/",login) //Post Request
router.post("/SignUp",SignUp)
router.post("/postResult",postResult)
router.post("/forgetPassword", mailer)
router.get("/logout",logout)      // Get Request
router.get('/getProfile', getProfile)
router.get('/getUser', getUser)
router.get("/getInitials", getInitials)
router.get("/findAllResult", findAllResult)
router.get("/filterByName",filter)
router.get("/findByProgramme", findByProgramme)
router.get("/getPersonalResult",getPersonalResult)
router.get("/sessionLogout",sessionLogout)
router.put("/updateById/:id", updateById)         // Update request
router.put("/profileUpdate",upload,profileUpdate)
router.delete("/api/data/:id",Delete)           // Delete request
router.delete("/api/data1/:id",Delete1)


module.exports= router