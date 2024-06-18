  import React from 'react';
import BigdataData from './BigdataData';
import { FileOutlined } from '@ant-design/icons';

const Bigdata = () => {
  return (
    <div className='flex flex-col gap-2 bg-gray-200 mt-[50px] pt-4'>
    <div className='w-[95%] mx-auto pl-3 my-4 bg-white border-2 border-black md:w-[90%] lg:w-[80%]'>
    <h2 className='font-medium '>Quiz dates</h2>
    <p>Quiz 1: March 2023,  5:00pm</p>
    <p>Quiz 2: October 2023,  7:00pm</p>
    <p>Quiz 2: December 2023,  7:00pm</p>
  </div>
    <BigdataData link='/Courses/BigData/BigDataWk1File' name='File' week={1} info='one' desc='Intro to Big Data' icon={<FileOutlined />}/>
    <BigdataData link='/Courses/BigData/BigDataWk2File' name='File' week={2} info='two' desc='Annuity cost' icon={<FileOutlined />}/>
    <BigdataData link='/Courses/BigData/BigDataWk3File' name='File' week={3} info='three' desc='Variables' icon={<FileOutlined />}/>
    <BigdataData link='' name='File' week={4} info='four' desc='Functions' icon={<FileOutlined />}/>
    <BigdataData link='' name='File' week={5} info='five' desc='Loops in programming' icon={<FileOutlined />}/>
    <BigdataData link='' name='File' week={6} info='six' desc='Object and object destructuring' icon={<FileOutlined />}/>
    <BigdataData link='' name='File' week={7} info='seven' desc='Array methods' icon={<FileOutlined />}/>
    <BigdataData link='' name='File' week={8} info='eight' desc='Oops' icon={<FileOutlined />}/>
    <BigdataData link='' name='File' week={9} info='nine' desc='Errors' icon={<FileOutlined />}/>
   </div>
  )
} 

export default Bigdata;