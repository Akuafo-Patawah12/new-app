import React  from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {  LoginOutlined } from '@ant-design/icons';

const Login = () => {
  const [formData,setformData]= useState({email:"",password:""})
  const navigate= useNavigate();   
  axios.defaults.withCredentials=true
  const handSubmit = async(e)=>{
    e.preventDefault();
    try{
        await axios.post("http://localhost:5010/",{formData}
        ).then(res=>{
          switch (res.data){
              case "Logged in Student":
              navigate('/Body');
              alert("Login Student");
              break;
              case "Logged in Admin":
                navigate('/Admin');
                alert("Login Admin");
                break;
              case "invalid password":
              alert('Invalid password ');
              break; 
              default:
                break;
          } 
        })
        .catch(err=>{
          alert('Your email does not exist');   
          console.log(err)
        })
    }catch(e){ console.log(e)}
}


  return (
    <div className='bg-gray-100 w-full  mt-0 h-full grid place-items-center'>
       <div className='relative   w-[300px] rounded-sm bg-white h-[350px] border-[1px] border-stone-250 shadow-2xl '>
        <form method="POST" onSubmit={handSubmit} className='mb-4 grid gap-2 w-4/5 place-items-center mt-4  mx-auto'>
          <h1 className='perspect relative bg-blue-400 top-[-10px] font-bold mx-auto w-[100px] grid place-items-center text-lg'>
            <p className='perspect-child absolute p-2 bg-yellow-100'>Log In</p></h1>
          <label className='justify-self-start font-bold' for="email">Email</label>
            <input type='email'
                   name='email'
                   autoComplete='off'
                   placeholder='Enter email..'
                   title='Please enter your email'
                   onChange={(e)=>setformData({
                    ...formData,
                    email: e.target.value,
                   })}
                   required={true}
                   className='input border-[1px]  border-stone-400 w-full h-[40px] pl-2'>
            </input>
            <label className='font-bold justify-self-start' for="password">Password</label>
            <input 
                   type='password'
                   name='password'
                   autoComplete='off'
                   placeholder='Password'
                   title='Please enter your password'
                   onChange={(e)=>setformData({
                    ...formData,
                    password: e.target.value,
                  })}
                   required={true}
                   className='input border-[1px]  border-stone-400 w-full h-[40px] pl-2'></input>
              <Link to="/ForgetPassword" className='text-red-400 justify-self-start underline'>Forget Password?</Link>    
            <button type='submit'  className='bg-green-400 h-[40px] w-full'><LoginOutlined/>  Login</button>
            
            <Link to="/SignUp" className=' button w-full border-2 h-[40px] border-zinc-400 grid place-items-center'>
              <button> Sign Up</button>
            </Link>   
        </form>
        </div>   
    </div>
  )
}
export default Login;