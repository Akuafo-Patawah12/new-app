import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../components/DataProvider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Coursesbox = () => {
    const [tech,setTech,busAdmin,setBusAdmin,PR,setPR,economics,setEconomics,acc,setAcc]= useContext(DataContext)
      let data;
      const info= localStorage.getItem("programme")
      switch(info){
          case "Acc & F":
          data=acc;
          break;
          case "Info Tech":
          data=tech;
          break;
          case "Bus Admin":
          data=busAdmin;
          break;
          case "Economics":
          data=economics;
          break;
          case "P & R":
          data=PR;
          break;
            default:
              data="Admin";
            break;
      }
  return(
    <div>
      <div className='w-full text-center'>Number of courses:{" "}{data?.length}</div>
    <div className='grid grid-cols-1 gap-4 place-items-center  mt-4 mx-auto w-[90%] bg-gray-50 shadow-lg md:grid-cols-3 lg:grid-cols-4'>
    
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        data?.map(course =>(
        <div  key={course.id} className='border-2 border-blue-200 w-[80%] h-[250px] md:w-[200px] lg:w-[190px] hover:border-blue-400 '>
        <div className={`new h-2/3  p-0`}>
          <LazyLoadImage  effect='blur'
          alt='pic'
          objectFit='fit'
          className={` w-full `}
          
          style={{height:"165px",width:"300px"}}
          maxHeight="180px"
            src={course.image} 
          />  
         
        </div>
        <div className='h-1/3 grid place-items-center'>
          <Link to={course.link} className='px-4 py-1 bg-blue-300 border-0 rounded-lg 
          hover:border-2 border-stone-500'>
          <button >{course.name}</button>
          </Link> 
        </div>
    </div>
    ))}
    </div>
    </div>
  )
}
export default Coursesbox;