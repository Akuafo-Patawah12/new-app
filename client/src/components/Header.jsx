import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaBell } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const Header = ({toggle}) => {
   const location = useLocation();
  const [header, setShowHeader] = useState(
    !(location.pathname === "/Admin" ||
      location.pathname === "/EnterResult" ||
      location.pathname === "/FindResultData")
  );

  useEffect(() => {
    setShowHeader(
      !(location.pathname === "/Admin" ||
        location.pathname === "/EnterResult" ||
        location.pathname === "/FindResultData")
    );
  }, [location]);
  const ini=localStorage.getItem('ini');
 const[initials,setInitials]= useState("" || ini)
  
   useEffect(()=>{
      axios.get('http://localhost:5010/getInitials')
      .then(res=> {
        setInitials(res.data)
        
      }) 
      .catch(err=> console.log(err))
},[initials])
 return(
  <header className={`bg-sky-700 border-b-2 font-medium fixed z-[40] top-0 w-full h-12 flex justify-between  ml-0  lg:w-4/5 ml-1/4 ml-auto`}>
  <div className='flex ml-[8%] gap-2 items-center '>
    <button onClick={toggle} className='block rounded-[50%] p-2 lg:hidden hover:bg-blue-300'><FaBars/></button>
    <button className='text-lg'><img src='../images/burxells.png' className='h-4/5 w-[50px] rounded-[50%]'></img></button>
    <h1>Turbo</h1>
  </div>
  {/*Using link for easy navigation */}
    {header ? <nav className='flex gap-4'>
        <NavLink to='/Body' className=' flex gap-1 items-center px-2 hover:bg-blue-300'>
           <button className='mx-auto flex gap-1 items-center '>
           <svg width="24" height="24" viewBox="0 0 39 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.507 0.137993C20.3533 0.0476024 20.1783 -6.10352e-05 20 -6.10352e-05C19.8217 -6.10352e-05 19.6467 0.0476024 19.493 0.137993L1.63098 10.645L2.64498 12.369L20 2.15999L37.355 12.37L38.369 10.646L32 6.89999V1.99999C32 1.73478 31.8946 1.48042 31.7071 1.29289C31.5196 1.10535 31.2652 0.999993 31 0.999993H28C27.7348 0.999993 27.4804 1.10535 27.2929 1.29289C27.1053 1.48042 27 1.73478 27 1.99999V3.95699L20.507 0.137993Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20 4L6 12V26H1C0.734784 26 0.48043 26.1054 0.292893 26.2929C0.105357 26.4804 0 26.7348 0 27C0 27.2652 0.105357 27.5196 0.292893 27.7071C0.48043 27.8946 0.734784 28 1 28H37C37.2652 28 37.5196 27.8946 37.7071 27.7071C37.8946 27.5196 38 27.2652 38 27C38 26.7348 37.8946 26.4804 37.7071 26.2929C37.5196 26.1054 37.2652 26 37 26H34V12L20 4ZM24 26V15H30V26H24ZM21 15H10V21H21V15Z" fill="black"/>
</svg>

            <p className='hidden sm:block'>Home</p></button>
        </NavLink>
        <NavLink to='/About'className=' flex gap-1 items-center px-2 hover:bg-blue-300'>
           <button className='mx-auto flex gap-1 items-center '>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20L14 18L15 17V15H13V14L12 13H9V16L11 18V19.931C7.06 19.436 4 16.072 4 12L5 13H7V11H9L12 8V6H10L9 5V4.589C10.9231 3.80478 13.0769 3.80478 15 4.589V6L14 7V9L15 10L18.13 6.87C18.8914 7.78093 19.4401 8.85022 19.736 10H18L16 12V14L17 15H19L19.286 15.286C18.029 18.061 15.239 20 12 20Z" fill="black"/>
</svg>

            <p className='hidden sm:block'>About</p></button>
        </NavLink>
        <NavLink to='/Notification' className=' flex gap-1 items-center px-2 hover:bg-blue-300'>
           <button className=' mx-auto flex gap-1 items-center '><div className="alert">
           <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1V3" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M9 3C5.68629 3 3 5.68629 3 9V15C2 15 1 16 1 17H9M9 3C12.3137 3 15 5.68629 15 9V15C16 15 17 16 17 17H9" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M7 18C7 19.1046 7.8954 20 9 20C10.1046 20 11 19.1046 11 18" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</svg>

            </div><p className='hidden sm:block'>Notification</p></button>
        </NavLink>
       
    </nav> : <nav className='flex gap-2  ' >
    <NavLink to='/Notification' className=' flex gap-1 items-center px-2 hover:bg-blue-300'>
           <button className='  flex gap-1 items-center '><div className="alert"><FaBell /></div><p className='hidden sm:block'>Notification</p></button>
           
        </NavLink>
       <span className='w-7 h-7 mr-2 self-center rounded-[50%] bg-gray-300 flex justify-center items-center border-2 border-blue-500 text-sm font-bold'>{initials}</span>
    </nav> }
</header>
 )
}
export default Header;