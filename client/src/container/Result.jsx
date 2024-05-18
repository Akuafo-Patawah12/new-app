import { SendOutlined } from '@ant-design/icons';
import React,{useState,useRef} from 'react'
import axios from "axios"

const Result = () => {
  const[formData,setFormData] = useState({
    level:"",
    sem:""
  })
  const [All,setAll]= useState([])
  const fetchPersonalResult=(e)=>{
    e.preventDefault()
    axios.get("http://localhost:5010/getPersonalResult",{params:{formData}})
    .then(res=>{
     const info= res.data
       setAll(info)
    })
    .catch(err=> console.log('Error fetching data:' ,err))
 }
 const divRef = useRef(null);
 const printDiv = () => {
  // Get the div to print
  const value = divRef.current.textContent;
  document.body.nextElementSibling=value
  
  // Open the print dialog
  window.print();
};

  return (
    <div className='mt-[60px]'>
      <h3 className='w-[100px] mx-auto bg-gray-300 border-b-2 border-blue-300 grid place-items-center mt-6 font-bold text-lg'>Results</h3>
      <div className='border-[1px] border-stone-400 w-4/5 mx-auto h-[300px]'>
      <form onSubmit={fetchPersonalResult}>
        <div className='mx-auto flex flex-wrap justify-center gap-4 mt-10'>    
      <select className='bg-gray-200 rounded-lg border-2 border-[#777]' onChange={(e) => setFormData({ ...formData, level: e.target.value })}>
        <optgroup label='Level'>
        <option value="L 100">Choose Level</option>
        <option value="L 100">level 100</option>
        <option value="L 200">level 200</option>
        <option value="L 300">level 300</option>
        <option value="L 400">level 400</option>
        </optgroup>
      </select>
      <select className='bg-gray-200  rounded-lg p-1 border-2 border-[#777]' onChange={(e) => setFormData({ ...formData, sem: e.target.value })}>
      <optgroup label='Semester'>
      <option value="1st Sem">Choose Semester</option>
        <option value="1st Sem">First Sem</option>
        <option value="2nd Sem">Second Sem</option>
        </optgroup>
      </select>
      </div>
      <button type='submit' className='bg-blue-200 flex justify-center items-center font-medium gap-1 p-2 rounded-sm shadow-lg mt-10 mx-auto'>Send <SendOutlined /> </button>
      </form>
    </div>
    <table ref={divRef} className="mx-auto">
    <thead>
           <tr className="border-[1px] border-stone-400 flex gap-1 ">
               <th className="w-[100px]">Name</th>
               <th className="w-[100px]">Semester</th>
               <th className="w-[100px]">Level</th>
               <th className="w-[100px]">Course</th>
               <th className="w-[100px]">Grade</th>
           </tr>
           </thead>
            <tbody>
           {
           All.map((data,index)=>(
           <tr key={index} className="border-2 border-stone-400 flex  gap-1 ">
                 <td className="w-[100px]">{data.name}</td>
                <td className="w-[100px]">{data.Semester}</td>
                <td className="w-[100px] flex justify-center">{data.level}</td>
                <td className="w-[100px] flex justify-start  truncate ...">{data.Course}</td>
                <td className="w-[100px] flex justify-center">{data.Grade}</td>
            </tr>))}
          </tbody>
          </table>
          <button className="button" onClick={printDiv}>Print</button>
    </div>
  )
}

export default Result;