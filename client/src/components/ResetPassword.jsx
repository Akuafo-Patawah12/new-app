import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from "axios";

const ResetPassword =()=>{
    const {id} = useParams();    //getting the token and id from the URL
    const navigate= useNavigate()
    const [Password,setPassword]= React.useState("");
    axios.defaults.withCredentials=true
    const handSubmit = async(e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:5010/updatePassword/${id}`,{Password})
            .then(res=>{
                if(res.data.message==="Password Updated"){
                    alert('Password Updated')
                    navigate("/")
                }
            })
            .catch(err=> console.log('faulty api',err))
        }catch(e){ console.log(e)}
      } 
    return(
        <div className='bg-gray-200 w-full  mt-0 h-full grid place-items-center'>
       <div className='w-[300px] rounded-xl bg-white h-[300px] border-2 border-blue-400'>
        <form onSubmit={handSubmit}>
        <input type='password'
                   name='changePassword'
                   autoComplete='off'
                   placeholder='Enter email..'
                   onChange={(e)=>{setPassword(e.target.value)}}
                   title='Please enter your email'
                   required={true}
                   className='border-[1px]  border-stone-400 w-full h-[35px] pl-2'>

            </input>
            <button type="submit" className='bg-green-400 h-[35px] w-full'>Update Password</button>
            </form>
       </div>
       </div>
      
    )
}
export default ResetPassword;