import { BarChartOutlined,SearchOutlined } from '@ant-design/icons'
import React,{useState,useEffect} from 'react'
import { FaBars, FaBook, FaHistory, FaUser, FaUserCheck, FaUsers } from 'react-icons/fa'
import { DeleteOutlined } from '@ant-design/icons';
import { SortDescendingOutlined } from '@ant-design/icons';
import BarChart from "../Chartjs/BarChart"
import DoughnutChart from "../Chartjs/DoughnutChart"
import LineChart from "../Chartjs/LineChart"
import { UserData } from "../Chartjs/Data";
import Loading from "../components/Loading"


import axios from 'axios'
const Admin = () => {

   const flex=[
    {
    name:"Student",
    icon:<FaUsers />
    },
    {
      name:"Scores",
      icon:<BarChartOutlined />
      },
      {
        name:"Attendance",
        icon: <FaHistory />
      },
      {
        name:"Sections",
        icon:<FaBars />
     },
     {
      name:"Teachers",
      icon:<FaUserCheck />
     },
     {
      name:"Profile",
      icon:<FaUser />
     },
     {
      name:"Subjects",
      icon:<FaBook />
      }
   ]
  
  axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get('http://localhost:5010/getUser')
    .then(res=> {
      const newName= res.data
      sessionStorage.setItem('names', newName);
    }) 
    .catch(err=> console.log(err))
  },[])

  const[All,setAll]= useState([])
  const[load,setLoad]= useState(true)
  const [time,setTime]=useState(0)
    axios.defaults.withCredentials=true
    useEffect(()=>{
      const timer=setInterval(() => {
        axios.get("http://localhost:5010/getAdmin")
      .then(res=>{
       const info= res.data
         setAll(info)
         setTime(pre=>pre + 1)
      })
      .catch(err=> console.log('Error fetching data:' ,err))
      }, 1000);
      if(time===2){
        clearInterval(timer)
        setLoad(false)
      }
      return()=>{clearInterval(timer)}
    },[All])
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
         
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    }); 
    const handleDelete = async (id) => {
      try {
          const response=await axios.delete(`http://localhost:5010/api/data1/${id}`);
          if(response.data==="Deleted"){
            alert("Account Deleted ")
          }
      } catch (error) {
          console.error('Error deleting data:', error);
      }
  };
  const[filter,setFilter] =useState("")
    const filtered=(e)=>{
      e.preventDefault();
      axios.get("http://localhost:5010/filter",{params:{filter}})
      .then(res=>{
       const info= res.data;
         setAll(info)
      })
      
      .catch(err=> console.log('Error fetching data:' ,err))
   }
  return (
    <div className="flex flex-col  lg:flex-row">
      <div className="w-4/5 mx-auto lg:w-3/5">
        <h3 className='ml-[10%] font-bold mt-[75px] '>Dashboard</h3>
      <div className="w-[90%] mt-4">
      <div className="w-full mx-auto">
        <LineChart chartData={userData} />
       </div>
      </div>
      <div className="w-[90%] flex mx-auto justify-center items-center mt-4">
      <div className="w-[45%] h-full bg-gray-300 mx-auto">
        <BarChart chartData={userData} />
       </div>
       <div className="w-[45%] bg-gray-300 mx-auto">
        <DoughnutChart chartData={userData} />
       </div>
      </div>
        <div className='flex gap-2 justify-between   w-[80%] mx-auto mt-1'>
            <div className='w-[32%] h-[80px] bg-orange-400  '></div>
            <div className='w-[32%] h-[70px] bg-green-400 self-end'></div>
            <div className='w-[31%] h-[60px] bg-blue-400 self-end'></div>
           
        </div>
        <h3 className='mt-4 font-bold ml-[10%]'>School Management Systems</h3>
        <div className='grid grid-cols-2 content-center justify-items-center bg-stone-300 rounded-xl py-3 gap-2 w-[80%]  mx-auto mt-1 lg:grid-cols-3' >
        {flex.map((item,index)=>(
        <div key={index} className=' font-bold text-sky-800 w-[100px] h-[80px] bg-gray-200 rounded-lg flex flex-col justify-center items-center'>
          {item.icon}  {item.name}</div>
             
        ))}
        </div>
        </div>
        <div className=" mt-[60px] mx-auto w-4/5 lg:w-2/5 ">
        <div className='mt-[20px] flex justify-center '>
        <form onSubmit={filtered}>
          <label className="bg-stone-300 rounded-lg float-left py-1 font-bold w-[60px] flex justify-center items-center">< SortDescendingOutlined/> Filter</label>
        <input type="text" placeholder='Search...' 
          onChange={(e)=>{setFilter(e.target.value)}}
        className='pl-2 rounded-l-2xl float-left border-[1px] h-[30px] border-stone-400'></input>
        <button type='submit' className="bg-stone-300 w-[30px] h-[32px] rounded-r-2xl"><SearchOutlined /></button>
        
        </form>
        </div>
        {load ? <Loading /> : 
        <>
        <h2 className="font-bold ml-[10%]">Admin Names</h2>
            {All.map((items,index)=>(<div  key={index} className=" relative mt-1 py-2 mx-auto w-[80%]  border-2 border-stone-300 rounded-lg flex gap-4">
               <div>{items.firstname}</div>
               <div>{items.lastname}</div>
               <div onClick={()=>handleDelete(items._id)} className="absolute right-2 bg-stone-300"><DeleteOutlined /></div>
            </div>))}
            </> }
        </div> 
    </div>
  )
}

export default Admin