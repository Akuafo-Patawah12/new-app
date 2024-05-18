import React, { useState,useEffect } from 'react'
import ProfileInfo from './ProfileInfo';
import { FaPencilAlt } from 'react-icons/fa';
import axios from 'axios'


const Profile = () => {
  const info=[
    {
      id:"1",
      name:"hi",
      info:"John",
    },
    {
      id:"2",
      name:"hello",
      info:"Andre",
    }
  ]
  const [dp,setDp]= useState("")
  const formData= new FormData()
  formData.append("image",dp)
   const update=async(e)=>{
    e.preventDefault()
    try{
     await axios.put('http://localhost:5010/profileUpdate',formData)
    }catch(err){
      console.log(err)
  }
 }
  const [image,setImg]= useState();
  const [isDisplay,setDisplay] = useState(false);
  
  const changeImage=(e)=>{
      setImg(URL.createObjectURL(e.target.files[0]));
      setDp(e.target.files[0]);
  }
  const storedNames = localStorage.getItem('profile'); 
  const [ profile,setProfile ]= useState(storedNames.data||"");
  axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get('http://localhost:5010/getProfile')
    .then(res=> {
      const url= res.data
        setProfile(url);
          localStorage.setItem('profile', url);
    })
    .catch(err=> console.log(err))
  },[])
  
 
  const newInfo=info.map((item,index)=>(
    <ProfileInfo  key={index} name={item.name}  info={item.info}/>
  ))
  return (
    <div className='mt-[60px]'>
      <h3 className='w- [100px] mx-auto bg-gray-300 grid place-items-center border-b-2 border-blue-300 w-[100px] mt-6 font-bold text-lg'>Profile</h3>
      <div className='w-4/5 border-[1px] p-2 mt-1 border-stone-800 mx-auto'>
      <div className='w-[100px] h-[100px] bg-gray-300 rounded-[50%]'>
        <img src={profile} accept="png,jpg,jpeg" alt="profile" className="w-full h-full object-fit rounded-[50%]"></img>
      </div>
     
      <button onClick={()=> setDisplay(!isDisplay)} className='bg-blue-400 p-1'> {isDisplay ? <h3>Close</h3> :<h3 className='flex gap-1 items-center justify-center'><FaPencilAlt /> Edit Pic</h3>}</button>
    </div>
    <div className='flex gap-2 mt-5 p-2 bg-yellow-200 rounded-lg w-4/5 h-[500px] mx-auto'>
      {newInfo}
    </div>
    {isDisplay ? <div className='bg-white shadow-xl border-2 border-stone-500 border-dashed rounded-xl h-[200px] w-[300px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <div className='w-[100px] h-[100px] bg-gray-300 border-2 border-dashed border-stone-500 rounded-[50%]'>
        <img src={image} accept="png,jpg,jpeg" alt="profile" className="w-full h-full object-fit rounded-[50%]"></img>
        <form onSubmit={update}>
        <label className='p-2 bg-blue-200'>
          
      <input type='file' name="image" className='hidden' onChange={changeImage}></input>
      Edit Pic</label>
      <button type='submit' className='p-2 bg-blue-200 mt-2'>Post</button>
      </form>
      </div>
      </div> : ""}
    </div>
  )
}
export default Profile;