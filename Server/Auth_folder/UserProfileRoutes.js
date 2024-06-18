const jwt=require('jsonwebtoken')
const data=require('../DatabaseModels/User')
const ResultData= require("../DatabaseModels/StudentResults") 

//Getting current user profile picture from server to the application
const getProfile=async(req,res)=>{
    const {refreshToken}=req.cookies
    try{
        const decoded= jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,)
        const user= await data.findById(decoded.id)
        res.json(user.profile)
    }catch(err){
        res.status(500).json(err)
    }  
}
 
//sending user name from server to   the client side
const getUser = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    
    if (!decoded || !decoded.id) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const user = await data.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json( user.firstname);
  } catch (err) {
    console.error('Error verifying token or fetching user:', err);

    // Check for specific JWT errors
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }

    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // For other errors, return a 500 status
    res.status(500).json({ error: 'Internal server error' });
  }
};



const getInitials = async (req, res) => {
    // Extract the refresh token from the cookies sent with the request
    const { refreshToken } = req.cookies;

    try {
        // Verify the refresh token to extract the user's ID
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        // Find the user's information in the database based on the decoded ID
        const userInfo = await data.findById(decoded.id);

        // Extract the first character of the first name
        const store = userInfo.firstname && userInfo.firstname.length > 0 ? userInfo.firstname[0] : null;

        // Extract the first character of the last name
        const store2 = userInfo.lastname && userInfo.lastname.length > 0 ? userInfo.lastname[0] : "";

        // Concatenate the initials and send as a response
        res.json(store + store2);
    } catch (err) {
        // Log any errors that occur during the process
        console.log(err);

        // If an error occurs, send a 404 status code and error message as response
        res.status(404).json(err);
    }
}
async function getPersonalResult (req,res){
    // Extract semester and level from query parameters
    const { sem, level } = req.query.formData;
    // Retrieve the refresh token from cookies
   const refreshToken= req.cookies.refreshToken
   // Verify the refresh token to get user information
  
  try{
      const decoded= jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
       // Retrieve user information from the database  
      const info= await data.findOne({ _id: decoded.id })
      // Extract the student's name from user information
      const student_name= info.firstname
      
      // Query the result data based on student name, semester, and level
      const personal_Result= await ResultData.find({
       name: student_name,
       Semester:sem,
       level:level
     });
      return res.json(personal_Result)
  }catch(err){
     console.log('Error retrieving personal results:', err)
     res.status(404).json(err)
  }

}
module.exports= {
    getProfile,getUser,getInitials,getPersonalResult
}

    
