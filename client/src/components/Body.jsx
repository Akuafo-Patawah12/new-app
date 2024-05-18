import React from 'react';

import { useEffect,useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import axios from "axios"


const Body = () => {
    const greet  = () =>{
      const date= new Date();
      const time= date.getHours();
      if(time <= 11 ){
          return 'Welcome👋'
              
      }else if(time < 17){
        return 'Good day😊';
        
      }else{
        return 'Good evening🤩';
        
      }   
    }
    
  
    
  
  

    //const navigate= useNavigate()
  
     

    const storedNames = sessionStorage.getItem('names'); 
  const [ names,setName ]= useState(storedNames||"");
  axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get('http://localhost:5010/getUser')
    .then(res=> {
      const newName= res.data
      setName(newName)
      sessionStorage.setItem('names', newName);
    }) 
    .catch(err=> console.log(err))
  },[names])
    
  useEffect(()=>{
    axios.defaults.withCredentials=true
        axios.get("http://localhost:5010/getProgramme")
        .then(res=>{
             const newName= res.data
             localStorage.setItem("programme",newName)
        })
           .catch(err => console.log(err) )   
},[])

const images = [
  "../images/band.jpg",
  "../images/Foto.jpg",
  "../images/Database.jpg",
  "../images/blockchain.jpg"
];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 4000); // Change index every 4000ms

  return () => clearInterval(intervalId); // Cleanup function to clear the interval
}, [currentIndex]);   
  return (
    <div className='mt-[60px]'>
        <div className='flex gap-2 w-[70%] text-xl mb-4  mt-8  flex justify-center font-bold mx-auto text-lg'>
          <div  className='greetings'> {greet()} {names || ''}</div>  
        </div>
        
        <div className='relative w-4/5 mx-auto aspect-video bg-yellow-300 overflow-hidden'>
      <div className="slideshow-container ">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt={`Slide ${index}`}
          />
        ))} 
      </div>
      <div className="w-[95%] flex justify-between absolute top-[50%] z-1 translate-x-[-50%] translate-y-[-50%] left-[50%]">
            <span className="bg-gray-400 grid plce-items-center hover:bg-gray-500"><LeftOutlined /></span>
            <span className="bg-gray-400 grid plce-items-center hover:bg-gray-500"><RightOutlined /></span>
        </div>
    </div>
    
        <div  className='mx-auto w-[80%] mt-4 flex flex-wrap gap-3 justify-center md:justify-between lg:justify-between'>
          <fieldset className="w-full  border-[1px] border-stone-400 rounded-lg md:w-[48%] lg:w-[48%]">
            <legend className="text-blue-600 text-lg ml-2  font-extrabold">About Us</legend>
            <h3 className="text-blue-400 font-bold ml-3">Our Mission</h3>
            <p className="text-blue-400 border-l-4 ml-5 pl-2 border-blue-400">"Our school community inspires students to love learning and develop a spiritual nature to develop a 
              communiacte effectively, to be kind to others , and to respect the uniqueness of eachother person."
            </p>
          </fieldset>
          <fieldset className="w-full border-[1px] border-stone-400 rounded-lg md:w-[48%] lg:w-[48%]">
            <legend className="text-blue-600 text-lg ml-2 font-extrabold">Our Five Promises</legend>
            <ul className="list-disc list-inside">
              <li> Live our compelling mission and core values everyday</li>
              <li>Build authentic partnership with families</li>
              <li>Academic Excellence: Providing high-quality education to foster academic achievement.</li>
              <li>Safe Environment: Creating a safe and supportive environment for all students.</li>
              <li>Diversity and Inclusion: Promoting diversity, equity, and inclusion in all aspects of school life.</li>
            </ul>
          </fieldset>
          <fieldset className="w-full  border-[1px] border-stone-400 rounded-lg md:w-[48%] lg:w-[48%]">
            <legend className="text-blue-600 text-lg ml-2  font-extrabold">About Us</legend>
            <h3 className="text-blue-400 font-bold ml-3">Our Mission</h3>
            <p className="text-blue-400 border-l-4 ml-5 pl-2 border-blue-400">"Our school community inspires students to love learning and develop a spiritual nature to develop a 
              communiacte effectively, to be kind to others , and to respect the uniqueness of eachother person."
            </p>
          </fieldset>
        </div>   
    </div>
  )
}
export default Body;