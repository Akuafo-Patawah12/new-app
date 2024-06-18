import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
 const [formData,setFormData]= useState({
  firstname:"",
  lastname:"",
  auth:"",
  email:"",
  Index_Number:"",
  Programme:"",
  password:""
 })
const navigate= useNavigate();
const handSubmit = async(e)=>{
    e.preventDefault()
    try{
      await Axios.post("http://localhost:5010/SignUp",{formData})
      .then(res=>{
        if(res.data.message==="exist") {
            alert('user already exist') 
        }else{
             alert('Sign up successfully')
            navigate('/Login')
        }

      })
      .catch(err=>{
        alert('wrong details')
        console.log(err)
      })
  }catch(e){ console.log(e)}  
}
  return (
    <div className=' bg-gray-100 w-full h-full flex items-center '>
         <form method="POST" onSubmit={handSubmit}>
           <div className='border-2 border-stone-600 bd-white mx-auto w-3/5 justify-center flex flex-col gap-2 py-3  lg:flex-row w-[40%] '>
            <div className="w-4/5 self-center lg:w-[45%]">
           <label className='justify-self-start font-bold' for="lastname">firstName</label>
           <input 
              type='text'
               name='firstname'
               placeholder='firstname'
               autoComplete='off'
               onChange={(e)=>setFormData({...formData,firstname: e.target.value})} 
               required={true}
               className='input border-[1px]  border-stone-400 w-full h-[40px] pl-2'>
        </input>
        <label className='justify-self-start font-bold' for="lastname">LastName</label>
      <input 
              type='text'
               name='lastname'
               placeholder='lastname'
               autoComplete='off'
               onChange={(e)=>setFormData({...formData,lastname: e.target.value})} 
               required={true}
               className='input border-[1px]  border-stone-400 w-full h-[40px] pl-2'>
        </input>
        <label className='justify-self-start font-bold' for="email">Email</label>
        <input 
              type='email'
               name='email'
               placeholder='Andrew@turbo.com'
               autoComplete='off'
               onChange={(e)=>setFormData({...formData,email: e.target.value})} 
               required={true}
               className='input border-[1px]  border-stone-400 w-full h-[40px] pl-2'>
        </input>
        <label className='justify-self-start font-bold' for="password">Password</label>
        <input 
              type='password' 
              autoComplete='off' 
              name='password' 
              placeholder='Password'
              onChange={(e)=>setFormData({...formData,password: e.target.value})} 
              required={true}
             className='input border-[1px] border-stone-400 w-full h-[40px] pl-2'>
              
        </input>
        <label for="Index">Index Number</label>
        <input 
              type='text'
               name='Index'
               placeholder='Index Number'
               autoComplete='off'
               onChange={(e)=>setFormData({...formData,Index_Number: e.target.value})} 
               required={false}
               className='input border-[1px]  border-stone-400 w-full h-[40px] pl-2'>
        </input>
        </div>
        <div className="w-[100%] flex flex-col gap-2 border-2 border-yellow-400 lg:w-[48%]">
        <div className="flex items-center gap-1">
        <input 
              type='radio'
               name='auth'
               placeholder='Username'
               autoComplete='off'
               onChange={()=>setFormData({...formData,auth:"student"})} 
               required={true}
               className='border-[1px]  border-stone-400  pl-2'>
        </input>
       
        <label for="auth">Student</label>
        <input 
              type='radio'
               name='auth'
               placeholder='Username'
               autoComplete='off'
               onChange={()=>setFormData({...formData,auth:"Admin"})} 
               required={true}
               className=' border-[1px]  border-stone-400  pl-2'>
        </input>
        <label  for="auth">Admin</label>
        </div>
        <select className="h-[40px] border-2" onChange={(e) => setFormData({ ...formData, Programme: e.target.value })}>
           <option value={null}>Choose Programme</option>
           <option value="Info Tech">Info Tech</option>
           <option value="Acc & F">Acc & F</option>
           <option value="Bus Admin">Bus Admin</option>
           <option value="Economics">Economics</option>
           <option value="P & R">P & R</option>
        </select>
            <Link to="/Login" className='text-red-400 justify-self-start underline'>Already Have An Account?</Link>
        
        <button type='submit' className='bg-blue-300 h-[40px] w-full'>Sign up</button>
           </div>
           </div>  
         </form>
       
      </div>

   
  )
}

export default SignUp;