import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios"
import {
    UserOutlined, 
   
    CalendarTwoTone,
    ExclamationCircleTwoTone,
    BookTwoTone,
    PieChartTwoTone,
    CloseOutlined,
    LogoutOutlined,
    BellOutlined
    } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';

const Togglesidebar = ({toggle}) => {
    const navigate= useNavigate();
    function logout(e){
       e.preventDefault()
       axios.defaults.withCredentials=true
       axios.get('http://localhost:5010/logout')
       .then(res=>{ 
        if(res.data==="Success"){
            sessionStorage.removeItem('names')
            localStorage.removeItem('ini')
            localStorage.removeItem('programme')
            navigate('/')
           
       }else{
        alert(res.data.Message)
       }})
       .catch(err=> console.log(err))
    
    }
     
    const storedNames = sessionStorage.getItem('names'); 
    const [ name,setName ]= useState(storedNames||"");
    axios.defaults.withCredentials=true
    useEffect(()=>{
      axios.get('http://localhost:5010/getUser')
      .then(res=> {
        const newName= res.data
        setName(newName)
       
      }) 
      .catch(err=> console.log(err))
    },[name])
    const ini=localStorage.getItem('ini')
    const[initials,setInitials]= useState(ini || "")

    useEffect(()=>{
        axios.defaults.withCredentials=true
            axios.get("http://localhost:5010/getInitials")
            .then(res=>{
                 const newName= res.data
                 setInitials(newName)
                 localStorage.setItem("ini",newName)
            })
               .catch(err => console.log(err) )
          
    },[initials])
 
    const Buttons=[
        {
            id: 1,
            name:'Profile',
            linkTo:'/Profile',
            icon:<UserOutlined style={{color:'#04aa'}} />,
        },
        {
            id:2,
            name:'Result',
            linkTo:'/Result',
            icon:<PieChartTwoTone/>,
        },
        {
            id:3,
            name:'Events',
            linkTo:'/Events',
            icon: <CalendarTwoTone />,
        },
        {
            id:4,
            name:'Courses',
            linkTo:'/Courses',
            icon: <ExclamationCircleTwoTone />,
        },
        {
            id: 5,
            name:'Prospectus',
            linkTo:'/Prospectus',
            icon: <BookTwoTone />,
        },
    ];
    const button2=[
        {
            name:'Dashboard',
            linkTo:'/Admin',
            icon:<PieChartTwoTone/>,
        },
        {
           
            name:'Enter Results',
            linkTo:'/EnterResult',
            icon:<UserOutlined style={{color:'#04aa'}} />,
        },
        
        {
          
            name:'Manage Students',
            linkTo:'/FindResultData',
            icon:<PieChartTwoTone/>,
        },
        {
          
            name:'Events',
            linkTo:'/Events',
            icon: <CalendarTwoTone />,
        },
        
    ]
    const [aside,setAside] = useState(true);
  const location= useLocation();
  useEffect(()=>{
      if(location.pathname==="/Admin" || location.pathname==="/EnterResult" ||location.pathname=== "/FindResultData"){
          setAside(false)
      }else{
        setAside(true)
      }
  },[location])
  return (
    
    <div>
        <span onClick={toggle} className='  grid p-1 rounded-[50%] border-2 
        border-stone-700 place-items-center absolute top-3 right-2 hover:bg-gray-400'>
            <CloseOutlined  size={10}/></span>
            <div className='flex justify-between border-b-[1px] border-stone-400 absolute mb-[20px] top-[75px] w-full'>
                <span className='w-7 h-7 rounded-[50%] bg-gray-300 flex justify-center items-center border-2 border-blue-500 text-sm font-bold'>
                    {initials}</span>
            <span className='font-bold'>{name}</span>
             <span className='mr-4 w-6 h-6 grid place-items-center bg-gray-300 rounded-[50%]'>
                <BellOutlined /></span></div>
            {aside? <ul className='mt-[120px]  flex flex-col gap-2  font-medium' >
             {
             Buttons.map(button => (
                 <li className='w-[95%] rounded-lg hover:bg-gray-300 border-[1px] border-stone-400' key={button.id}>
                    <NavLink className='flex gap-1 pl-2 py-[6px] items-center' to={button.linkTo}>
                    {button.icon}
                    {button.name}
                    </NavLink>
                 </li>
            ))} 
            
            <li onClick={logout} className='w-[95%] rounded-lg cursor-pointer border-2 border-red-300 text-red-500 hover:bg-red-200 flex gap-1 pl-2 py-1 items-center'><LogoutOutlined /> Log Out</li>
        </ul> :
         <ul className=' mt-[120px] flex flex-col gap-2  font-medium' >
         {
          button2.map((button,index) => (
              <li className=' rounded-lg w-[95%] hover:bg-gray-300 border-[1px] border-stone-300' key={index}>
                 <NavLink className='flex gap-1 pl-2 py-2 items-center' to={button.linkTo}>
                 {button.icon}
                 {button.name}
                 </NavLink>
              </li>
         ))}
          <li onClick={logout} className='w-[95%] pl-2 py-2 flex cursor-pointer border-2 border-red-300 items-center rounded-lg text-red-500 hover:bg-red-300'>
             <LogoutOutlined /> Log Out
         </li>
        
     </ul>
        }
       
    </div>
  ) 
}

export default Togglesidebar;