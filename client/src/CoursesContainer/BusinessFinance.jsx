import React from 'react'
import BusinessFinanceData from './BusinessFinanceData';
import { FileOutlined } from '@ant-design/icons';

const BusinessFinance = () => {
  return (
    <div className='flex flex-col gap-2  mt-[50px] bg-gray-200 pt-4'>
        <div className='w-[95%] mx-auto pl-3 my-4 bg-white border-2 border-black md:w-[90%] lg:w-[80%]'>
        <h2 className='font-medium '>Quiz dates</h2>
        <p>Quiz 1: March 2023,  5:00pm</p>
        <p>Quiz 2: October 2023,  7:00pm</p>
      </div>
        <BusinessFinanceData link='/Courses/BusinessFinance/BusinessFinanceWk1File' name='File' week={1} desc='Intro to Business Finance' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/Courses/BusinessFinance/BusinessFinanceWk2File' name='File' week={2} desc='Annuity cost' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/Courses/BusinessFinance/BusinessFinanceWk3File' name='File' week={3} desc='Variables' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/' name='File' week={4} desc='Functions' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/' name='File' week={5} desc='Loops in programming' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/' name='File' week={6} desc='Object and object destructuring' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/' name='File' week={7} desc='Array methods' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/' name='File' week={8} desc='Oops' icon={<FileOutlined />}/>
        <BusinessFinanceData link='/' name='File' week={9} desc='Errors' icon={<FileOutlined />}/>
    </div>
  )
}

export default BusinessFinance;