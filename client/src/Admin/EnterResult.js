import React,{useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const EnterResult = () => {
    const[formData,setFormData]= useState({
        name:"",
        Exams_Scores:"",
        IA_Scores: "",
        level:"",
        Semester:"",
        Programme:""
    });
    axios.defaults.withCredentials=true
    const handSubmit=async(e)=>{
        e.preventDefault()
      try{
        await axios.post("http://localhost:5010/postResult",{formData})
        .then(res=>{
            if(res.data==="Entry successful"){
                alert("Entered SuccessFully")
            }
        }).catch(err=> console.log(err))
      }catch(err){
        console.log(err)
      }
    }
  return (
    <div className='mt-[70px] h-[500px]  flex item-center justify-center flex-col'>
        <form method="POST" onSubmit={handSubmit} className="w-[300px] mx-auto">
      <div className="flex flex-col gap-2">  
        <input 
           type="text"
           placeholder="Name"
           onChange={(e)=>setFormData({
            ...formData,
            name: e.target.value,
           })}
           className="border-2 border-stone-300 h-[40px]"

         />
         <input
          type="number"
          placeholder="Exams Scores"
           className="border-2 border-stone-300 h-[40px]"
           min={0}
           max={60}
           onChange={(e)=>setFormData({
            ...formData,
            Exams_Scores: e.target.value,

           })}
         />
          <input
             type="number"
             placeholder="IA Scores"
             className="border-2 border-stone-300 h-[40px]"
             min={0}
             max={40}
             onChange={(e)=>setFormData({
            ...formData,
            IA_Scores: e.target.value,
           })}
         />
         <fieldset className="border-[1px] border-stone-400 py-4">
            <legend>Level</legend>
          <input 
              type='radio'
               name='auth'
               placeholder='Username'
               autoComplete='off'
               onChange={()=>setFormData({...formData,level:"L 100"})} 
               required={true}
               className='border-[1px]  border-stone-400  pl-2'>
        </input>
       
        <label for="auth">Level 100</label>
        <input 
              type='radio'
               name='auth'
               onChange={()=>setFormData({...formData,level:"L 200"})} 
               required={true}
               className=' border-[1px]  border-stone-400  pl-2'>
        </input>
        <label  for="auth">Level 200</label>
        <input 
              type='radio'
               name='auth'
               onChange={()=>setFormData({...formData,level:"L 300"})} 
               required={true}
               className='border-[1px]  border-stone-400  pl-2'>
        </input>
       
        <label for="auth">Level 300</label>
        <input 
              type='radio'
               name='auth'
               onChange={()=>setFormData({...formData,level:"L 400"})} 
               required={true}
               className=' border-[1px]  border-stone-400  pl-2'>
        </input>
        <label  for="auth">Level 400</label>
        </fieldset>
       <fieldset className="border-[1px] border-stone-400 py-4">
        <legend>Semesters</legend>
        <input 
              type='radio'
               name='Sem'
               onChange={()=>setFormData({...formData,Semester:"1st Sem"})} 
               required={true}
               className='border-[1px]  border-stone-400  pl-2'>
        </input>
       
        <label for="auth">First Semester</label>
        <input 
              type='radio'
               name='Sem'
               onChange={()=>setFormData({...formData,Semester:"2nd Sem"})} 
               required={true}
               className=' border-[1px]  border-stone-400  pl-2'>
        </input>
        <label  for="auth">Second Semester</label>
        </fieldset>
        <select className="h-[40px] border-2" onChange={(e) => setFormData({ ...formData, Programme: e.target.value })}>
           <option value={null}>Choose Programme</option>
           <option value="Info Tech">Info Tech</option>
           <option value="Acc & F">Acc & F</option>
           <option value="Bus Admin">Bus Admin</option>
           <option value="Economics">Economics</option>
           <option value="P & R">P & R</option>
        </select>
          </div>
          <button type="submit" className="bg-cyan-300 font-bold w-1/2">SUBMIT RESULT</button>
          <button className="w-1/2">
          <Link to="/FindResultData" className="block bg-red-300 font-bold w-full h-full">FIND ENTRIES</Link>
          </button>
    </form>
   
  </div>
  )
}
export default EnterResult;