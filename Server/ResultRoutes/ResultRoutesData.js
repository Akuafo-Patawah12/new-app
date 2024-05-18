const ResultData= require("../DatabaseModels/StudentResults")
const Data= require("../DatabaseModels/User")

const postResult=async(req,res)=>{
    const{name,Exams_Scores,IA_Scores,level,Programme,Semester} = req.body.formData
    const data= new ResultData({
        name:name,
        Exams_Scores: parseInt(Exams_Scores),
        IA_Scores:  parseInt(IA_Scores),
        level:level,
        Programme:Programme,
        Semester:Semester
    })
    try{ 
        await data.save()
       return res.json("Entry successful")
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
const findAllResult=async(req,res)=>{
    try{
       const data= await ResultData.find({}).sort({name:1 })
       res.json(data)
    }catch(err){
        console.log(err) 
        res.status(404).json(err)
    }
}

const filter= async (req, res) => {
    try {
      const info = req.query.filter;
      const name = info?.toLowerCase();
      const Query = {
        $or: [
          { name: { $regex: new RegExp('^' + name + '$', 'i') }},
          { Programme: { $regex: new RegExp('^' + name + '$', 'i') } },
          { level: { $regex: new RegExp('^' + name + '$', 'i') } },
          { Semester: { $regex: new RegExp('^' + name + '$', 'i') } },
          { Course: { $regex: new RegExp('^' + name + '$', 'i') } }    
        ]
      };
      const filteredData=   await ResultData.find((Query)).sort({Grade:1});
      res.json(filteredData);
    } catch (error) {
      console.log('Error filtering data:', error);
      res.status(500).json({ error: 'An error occurred while filtering data' });
    }
}

async function findByProgramme(req,res){
     const Programme = req.query.name
    try{
       const data= await ResultData.find({Programme:Programme}).sort({name:1 })
       res.json(data)
    }catch(err){
        console.log(err) 
        res.status(404).json(err)
    }
}

 async function Delete (req, res){
    const id = req.params.id;
    try {
        await ResultData.findByIdAndDelete(id);
        res.json("Deleted")
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
async function Delete1 (req, res){
  const id = req.params.id;
  try {
      await Data.findByIdAndDelete(id);
      res.json("Deleted")
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
}
 async function updateById (req, res){
    try {
      const id = req.params.id; // Extract the ID from the request parameters
      const {name,Exams_Scores,IA_Scores} = req.body.formData; // Extract the update data from the request body
      let totalScore = IA_Scores + Exams_Scores;
      const total = parseInt(totalScore)
      let Grade
      if (total >= 80) {
        Grade = 'A';
        } else if(total >=75){
        Grade = 'B+';
        } else if(total >=65){
          Grade = 'B-';
        } else if(total >=60){
          Grade = 'B';
        } else if(total >=55){
          Grade = 'C';
        } else if(total >=50){
          Grade = 'C-';
        } else if(total >=40){
          Grade = 'D';
        } else {
            Grade = 'F';
        }
        
      // Find the document by ID and update it
      const updatedDocument = await ResultData.findByIdAndUpdate(id,{name:name,Exams_Scores: parseInt(Exams_Scores),IA_Scores:  parseInt(IA_Scores), Grade:Grade}, { new: true });
      
      // Check if the document was found and updated successfully
      if (!updatedDocument) {
        return res.status(404).json({ error: 'Document not found' });
      }
      return res.json("Update")
    } catch (error) {
      console.log('Error updating document:', error);
      res.status(500).json({ error: 'An error occurred while updating the document' });
    }
  };

module.exports={
    postResult,
    findAllResult,
    filter,
    findByProgramme,
    Delete,
    Delete1,
    updateById

}