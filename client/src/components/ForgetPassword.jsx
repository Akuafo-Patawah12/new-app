import React,{useState} from 'react'
import axios from 'axios';

const ForgetPassword = () => {
 //   const user={
  //      email:"",
  //      setEmail:function(email){
  //          this.email=email;
  //      }
  //  }  
  const[email,setMail]=useState("");
    axios.defaults.withCredentials=true
const handSubmit = async(e)=>{
  e.preventDefault();
 
  try{
      await axios.post("http://localhost:5010/forgetPassword",{email}
      ).then(res=>{
        switch (res.data) {
          case "valid email":
           alert('Sent you an email')
             break;
          case "invalid email":
            alert('Invalid email')
            break;
          default:

            break;
        } 
      })
      .catch(err=>{
        alert('404');
        console.log(err)
      })
  }catch(e){ console.log(e)}
}
  return (
    <div  className='bg-gray-200 w-full  mt-0 h-full grid place-items-center'>
        <div className='bg-gray-200 w-full  mt-0 h-full grid place-items-center'>
       <div className='w-[300px] rounded-xl bg-white h-[300px] border-2 border-blue-400 '>
        <form method="POST" onSubmit={handSubmit} className='mb-4 grid gap-2 w-4/5 place-items-center mt-4  mx-auto'>
          <h1 className='font-bold mx-auto w-[100px] grid place-items-center'>Log In</h1>
            <input type='email'
                   name='email'
                   autoComplete='off'
                   placeholder='Enter email..'
                   title='Please enter your email'
                   onChange={(e)=>setMail(e.target.value)}
                   required={true}
                   className='border-[1px]  border-stone-400 w-full h-[35px] pl-2'>

            </input>
            <button type="submit" className='flex gap-1 justify-center items-center bg-green-400 h-[35px] w-full'>
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.451 0.67201C23.5577 0.777343 23.65 0.893343 23.728 1.02001C23.906 1.31301 24 1.64801 24 1.99001V11.594C24 11.936 23.905 12.273 23.726 12.565C23.6221 12.7319 23.4929 12.8817 23.343 13.009C23.008 13.295 22.583 13.452 22.142 13.452H11.727C10.5712 15.4818 8.72642 17.0304 6.52702 17.817L6.39102 17.866L6.25602 17.814C4.43746 17.1151 2.87029 15.8868 1.75702 14.288C0.609684 12.6512 -0.00396211 10.6999 1.92513e-05 8.70101C-0.000192266 7.99488 0.0759163 7.29079 0.227019 6.60101L0.279019 6.36401L0.515019 6.30601C0.570353 6.29268 0.624353 6.27868 0.677019 6.26401C2.79605 5.70548 4.72168 4.57735 6.24502 3.00201L6.28502 2.95901L6.51702 2.72001V1.99001C6.51702 1.64701 6.61202 1.31001 6.79102 1.01801C6.86902 0.891343 6.96169 0.77601 7.06902 0.67201C7.38747 0.352904 7.81199 0.161816 8.26202 0.13501H22.256C22.7067 0.161334 23.1321 0.352459 23.451 0.67201ZM8.37602 1.01801C8.34269 1.01801 8.31002 1.01934 8.27802 1.02201H8.13602L8.15902 1.04301L14.974 7.07201C15.0535 7.14224 15.1559 7.181 15.262 7.181C15.3681 7.181 15.4705 7.14224 15.55 7.07201L22.365 1.04301L22.388 1.02201H22.242C22.2094 1.01907 22.1767 1.01774 22.144 1.01801H8.37602ZM7.47802 1.62301C7.43115 1.73973 7.40673 1.86424 7.40602 1.99001V3.57601C8.81665 4.84787 10.509 5.76673 12.344 6.25701L12.458 6.28601L12.515 6.30101L12.752 6.35901L12.803 6.59801C12.8423 6.78523 12.8757 6.97366 12.903 7.16301L13.32 6.79401L7.47802 1.62301ZM2.32902 13.719C3.3299 15.2013 4.74757 16.3538 6.40302 17.031C8.37495 16.2878 10.0236 14.8762 11.0615 13.0422C12.0995 11.2082 12.461 9.06817 12.083 6.99501C9.99202 6.42818 8.08012 5.33748 6.52802 3.82601C4.96866 5.34414 3.04666 6.43785 0.945019 7.00301C0.837721 7.56264 0.783812 8.13119 0.784019 8.70101C0.791236 10.4897 1.32892 12.236 2.32902 13.719ZM13.013 8.62101C13.0133 9.97979 12.7282 11.3235 12.176 12.565H22.388L22.36 12.54L16.534 7.38701L15.549 8.25701C15.4701 8.32799 15.3677 8.36725 15.2615 8.36725C15.1554 8.36725 15.053 8.32799 14.974 8.25701L13.989 7.38701L13.005 8.25701C13.0104 8.37834 13.013 8.49968 13.013 8.62101ZM23.042 11.96C23.0913 11.8444 23.1158 11.7197 23.114 11.594L23.115 1.99101C23.1143 1.86631 23.0902 1.74285 23.044 1.62701L17.204 6.79501L23.042 11.96ZM6.60902 5.20601C7.8414 6.37827 9.34637 7.2251 10.988 7.67001C11.0614 8.07468 11.1007 8.48234 11.106 8.89301V8.97501C11.104 10.6791 10.5002 12.3278 9.40102 13.63L9.39402 13.638C8.59947 14.5788 7.57689 15.3002 6.42402 15.733C5.09362 15.1897 3.95439 14.2637 3.15064 13.0724C2.34689 11.8811 1.91478 10.4781 1.90902 9.04101C1.90902 8.58168 1.95202 8.12668 2.03802 7.67601C3.72644 7.22218 5.27072 6.34402 6.52402 5.12501L6.60902 5.20601ZM3.43202 10.259L6.18402 13.011L10.016 9.18001L9.16902 8.33401L6.18602 11.318L4.27802 9.41101L3.43202 10.259Z" fill="#111111"/>
              </svg>  
              <h1>Updadte</h1>
            </button>
            </form>
            </div>
            </div>
    </div>
  )
}

export default ForgetPassword