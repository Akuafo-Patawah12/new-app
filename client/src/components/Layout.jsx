import React, { useEffect, useState,useRef} from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import {useNavigate , Route, Routes, useLocation } from 'react-router-dom';
import Result from '../container/Result';
import Events from '../container/Events';
import Profile from '../container/Profile';
import Prospectus from '../container/Prospectus';
import About from '../container/About';
import Notification from '../container/Notification';
import Togglesidebar from '../container/Togglesidebar';
import { ArrowUpOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import EventsPopUp from '../container/EventsPopUp';
import Database from '../CoursesContainer/Database';
import DatabaseWk1File from '../container/Week1 folder/DatabaseWk1File';
import DatabaseWk2File from '../container/Week2 folder/DatabaseWk2File';
import DatabaseWk3File from '../container/Week3 folder/DatabaseWk3File';
import ProgammingI from '../CoursesContainer/ProgammingI';
import BusinessFinance from '../CoursesContainer/BusinessFinance';
import BusinessStats from '../CoursesContainer/BusinessStats';
import OperatingSystems from '../CoursesContainer/OperatingSystems';
import Bigdata from '../CoursesContainer/Bigdata';
import BusinessFinanceWk1File from '../container/Week1 folder/BusinessFinanceWk1File';
import BusStatsWk1File from '../container/Week1 folder/BusStatsWk1File';
import ProgrammingWk1File from '../container/Week1 folder/ProgrammingWk1File';
import OsWk1File from '../container/Week1 folder/OsWk1File';
import BigDataWk1File from '../container/Week1 folder/BigDataWk1File';
import BigDataWk2File from '../container/Week2 folder/BigDataWk2File';
import OsWk2File from '../container/Week2 folder/OsWk2File';
import ProgrammingWk2File from '../container/Week2 folder/ProgrammingWk2File';
import BusinessFinanceWk2File from '../container/Week2 folder/BusinessFinanceWk2File';
import BusStatsWk2File from '../container/Week2 folder/BusStatsWk2File';
import BusinessFinanceWk3File from '../container/Week3 folder/BusinessFinanceWk3File';
import BusStatsWk3File from '../container/Week3 folder/BusStatsWk3File';
import ProgrammingWk3File from '../container/Week3 folder/ProgrammingWk3File';
import OsWk3File from '../container/Week3 folder/OsWk3File';
import BigDataWk3File from '../container/Week3 folder/BigDataWk3File';
import DatabaseWk4File from '../container/Week4 folder/DatabaseWk4File';
import ProgrammingWk4File from '../container/Week4 folder/ProgrammingWk4File';
import BusStatsWk4File from '../container/Week4 folder/BusStatsWk4File';
import BusinessFinanceWk4File from '../container/Week4 folder/BusinessFinanceWk4File';
import OsWk4File from '../container/Week4 folder/OsWk4File';
import BigDataWk4File from '../container/Week4 folder/BigDataWk4File';
import SignUp from './SignUp';
import Login from './Login';
import LandingPage from "./LandingPage"
import Db4subFile from '../container/Week4 folder/Db4subFile';
import ShowHeader from './ShowHeader';
import ToggleSideBarComponents from '../container/ToggleSideBarComponents';
import SideBarComponent from './SideBarComponent';
import ProfileEdit from '../container/ProfileEdit';
import PageNotFound from './PageNotFound';
import Loading from './Loading';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import EnterResult from "../Admin/EnterResult";
import FindResultData from "../Admin/FindResultData"
const LazyAdmin= React.lazy(()=>import('../Admin/Admin')) ;
const LazyCourse= React.lazy(()=> import('../container/Courses'));
const BodyLazy= React.lazy(()=> import('./Body'))

const Layout = () => {
  const [aside,setAside] = useState(false)
  const [showButton,setShowButton] = useState(false);
  const [isPop, setIsPop] =useState(false);
  const popRef =useRef(null );
  const sideRef= useRef(null);
  
  const Switch = () =>{
    setIsPop(prev=> !prev)
  };
  const toggle= () =>{
    setAside(!aside);
    /**Toggling sidebar in ToggleSidebar.js ../container/ToggleSideBar */
  };
  useEffect(()=>{
    const handScroll = () =>{
      window.scrollY > 900 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll',handScroll);
    return ()=>{
      window.removeEventListener('scroll',handScroll);
    }
  },[])
  const handClick = () =>{
    window.scrollTo({top:0,behavior:'smooth'})
    /*This function is excecuted when you click on the back to top button in layout.js */
  }
  
  useEffect(()=>{
    let closePop =(event)=>{
      if(popRef.current && !popRef.current.contains(event.target)){
        setIsPop(false);
      }
         /**This function is executed when you click outside the pop up menu in event.js to close it */
    }
    document.addEventListener("mousedown",closePop);
    return()=>{
      document.removeEventListener("mousedown",closePop)
      /**This function is executed when you click outside the sidebar to close it in ToggleSideBar.jsx */
    }
  },[]);
  useEffect(() =>{
    const windowClose =(event) =>{
        if(sideRef.current && !sideRef.current.contains(event.target)){
            setAside(false);
        }
    };
    document.addEventListener("mousedown",windowClose);
    return() =>{
        document.removeEventListener("mousedown",windowClose);
    };
},[]); 

const location = useLocation();
const [log, setLog] = useState(
  location.pathname === "/" ||
   location.pathname==="/Login" ||
  location.pathname === "/ForgetPassword" || 
  location.pathname === "/ResetPassword:id" 
  || location.pathname==="/SignUp"
);
useEffect(() => {
  setLog( location.pathname === "/" ||
  location.pathname==="/Login" ||
  location.pathname === "/ForgetPassword" || 
  location.pathname === "/ResetPassword:id" 
  || location.pathname.startsWith("/SignUp"));
}, [location]);


const [side, setShowSide] = useState(
  location.pathname !== "/" &&
  location.pathname !== "/SignUp" &&
  location.pathname !== "/ForgetPassword" &&
  location.pathname !== "/Login" &&
  !location.pathname.startsWith("/ResetPassword/:id"))


useEffect(() => {
  setShowSide(
    location.pathname !== "/" &&
    location.pathname !== "/SignUp" &&
    location.pathname !== "/ForgetPassword" &&
    !location.pathname.startsWith("/ResetPassword/:id")
  );
}, [location]);


const[isLoggedOut, setLoggedOut]= useState(false)
let notify;
const[char,setChar]= useState(4)
const navigate= useNavigate()
useEffect(() => {
  const fetchData = async () => {
    axios.defaults.withCredentials=true
    try {
      const response = await axios   .get('http://localhost:5010/sessionLogout');
      if (response.data.message ==="Successfully logged out") {
        if(!(location.pathname ==="/" ||
         location.pathname ==="/SignUp" ||
         location.pathname ==="/Login" ||
         location.pathname ==="/ResetPassword/:id" ||
         location.pathname ==="/ForgetPassword")){
           timer()
        }
      }
    } catch (error) {
      console.error('API request failed:', error);
    }
    
  };
  
 
  fetchData()
  function timer(){
    notify= setInterval(()=>{
      setLoggedOut(true)
      setChar(prev=> prev-1)
   },1000)
   navigate("/Login");
   if(char<=1){
     setLoggedOut(false)
     clearInterval(notify)          
   }
  
  }
  return()=>{clearInterval(notify); }
},[char]); 

  return (
    <div className='flex'>
    
      <SideBarComponent>
        {side &&<aside className='hidden lg:block overflow-y-auto w-1/5  fixed 
        top-0 bottom-0'>
            <Sidebar />
        </aside> }
        </SideBarComponent>
        <ToggleSideBarComponents>
        <aside  ref={sideRef} className={`w-[210px] grid bg-gray-200 z-[60] fixed inset-y-0 
       ${aside ? "open " : "close"} block lg:hidden `}>
             <Togglesidebar  toggle={toggle} />
        </aside> 
        </ToggleSideBarComponents>
        <main className={` w-full  lg:${log ? "w-full ml-0 h-screen" : "w-4/5 h-screen ml-1/4 ml-auto"}`}> 
        <ShowHeader>
        <Header toggle={toggle}/>
     </ShowHeader>
            <Routes>
                <Route path="*" element={<PageNotFound />} />
                <Route path="/EnterResult" element={<EnterResult />} />
                <Route path="/FindResultData" element={<FindResultData />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/' element={<LandingPage />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/ForgetPassword' element={<ForgetPassword />} />
                <Route path='/ResetPassword/:id' element={<ResetPassword />} />
                <Route path='/Body' element={
                <React.Suspense fallback={<Loading />}>
                <BodyLazy  /> 
                </React.Suspense>} />
                <Route path='/Result' Component={Result } />
                <Route path='/Events' element={<Events Switch={Switch}/>} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Prospectus' element={<Prospectus />} />
                <Route path='/Courses' element={
                  <React.Suspense fallback={<Loading />}>
                    <LazyCourse />
                  </React.Suspense>} />
                <Route path='/About' element={<About />} />
                <Route path='/Notification' element={<Notification />} />
                <Route path='/Admin' element={
                  <React.Suspense fallback={<Loading />} >
                    <LazyAdmin />
                  </React.Suspense>
                } />
                {/* database routes */}
                <Route path='/Courses/Database' element={<Database />} />
                <Route path='/Courses/DatabaseWk1File' element={<DatabaseWk1File/>} />
                <Route path='/Courses/DatabaseWk2File' element={<DatabaseWk2File/>} />
                <Route path='/Courses/DatabaseWk3File' element={<DatabaseWk3File/>} />
                <Route path='/Courses/DatabaseWk4File' element={<DatabaseWk4File/>} />
                <Route path='/Courses/Db4subFile' element={<Db4subFile/>} />

                {/* Business finance routes */}
               
                <Route path='/Courses/BusinessFinance' element={<BusinessFinance />} />
                <Route path='/Courses/BusinessFinanceWk1File' element={<BusinessFinanceWk1File/>} />
                <Route path='/Courses/BusinessFinanceWk2File' element={<BusinessFinanceWk2File/>} />
                <Route path='/Courses/BusinessFinanceWk3File' element={<BusinessFinanceWk3File/>} />
                <Route path='/Courses/BusinessFinanceWk4File' element={<BusinessFinanceWk4File/>} />

                 {/* Business Statistics routes */}

                <Route path='/Courses/BusinessStats' element={<BusinessStats />} />
                <Route path='/Courses/BusStatsWk1File' element={<BusStatsWk1File/>} />
                <Route path='/Courses/BusStatsWk2File' element={<BusStatsWk2File/>} />
                <Route path='/Courses/BusStatsWk3File' element={<BusStatsWk3File/>} />
                <Route path='/Courses/BusStatsWk4File' element={<BusStatsWk4File/>} />

                 {/* Programming routes */}
                <Route path='/Courses/ProgrammingI' element={<ProgammingI />} />
                <Route path='/Courses/ProgrammingWk1File' element={<ProgrammingWk1File />} />
                <Route path='/Courses/ProgrammingWk2File' element={<ProgrammingWk2File/>} />
                <Route path='/Courses/ProgrammingWk3File' element={<ProgrammingWk3File/>} />
                <Route path='/ProgrammingWk4File' element={<ProgrammingWk4File />} />

                 {/* Operating systems routes */}

                <Route path='/Courses/OperatingSystems' element={<OperatingSystems />} />
                <Route path='/Courses/OsWk1File' element={<OsWk1File />} />
                <Route path='/Courses/OsWk2File' element={<OsWk2File/>} />
                <Route path='/Courses/OsWk3File' element={<OsWk3File/>} />
                <Route path='/Courses/OsWk4File' element={<OsWk4File/>} />

                 {/* BigData routes */} 

                <Route path='/Courses/Bigdata' element={<Bigdata />} />
                <Route path='/Courses/BigDataWk1File' element={<BigDataWk1File />} />
                <Route path='/Courses/BigDataWk2File' element={<BigDataWk2File />} />
                <Route path='/Courses/BigDataWk3File' element={<BigDataWk3File />} />
                <Route path='/Courses/BigDataWk4File' element={<BigDataWk4File />} />
              
            </Routes>
            {isLoggedOut &&<span className='absolute flex py-2 items-center gap-1 bg-red-100 border-2 border-red-200 top-[15%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
               <ExclamationCircleOutlined/> Request timeout, stay logged in. {char} <button><CloseCircleOutlined /></button>
            </span> }

            {showButton && <div  onClick={handClick} 
            className='fixed cursor-pointer grid place-items-center z-2 bg-blue-300 
            right-10 bottom-10 rounded-[50%] h-[35px] w-[35px] hover:bg-blue-400'>
               <ArrowUpOutlined />
            </div> }
              {isPop &&<EventsPopUp popRef={popRef} >
              <div className='mt-[60px]'>hello world</div>
            </EventsPopUp>}
            <ProfileEdit>
               <h1>ProfileEdit</h1>
            </ProfileEdit>  
        </main>
    </div>
  )
}
export default Layout;