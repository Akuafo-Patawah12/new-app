const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')
const data= require('../DatabaseModels/User')

//Login user
 async function login(req,res){
    const {email,password }= req.body.formData
    try{
        const email_Exist= await data.findOne({email:email}); //finding email from the database

        let Encrypted_Password= email_Exist.password

         const password_Is_Correct= await bcrypt.compare(password, Encrypted_Password);

         const protected= email_Exist.auth

         const token= jwt.sign({id: email_Exist._id}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '6d',   
        })
        if(email_Exist){ //checking if the email the user login with exist in the database
            if(password_Is_Correct && protected==="student" ){
                // Set the refresh token as a cookie and send it to the browser after login
                   res.cookie('refreshToken', token, {
                        httpOnly: true,   // Ensures that the cookie is only accessible via HTTP(S) requests
                        path: '/',        // Specifies the path for which the cookie is valid
                        secure: true,          // Indicates that the cookie should only be sent over HTTPS
                        sameSite: 'none',      // Specifies same-site cookie attribute to prevent cross-site request forgery
                        maxAge: 7 * 24 * 60 * 60 * 1000    // Sets the expiration time of the cookie (7 days in milliseconds)
    });   
                    res.json('Logged in Student'); //send a response from server to client if email & password exist 
            }else if(password_Is_Correct && protected==="Admin"){
                res.cookie('refreshToken',token ,{ //Sending refresh cookies to the browser after login
                    httpOnly:true,
                    path:'/',
                    secure:true,
                    sameSite: 'none',
                    maxAge: 7 * 24 * 60 * 60 * 1000
                });  
                    res.json("Logged in Admin")
            }else if(!password_Is_Correct){
                res.json('invalid password'); 
            }
        }else{
            res.json("invalid email")
        }
    }catch(err){
       res.status(404).json(err) //Console 404 error message if server crashes
    }}
// Register a new user 
const SignUp =async(req,res)=>{
    const {firstname,lastname,email,Index_Number,Programme,auth,password }= req.body.formData
    const salt=  bcrypt.genSaltSync(10)
    try{
        const encryptedPassword= await bcrypt.hash(password,salt)
        const emailExist= await data.findOne({email:email})  // Check if the email already exists in the database
        if(emailExist){ // If the email already exists, return a response indicating its existence
              return res.json({message:'exist'});
        }
        // If the email doesn't exist, insert the new user data into the database
            await data.insertMany({
                 firstname,
                 lastname,
                 email,
                 Index_Number,
                 Programme,
                 password: encryptedPassword,
                 auth,              
            });
           return res.json({message:'not exist'}); 
    }catch(err){
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
}
    
    //logging out user
    async function logout (req,res){
        res.cookie("refreshToken","",{maxAge:1});
            res.json("Success")
       }


       async function sessionLogout(req, res) {
        // Retrieve the refresh token from the request cookies
        const refreshToken = req.cookies.refreshToken;
    
        try {
            // Check if the refresh token is missing
            if (!refreshToken) {
                // If verification succeeds, delete the refresh token from cookies
                res.clearCookie('refreshToken').json({ message: 'Token Expired' }); 
            }
        } catch (err) {
            // Handle token verification error
            console.log('Error verifying refresh token:', err);
            res.status(401).json({ error: 'Failed to logout' });
        }
    };
module.exports= {
   login,SignUp,logout,sessionLogout
};
