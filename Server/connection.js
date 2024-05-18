const mongoose=require('mongoose')
const Connection=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Students" ,{
        useNewUrlParser: true,
        useUnifiedTopology: false
    })
}
module.exports= Connection