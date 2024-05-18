import React,{ useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const SideBarComponent = ({children}) => {
  const location = useLocation();
  const [side, setShowSide] = useState(
    !(location.pathname === "/" ||
      location.pathname === "/SignUp" ||
      location.pathname === "/ForgetPassword")
  );

  useEffect(() => {
    setShowSide(
      !(location.pathname === "/" ||
        location.pathname === "/SignUp" ||
        location.pathname === "/Login" ||
        location.pathname === "/ForgetPassword")
    );
  }, [location]);
    
  return (
    <>{side && children}</>
  )
}
export default SideBarComponent