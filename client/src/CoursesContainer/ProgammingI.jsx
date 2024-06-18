import React from 'react'
import Programmingi_Data from './Programmingi_Data';
import { FileOutlined } from '@ant-design/icons';

const ProgammingI = () => {
  return (
    <div className='flex flex-col gap-2 bg-gray-200  mt-[50px] pt-4'>
      <div className='w-[95%] mx-auto pl-3 my-4 bg-white border-2 border-black md:w-[90%] lg:w-[80%]'>
        <h2 className='font-medium '>Quiz dates</h2>
        <p>Quiz 1: March 2023,  5:00pm</p>
        <p>Quiz 2: October 2023,  7:00pm</p>
        <p>Quiz 3: November 2023,  3:00pm</p>
        <p>Quiz 4: November 2023,  5:30pm</p>
      </div>
        <Programmingi_Data link='/Courses/ProgammingI/ProgrammingWk1File' name='File' week={1} desc='Fundamentals of programming' icon={<FileOutlined />}/>
        <Programmingi_Data link='/Courses/ProgammingI/ProgrammingWk2File' name='File' week={2} desc='Setting up a code editor' icon={<FileOutlined />}/>
        <Programmingi_Data link='/Courses/ProgammingI/ProgrammingWk3File' name='File' week={3} desc='Variables' icon={<FileOutlined />}/>
        <Programmingi_Data link='/' name='File' week={4} desc='Functions' icon={<FileOutlined />}/>
        <Programmingi_Data link='/' name='File' week={5} desc='Loops in programming' icon={<FileOutlined />}/>
        <Programmingi_Data link='/' name='File' week={6} desc='Object and object destructuring' icon={<FileOutlined />}/>
        <Programmingi_Data link='/' name='File' week={7} desc='Array methods' icon={<FileOutlined />}/>
        <Programmingi_Data link='/' name='File' week={8} desc='Oops' icon={<FileOutlined />}/>
        <Programmingi_Data link='/' name='File' week={9} desc='Errors' icon={<FileOutlined />}/>
    </div>
  )
}

export default ProgammingI;