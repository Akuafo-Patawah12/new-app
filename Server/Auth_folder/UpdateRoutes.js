const data=require('../DatabaseModels/User')
const jwt= require('jsonwebtoken')
const multer= require('multer')
//updating user profile picture


const Storage=multer.diskStorage({
   destination:"./public",
   filename:(req,file,cb)=>{
       cb(null,Date.now() + path.extname(file.originalname));
   }
})
const upload= multer({
   storage:Storage
}).single('image')

const profileUpdate=async(req,res)=>{
   const {refreshToken}=req.cookies  
   try{
       const decoded= jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET)  
       const id=decoded.id
       const updated= await data.findByIdAndUpdate(id,{ profile: req.file.filename },{ new: true })
       if (updated) {
           console.log( 'Profile updated successfully');
         } else {
           res.status(404).json({ message: 'User not found' });
         }
   }catch(err){
       res.status(404).json(err)
   } 
}
module.exports= {profileUpdate, upload}