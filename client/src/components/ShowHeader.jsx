import React,{ useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowHeader = ({children}) => {
   
  const location= useLocation();
  const [header,setHeader] = useState(
    location.pathname !== "/" &&
    location.pathname !== "/SignUp" &&
    location.pathname !== "/ForgetPassword" &&
    location.pathname !== "/Login" &&
    !location.pathname.startsWith("/ResetPassword/:id")
  );

  useEffect(() => {
    setHeader(
      location.pathname !== "/" &&
      location.pathname !== "/SignUp" &&
      location.pathname !== "/ForgetPassword" &&
      location.pathname !== "/Login" &&
      !location.pathname.startsWith("/ResetPassword/:id")
    );
  }, [location]);
  return (
     <div>
       {header && children}
       </div>
      
  )
}

export default ShowHeader;