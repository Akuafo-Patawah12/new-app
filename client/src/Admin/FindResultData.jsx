import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {FaSearch} from "react-icons/fa"
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import Loading from "../components/Loading"
import UpdatePopUp from "./UpdatePopUp"



const FindResultData =()=>{
    const[All,setAll]= useState([])
    const[load,setLoad]= useState(true)
    const [time,setTime]=useState(1)
    axios.defaults.withCredentials=true
    useEffect(()=>{
      const timer= setInterval(()=>{
        axios.get("http://localhost:5010/findAllResult")
        .then(res=>{
         const info= res.data
           setAll(info)
           setTime(pre=>pre + 1)
        })
        .catch(err=> console.log('Error fetching data:' ,err))
      },2000) 
      if(time===2){
        clearInterval(timer)
        setLoad(false)
      }
      return()=>{clearInterval(timer)}
    },[All])
       
    const fetchData=()=>{
      axios.get("http://localhost:5010/findAllResult")
      .then(res=>{
       const info= res.data
         setAll(info)
      })
      
      .catch(err=> console.log('Error fetching data:' ,err))
    }
    const[filter,setFilter] =useState("")
    const filterByName=(e)=>{
      e.preventDefault();
      axios.get("http://localhost:5010/filterByName",{params:{filter}})
      .then(res=>{
       const info= res.data;
         setAll(info)
      })
      
      .catch(err=> console.log('Error fetching data:' ,err))
   }
   const fetchProgrammeData=(name)=>{
      axios.get("http://localhost:5010/findByProgramme",{params:{name}})
      .then(res=>{
       const info= res.data
         setAll(info)
      })
      .catch(err=> console.log('Error fetching data:' ,err))
   }
   const [popup,setPopup] = useState(false)
   const [update,setUpdate] =useState("")
   function pop(id){
      setPopup(pre => !pre)
      setUpdate(id)
   }
    const handleDelete = async (id) => {
      try {
          const response=await axios.delete(`http://localhost:5010/api/data/${id}`);
          if(response.data==="Deleted"){
            alert("Deleted SuccessFull")
            fetchData();
          }
          
      } catch (error) {
          console.error('Error deleting data:', error);
      }
  };
  const[formData,setFormData]= useState({
   name:"",
   Exams_Scores:"",
   IA_Scores: "",
});
 async function handleUpdate (e,id){
   e.preventDefault()
   try {
       // Send a PUT request to update data by ID
       const response = await axios.put(`http://localhost:5010/updateById/${id}`,{ formData });

       // If the response indicates that the update was successful
       if(response.data==="Update"){
         alert("Updated successfully")
          fetchData();
       }
       // After updating, fetch the updated data
   } catch (error) {
       // Handle errors that occur during the update process
       console.log('Error updating data:', error);
   }
};
const popRef =useRef(null );
useEffect(()=>{
  let closePop =(event)=>{
    if(popRef.current && !popRef.current.contains(event.target)){
      setPopup(false);
    }
       /**This function is executed when you click outside the pop up menu in event.js to close it */
  }
  document.addEventListener("mousedown",closePop);
  return()=>{
    document.removeEventListener("mousedown",closePop)
    /**This function is executed when you click outside the sidebar to close it in ToggleSideBar.jsx */
  }
},[]);  
    return(
       <div className="mt-[80px]">
        
         <div className="mx-auto  w-[228px]  pb-6">
         <form onSubmit={filterByName} className="flex">
         <input placeholder="Sort table" 
                className="h-9 border-2 pl-2 border-stone-600 rounded-l-[15px]"
                onKeyUp={(e)=>{setFilter(e.target.value.trim())}}></input>
         <button type="submit"  className="flex grid place-items-center rounded-[50%] border-2 w-9 bg-stone-300 border-stone-600"><FaSearch /></button>
         </form>
         </div>
         <section className="flex gap-3 justify-center pb-4">
        <button onClick={fetchData} className="font-bold bg-stone-300 px-3"> All</button>
        <button  onClick={()=> fetchProgrammeData("Info Tech")} className="font-bold bg-stone-300 px-2">IT</button>
        <button  onClick={()=>{fetchProgrammeData("Bus Admin")}} className="font-bold bg-stone-300 px-2">Bus Admin</button>
        <button  onClick={()=>{fetchProgrammeData("P & R")}} className="font-bold bg-stone-300 px-3">PR</button>
        <button  onClick={()=>{fetchProgrammeData("Economics")}} className="font-bold bg-stone-300 px-2">Economics</button>
        </section>
        {load ? <Loading /> :
        <table className="mx-auto border-collapse border-[1px] border-stone-400 ">
         <thead>
           
            <tr className="border-[1px] border-stone-400 flex gap-1 ">
                <th className="w-[80px]">Name</th>
                <th className="w-[80px]">Semester</th>
                <th className="w-[80px]">Level</th>
                <th className="w-[80px]">Programme</th>
                <th className="w-[80px]">IA</th>
                <th className="w-[80px]">Exams</th>
                <th className="w-[80px]">Grade</th>
            </tr>
            </thead>
             <tbody>
            {
            All.map((data,index)=>(
            <tr key={index} className="border-2 border-stone-400 flex  gap-1 ">
                <td className="w-[80px]">{data.name}</td>
                <td className="w-[80px]">{data.Semester}</td>
                <td className="w-[80px] flex justify-center">{data.level}</td>
                <td className="w-[80px]">{data.Programme}</td>
                <td className="w-[80px] flex justify-center">{data.IA_Scores}</td>
                <td className="w-[80px] flex justify-center">{data.Exams_Scores}</td>
                <td className="w-[80px] flex justify-center">{data.Grade}</td>
                <td className=" text-cyan-800 flex justify-center item-center " ><button onClick={()=>{pop(data._id)}} className="w-[19px] h-[19px]  ronded-[50%] flex justify-center items-center hover:text-red-800"><EditOutlined /></button></td>
                <td className=" text-red-800  flex justify-center item-center hover:bg-red-300" onClick={()=>handleDelete(data._id)} ><button className="w-[19px] h-[19px]  ronded-[50%] flex justify-center items-center hover:text-red-800"><DeleteOutlined /></button></td>
                {popup ? <UpdatePopUp popRef={popRef}>
        <form className="flex flex-col gap-1" onSubmit={(e)=>handleUpdate(e,update)}>
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
         <button type="submit" className="bg-sky-400 font-bold w-[100px]">UPDATE</button>
         </form>
         </UpdatePopUp> : ""}
         
            </tr>
            ))}
            </tbody>
         </table> }
        
       </div> 
    )
}
export default FindResultData