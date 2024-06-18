 import { CloseCircleOutlined } from '@ant-design/icons'
import React,{useState} from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Db4subFile = () => {
     const [display,setDisplay]= useState(false)
     const show = () =>{
        setDisplay(prev => !prev);
     }
  return (
    <div>
        <div className='mt-20  pl-5' >
           
            <buttton onClick={show} className="bg-blue-200 p-2 mx-auto cursor-pointer  ">Attempt Quiz</buttton>
            <div className={`${!display ? "hidden" :"block"} isolate mt-5 relative bg-gray-200 shadow-lg w-[210px] h-[200px] border-stone-300 border-[1px]` }>
                <span className='bg-gray-200 z-[-1] w-[17px] h-[17px] absolute rotate-45 left-6  top-[-8px]'></span>
            <div className='w-4/5 mx-auto mt-2 text-sm'>You have only one attempt.<br/> You have 10 minutes to answer 20 questions</div>
                <div className='flex justify-between w-4/5  absolute bottom-3 translate-x-[-50%] translate-y-[-50%] left-[50%]'>
                <Link to="/Courses/DatabaseWk4File" className='w-1/2 bg-blue-300 flex items-center justify-center'>
                    <button className='flex items-center justify-center gap-1'>Proceed<FaArrowAltCircleRight /></button>
                </Link>
                <button onClick={()=>{setDisplay(false)}} className='w-1/2 bg-red-400 gap-1 flex justify-center items-center '><CloseCircleOutlined />Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Db4subFile