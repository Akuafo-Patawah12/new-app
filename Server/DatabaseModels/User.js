const mongoose=require('mongoose')
const studentSchema= new mongoose.Schema({
    firstname: {
          type:String,
          required:[true,"Name is required"],
          trim:true,
          
    },
    lastname: {
        type:String,
        required:[true,"Name is required"],
        trim:true,   
    },
    email: {
            type:String,
            required:true,
            trim:true,
            unique:true
    }, 
    password:{   
              type:String,
              trim:true,
              required:true,
              minlength:[8,"Password must be more than 8 characters"]
     },
    auth:{
        type:String,
        enum:['student','Admin'],
        default:"student"
    },
    Index_Number:{
        type:String,
        trim:true,
        default:null
    },
    Programme:{
      type:String,
      trim:true,
      default:null
    },
    profile:{
        type:String,
        default:"med.jpg"
    },
    timeStamp:{
                type:Date,
                default:Date.now()
            }
})
const studentModel= mongoose.model("user",studentSchema)
module.exports= studentModel
