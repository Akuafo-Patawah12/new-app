const express= require('express')
const app= express()
const cors= require('cors')
app.use(express.json());
require('dotenv').config() 
const cookies= require('cookie-parser')
app.use(cookies())
const jwt= require('jsonwebtoken')
const data=require('./DatabaseModels/User')
const bcrypt= require('bcrypt')
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:['http://localhost:3000','http://localhost:3001'],  
    credentials: true,
    methods:["POST,GET,PUT,DELETE"]
}))

const Connection= require('./connection');
const router= require('./Router')

app.get("/filter", async (req, res) => {
    try {
      const info = req.query.filter;
      const name = info?.toLowerCase();
      const Query = {
        $or: [
          { firstname: { $regex: new RegExp('^' + name + '$', 'i') }},
          { lastname: { $regex: new RegExp('^' + name + '$', 'i') } } 
        ],
        auth:"Admin"
      };
      const filteredData=   await data.find(Query).sort({firstname:1}).exec();
      res.json(filteredData);
    } catch (error) {
      console.log('Error filtering data:', error);
      res.status(500).json({ error: 'An error occurred while filtering data' });
    }
});
app.get("/getAdmin",async(req,res)=>{
    try{
        const user= await data.find({auth:"Admin"})
        res.json(user)
    }catch(err){
        res.status(500).json(err)
    }  
})

app.put("/updatePassword/:id", async(req,res)=>{
     const {Password}=req.body
     const {id}= req.params
     try{
        const encryptedPassword= await bcrypt.hash(Password,10)
         const findPassword= await data.findByIdAndUpdate(id,{password:encryptedPassword},{new:true})
         if(findPassword){
            return res.json({message:"Password Updated"})
         }else {
            return res.status(404).json({ message: "User not found" });
        }
     }catch(err){
        console.log(err);
        res.status(500).json(err)
     }
})

app.get("/getProgramme", async (req, res) => {
    // Extract the refresh token from the cookies sent with the request
    const token = req.cookies.refreshToken;

    try {
        // Verify the refresh token to extract the user's ID
        const decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

        // Retrieve the user's information from the database using their ID
        const userInfo = await data.findById(decode.id);

        // Respond with the user's programme information
        res.json(userInfo.Programme);
    } catch (err) {
        // Log any errors that occur during the process
        console.error(err);

        // If an error occurs, send an internal server error response
        res.status(500).json({ message: "Internal Server Error" });
    }
});

   //Allowing user to set a new password with help of Gmail
    
        app.use('/', router)
        
    const start=async()=>{
    try{
        await Connection();
       app.listen(process.env.PORT,()=>{console.log(`Server running on port ${process.env.PORT}.... `)  
    })
    }catch(err){
    console.log(err)
    }
   }
   start() 