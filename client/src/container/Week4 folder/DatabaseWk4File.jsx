import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function DatabaseWk4File () {
    const exams=[
        {
            question:'1. what is matter',
           
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn1"></input>
            matter is an thing that occupies space
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn1"></input>
            Matter is a stone
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn1"></input>
            Matter is a liquid
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn1"></input>
            Matter is anyting that has mass
            </label>
          },
        {
          question:'2. what is matter',
         
          Ans1:<label className='flex gap-1 items-center'>
          <input type='radio' name="radio-btn2"></input>
          matter is an thing that occupies space
          </label>,
          Ans2: <label className='flex gap-1 items-center'>
          <input type='radio' name="radio-btn2"></input>
          Matter is a stone
          </label>,
          Ans3:<label className='flex gap-1 items-center'>
          <input type='radio' name="radio-btn2"></input>
          Matter is a liquid
          </label>,
          Ans4:<label className='flex gap-1 items-center'>
          <input type='radio' name="radio-btn2"></input>
          Matter is anyting that has mass
          </label>
        },
        {
            question:'3. what is water',
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn3"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn3"></input>
            water can be drank
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn3"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn3"></input>
            Matter is anyting that has mass
            </label>
            
        },
        {
            question:'4. First man on earth',
            
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn4"></input>
            Adam
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn4"></input>
            Patawah Akuafo Andrew
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn4"></input>
            John Adjei
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn4"></input>
            Atswei Zanzama
            </label>
        },
        {
            question:'5. who first bought pure water',
           
            
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn5"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn5"></input>
            water can be drank
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn5"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn5"></input>
            Matter is anyting that has mass
            </label>
        },
        {
            question:'6. what is water',
        
            
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn6"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn6"></input>
            water can be drank
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn6"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn6"></input>
            Matter is anyting that has mass
            </label>
        },
        {
            question:'7. what is water',
           
            
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn7"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn7"></input>
            water can be drank
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn7"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn7"></input>
            Matter is anyting that has mass
            </label>
        },
        {
            question:'8. what is water',
            
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn8"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn8"></input>
            water can be drank
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn8"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn8"></input>
            Matter is anyting that has mass
            </label>
        },
        {
            question:'9. what is water',
           
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn9"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn9"></input>
            water can be drank
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn9"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn9"></input>
            Matter is anyting that has mass
            </label>
        },
        {
            question:'10. what is water',
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn10"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn10"></input>
            water can be drank
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn10"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn10"></input>
            Matter is anyting that has mass
            </label>
        },
        {
            question:'11. what is water',
           
            Ans1:<label className='flex gap-1 items-center'>,
            <input type='radio' name="radio-btn11"></input>
            water is liquid
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn11"></input>
            water can be drankJohn Dumelo
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn11"></input>
            it is edible
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn11"></input>
            Matter is anyting that has mass
            </label>
        },
        {
            question:'12. Who developed C++ Programming language?',
           
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn12"></input>
            Bjarne Stroustrup
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn12"></input>
            John Dumelo
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn12"></input>
            Akwasi Akurugu
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn12"></input>
            Mark Zucerberg
            </label>
        },
        {
            question:'13. Who developed python programming language?',
            
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn13"></input>
            Kofi Annan
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn13"></input>
            Simon Dels
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn13"></input>
            Guido Van Rossum
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn13"></input>
            Kwesi Nyantakyi
            </label>
        },
        {
            question:'14. How many bits make a Byte?',
           
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn14"></input>
            1 bit
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn14"></input>
            2 bit
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn14"></input>
            4 bit
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn14"></input>
            8 bit 
            </label>
        },
        {
            question:'15. Who was the first computer programmer',
              
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn15"></input>
            Atswei Bartholomeow
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn15"></input>
            Ada lovelace
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn15"></input>
            Ada Jesus
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn15"></input>
            Andy Smith 
            </label>
        },
        {
            question:'16. When was the first computer invented',
              
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn16"></input>
            1822
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn16"></input>
            1938
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn16"></input>
            2000
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn16"></input>
            1989
            </label>
        },
        {
            question:'17. Who inventer the first mobile phone',   
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn17"></input>
            Patawah Akuafo Andrew
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn17"></input>
            Martin Luther
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn17"></input>
            Martin Cooper
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn17"></input>
            Martin Patawah
            </label>
        },
        {
            question:'18. What is an application software',   
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn18"></input>
            A software that performs a specific task
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn18"></input>
            A mobile app
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn18"></input>
            A desktop app
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn18"></input>
            An application that can be downloaded
            </label>
        },
        {
            question:'19. What is the outcome of this code console.log(2+3)',
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn19"></input>
            2+3
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn19"></input>
            4
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn19"></input>
            5
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn19"></input>
            -5
            </label>
        },
        {
            question:'20. What is the function of register in the CPU',
            Ans1:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn20"></input>
            It stores data and instructions for quick processing
            </label>,
            Ans2: <label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn20"></input>
            it stores students names
            </label>,
            Ans3:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn20"></input>
            It helps the CPU to function quick
            </label>,
            Ans4:<label className='flex gap-1 items-center'>
            <input type='radio' name="radio-btn20"></input>
            For processing data
            </label>
        },
    ]
   
  

    const [previous, setPrevious]= useState(false);
    const [next, setNext]= useState(false);
    const [quest,setQuest ]= useState(0);
    const [quest1, setQuest1 ] = useState(1);
    const [quest2, setQuest2 ] = useState(2);
    const [quest3, setQuest3 ] = useState(3);
    const [quest4, setQuest4 ] = useState(4);
    function nextQuestion(){
         setQuest(preVal=> preVal + 5);
         setQuest1(preVal=> preVal + 5);
         setQuest2(preVal=> preVal + 5);
         setQuest3(preVal=> preVal + 5);
         setQuest4(preVal=> preVal + 5);    
    }
    function prevQuestion(){
        setQuest(preVal=> preVal - 5);
        setQuest1(preVal=> preVal - 5);
        setQuest2(preVal=> preVal - 5);
        setQuest3(preVal=> preVal - 5);
        setQuest4(preVal=> preVal - 5);   
   }
   useEffect(()=>{
    quest > 0 ? setPrevious(true) : setPrevious(false);
    quest===15 ? setNext(false) : setNext(true);
   })
   const [seconds, setSeconds] = useState(60);
   const [minutes, setMinutes] = useState(4);
   const [zero,setZero ] = useState(false);
   const [zero1,setZero1 ] = useState(false);
   const [color,setColor] =useState(false);
   useEffect(()=>{
       const timer=setInterval(() => {
           setSeconds(prevValue=> prevValue-1);
       },1000);
       if(seconds===0){
           setMinutes(preVal=>preVal-1);
           setSeconds(59);
       }
       if(minutes=== 0 ){if(seconds===1){clearInterval(timer); } }
       minutes<10 ? setZero(true) : setZero(false);
       seconds<10 ? setZero1(true) : setZero1(false);
        minutes<4 ?setColor(true) : setColor(false);
       
       return()=>{ clearInterval(timer);}
   },[minutes,seconds]);
      return (
        <div  className='bg-gray-200 mt-6 pt-[45px]'>
            <div className={` fixed top-[55px]  px-1 right-4  ${color ? "bg-red-300" : "bg-blue-300"}`}>
                {`Time left ${zero ? 0: ""}${minutes}:${zero1 ? 0: ""}${seconds}`}
            </div>
    <div className=' w-[90%] mx-auto md:w-[70%] lg:w-[70%]'>
        <form className='flex flex-col gap-2' >
            <div className='flex flex-col border-[1px] rounded-md shadow-xl bg-white'>
        <p className='ml-[5%]'>{exams[quest].question}</p>
        <div className='ml-auto pl-1 w-[95%] flex flex-col border-2 border-blue-300'>
        
        <div>{exams[quest].Ans1}</div> 
       
        
        <div>{exams[quest].Ans2}</div> 
       
        
        <div>{exams[quest].Ans3} </div>
        
       
       
        <div>{exams[quest4].Ans4}</div> 
        
        </div>
       </div>
       <div className='flex flex-col border-[1px]  rounded-md shadow-xl bg-white'>
        <p className='ml-[5%]'>{exams[quest1].question}</p>
        <div className='ml-auto pl-1 w-[95%] flex flex-col border-2 border-blue-300'>
        
        <div>{exams[quest1].Ans1}</div> 
       
        <div>{exams[quest1].Ans2} </div>
       
        <div>{exams[quest1].Ans3} </div>
       
       <div> {exams[quest1].Ans4} </div>
       
        </div>
       </div>
       <div className=' flex flex-col border-[1px] rounded-md shadow-xl bg-white'>
        <p className='ml-[5%]'>{exams[quest2].question}</p>
        <div className='ml-auto pl-1 w-[95%] flex flex-col border-2 border-blue-300'>
        
        <div> {exams[quest2].Ans1} </div>
        
        <div>{exams[quest2].Ans2} </div>
        
        <div>{exams[quest2].Ans3}</div> 
    
        <div> {exams[quest2].Ans4} </div>
        
        </div>
       </div>
       <div className='flex flex-col border-[1px] rounded-md shadow-xl bg-white'>
        <p className='ml-[5%]'>{exams[quest3].question}</p>
        <div className='ml-auto pl-1 w-[95%] flex flex-col border-2 border-blue-300'>
        
        <div>{exams[quest3].Ans1}</div> 
        
        <div>{exams[quest3].Ans2} </div>
       
        <div>{exams[quest3].Ans3} </div>
        
        <div>{exams[quest3].Ans4}</div> 
        
        </div>
       </div>
       <div className='flex flex-col border-[1px] rounded-md shadow-xl bg-white'>
        <p className='ml-[5%]'>{exams[quest4].question}</p>
        <div className='ml-auto pl-1 w-[95%] flex flex-col border-2 border-blue-300'>
        
        <div>{exams[quest4].Ans1} </div>
        
       <div> {exams[quest4].Ans2} </div>
       
        <div>{exams[quest4].Ans3} </div>
       
        <div>{exams[quest4].Ans4}</div> 
        
        </div>
       </div>
      
        </form> 
        <div className='bg-yellow-100' >
       {previous && <button onClick={prevQuestion} className='w-[100px]  float-left mt-3 h-[40px] bg-blue-300 flex items-center justify-center'><LeftOutlined />Previous</button>}
        {next && <button onClick={nextQuestion} className='w-[80px] float-right mt-3 h-[40px] bg-blue-300 flex items-center justify-center'>Next<RightOutlined /></button>}
        </div>
    </div>
    </div>
  )
}
