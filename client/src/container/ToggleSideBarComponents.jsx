import React,{ useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ToggleSideBarComponents = ({children}) => {
    const [sideBar,setSideBar ] = useState(true);
    const location= useLocation();
    useEffect(()=>{
        if(location.pathname==="/" ||
         location.pathname==="/SignUp"||
        location.pathname==="/ResetPassword/:id" ||
        location.pathname==="/Login" ||
        location.pathname==="/ForgetPassword"){ 
            setSideBar(false)
        }else{
          setSideBar(true)
        }
    },[location])
  return (
    <div>{sideBar && children}</div>
  )
}

export default ToggleSideBarComponents;