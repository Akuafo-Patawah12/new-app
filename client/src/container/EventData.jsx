
import {  CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons"
import React from 'react'
import { FaGraduationCap, FaRegBell } from "react-icons/fa";

const EventData = ({time,course_event,course_name,about}) => {
  return (
    <div  className='bg-gray-200 shadow-xl overflow-hidden rounded-lg mx-auto w-[90%] mt-4'>
      <div className='bg-blue-300 w-full h-[30px] flex'>
      <div className="w-[10%] h-full  grid place-items-center "><FaRegBell /></div>
      <h2 className="font-medium py-auto ml-4  h-full">{about}</h2>
      </div>
      <div className="flex">
      <section className="bg-blue-100 border-r-[1px]  border-stone-300 w-[10%] flex flex-col gap-[6px] justify-center align-center">
      <div className="mx-auto"><ClockCircleOutlined /></div>
      <div className="mx-auto"><CalendarOutlined /></div>
      <div className="mx-auto"><FaGraduationCap /></div>
      </section>
      <section className="flex flex-col ml-4  ">
        <p >{time} </p>
        <p >{course_event} </p>
        <p >{course_name} </p>
      </section>
      </div>
    </div>
  )
}

export default EventData;
