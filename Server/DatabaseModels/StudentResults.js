const mongoose=require('mongoose')
const ResultSchema= new mongoose.Schema({
    name:{
        type:String,
        default:null
    },
    Semester:{
       type:String,
       enum:["1st Sem","2nd Sem"],
       default:"1st Sem"
    },
    level:{
        type:String,
        enum:["L 100","L 200","L 300","L 400"],
        default:"L 100"
    },
    Course:{
        type:String,
        default:null
    },
    IA_Scores:{
        type: Number,
        min: 0, 
        max: 40, 
    },
    Exams_Scores:{
        type: Number,
        min: 0,
        max: 60, 
    },
    Programme:{
      type: String,
      required:true
  },
    Grade:{
        type:String,
        default:null
    },
    Total:{
      type:String,
      default:null
  }
   
})
ResultSchema.pre('save', function (next) {
    const totalScore = this.IA_Scores + this.Exams_Scores;
    this.Total=totalScore;
    if (totalScore >= 80) {
      this.Grade = 'A';
    } else if(totalScore >=75){
      this.Grade = 'B+';
    } else if(totalScore >=65){
        this.Grade = 'B-';
      } else if(totalScore >=60){
        this.Grade = 'B';
      } else if(totalScore >=55){
        this.Grade = 'C';
      } else if(totalScore >=50){
        this.Grade = 'C-';
      } else if(totalScore >=40){
        this.Grade = 'D';
      } else {
        this.Grade = 'F';
      }
    next();
  }); 
const ResultModel= mongoose.model("result",ResultSchema)
module.exports= ResultModel