import React from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import {
         UserOutlined, 
        
         CalendarTwoTone,
         ExclamationCircleTwoTone,
         BookTwoTone,
         PieChartTwoTone,
         BellOutlined
         } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';


const Sidebar = () => {
     
    const Buttons=[
        {
            id:'1',
            name:'Profile',
            linkTo:'/Profile',
            icon:<UserOutlined style={{color:'#04aa'}} />,
        },
        {
            id:'2',
            name:'Result',
            linkTo:'/Result',
            icon:<PieChartTwoTone/>,
        },
        {
            id:'3',
            name:'Events',
            linkTo:'/Events',
            icon: <CalendarTwoTone />,
        },
        {
            id:'4',
            name:'Courses',
            linkTo:'/Courses',
            icon: <ExclamationCircleTwoTone />,
        },
        {
            id:'5',
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
        {
           
            name:'Courses',
            linkTo:'/Courses',
            icon: <ExclamationCircleTwoTone />,
        },
    ]
           
    const navigate= useNavigate();
    function logout(e){
       e.preventDefault()
       axios.defaults.withCredentials=true
       axios.get('http://localhost:5010/logout')
       .then(res=>{ 
        if(res.data==="Success"){
            navigate('/Login')
            localStorage.removeItem('ini');
            sessionStorage.removeItem('names');
            
       }else{
        alert(res.data.Message)
       }})
       .catch(err=> console.log(err))
    
    }

    const storedNames = sessionStorage.getItem('names'); 
    const [ names,setName ]= useState(storedNames||"");
    axios.defaults.withCredentials=true
    useEffect(()=>{
      axios.get('http://localhost:5010/getUser')
      .then(res=> {
        const newName= res.data
        setName(newName)
        
      }) 
      .catch(err=> console.log(err))
    },[names])

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

    const location = useLocation();
    const [aside, setShowAside] = useState(
      !(
        location.pathname === "/Admin" ||
        location.pathname === "/EnterResult" ||
        location.pathname === "/FindResultData" ||
        location.pathname === "/ResetPassword/:id" ||
        location.pathname === "/ForgetPassword"
      )
    );
  
    useEffect(() => {
      setShowAside(
        !(
          location.pathname === "/Admin" ||
          location.pathname === "/EnterResult" ||
          location.pathname === "/FindResultData" ||
          location.pathname === "/ResetPassword/:id" ||
          location.pathname === "/ForgetPassword"
        )
      );
    }, [location]);
 
  return (
    <div>
        <div className='flex items-center rounded-lg justify-center w-full text-lg text-white font-black bg-cyan-600 h-12'>Turbo code</div>
        <div className='flex justify-between border-b-[1px] border-stone-300 absolute top-[75px] w-full'><span className='w-7 h-7 rounded-[50%] bg-gray-300 flex justify-center items-center border-2 border-blue-500 text-sm font-bold'>{initials}</span><span className='font-bold'>{names}</span> <span className='mr-4 w-6 h-6 grid place-items-center bg-gray-300 rounded-[50%]'><BellOutlined/></span></div>
        {aside ?<ul className=' flex flex-col gap-2 mt-[80px] font-medium' >
            {
             Buttons.map(button => (
                 <li className=' rounded-lg w-[95%] hover:bg-gray-300 border-[1px] border-stone-300' key={button.id}>
                    <NavLink className='flex gap-1 pl-2 py-2 items-center' to={button.linkTo}>
                    {button.icon}
                    {button.name}
                    </NavLink>
                 </li>
            ))}
             <li onClick={logout} className='w-[95%] pl-2 py-2 flex cursor-pointer border-2 border-red-300 items-center rounded-lg text-red-500 hover:bg-red-300'>
                <LogoutOutlined /> Log Out
            </li>
           
        </ul>:
        <ul className=' flex flex-col gap-2 mt-[80px] font-medium' >
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
  );
};

export default Sidebar;