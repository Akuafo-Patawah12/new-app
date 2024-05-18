import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react';
import EventData from './EventData';


const Events = ({Switch}) => {
  const info=[
    {
      img:'../Security.jpg',
      date:'23rd Dec',
      desc:'hello',
    },
    {
      img:'../images/Sport.jpg',
      date:'12th Nov',
      desc:'gademit',
    },
    {
      img:'../images/Entertainment.jpg',
      date:'16th May',
      desc:'holla ballo',
    },
    {
      img:'../images/Band.jpg',
      date:'21th Aug',
      desc:'john',
    },
    {
      img:'../images/Foto.jpg',
      date:'6th Mar',
      desc:'koko miko',
    },
  ];
  const image=[
    {
      id: 1,
      img:'../images/feet.jpg',
    },
    {
      id: 2,
      img:'../images/Entertainment.jpg',
    },
    {
      id: 3,
      img:'../images/Band.jpg',
    },
  ];
  
  const NewImage= 
    image.map(img =>(
    
    <img className='w-[33.33%] object-cover' alt='pic' key={img.id} src={img.img}></img>
    ));
  return (
    <div className='mt-[60px]'>
        <h3 className='mx-auto mt-6 font-bold text-lg w-[100px] bg-gray-300 grid place-items-center border-b-2 border-blue-300'>Events</h3>
        <section className='mt-3 flex flex-wrap w-[90%] pb-2 mb-2 gap-2 mx-auto shadow-lg justify-center md:w-[80%] lg:w-[70%]'>
         
         {info.map((item,index) =>(
                  <div key={index} className='flex h-[70px]'>
                  <div className='w-[90px] h-full bg-gray-400'><img className=' object-cover h-full' alt='foto' src={item.img}></img></div>
                  <div className='w-[200px] h-full bg-blue-300'>{item.description}</div>
                  <div className='grid place-items-center font-medium w-[80px] h-full bg-blue-400'>{item.date}</div>
                  </div> 

         ))} 
    
        </section>
        <div className='w-[90%] h-[220px] mx-auto justify-between flex gap-2 shadow-lg md:w-[80%] lg:w-[70%]'>
          <img src='../images/foto.jpg'className='w-[50%]' alt='foto'></img>
          <div className='w-[50%] pl-10 '>
            <h2 className='font-medium mt-10 '><span className='border-b-blue-300 border-b-2'>About</span> the <span className='text-blue-400'>program</span></h2>
            <p className='pb-10'>the program is about...</p>
            <button className='bg-blue-300 p-2 shadow-lg' onClick={Switch}>click me</button>
            <button className=' p-2 shadow-lg'><ArrowLeftOutlined /></button>
          </div>    
        </div>
        <div className='flex h-[250px] shadow-lg w-[90%] bg-yellow-200 mx-auto mt-2 gap-1 md:w-[80%] lg:w-[70%]'>
           {NewImage}
        </div>
           <div>
            <EventData
              about='Mid-term exams begins' 
              time='26th March 2023, 8:30am' 
              course_event='Academic Event.' 
              course_name='Principles of Economics'
            />
            <EventData  
              about='Mid-term exams ends' 
              time='15th January 2023, 4:30pm' 
              course_event='Academic Event.' 
              course_name='Database'/>
            <EventData  
              about='Examination begins' 
              time='1st May 2023, 4:00pm' 
              course_event='Academic Event.' 
              course_name='Marketing'
            />
            <EventData  
              about='Examination ends' 
              time='3rd october 2023, 6:00pm' 
              course_event='Academic Event.' 
              course_name='Graphic Design'
            />
            <EventData   />
           </div>
        
       
    </div>
  )
}

export default Events;