import React from 'react';
import OsData from './OsData';
import { FileOutlined } from '@ant-design/icons';

const OperatingSystems = () => {
  return (
    <div className='flex flex-col gap-2 bg-gray-200  mt-[50px] pt-4'>
    <div className='w-[95%] mx-auto pl-3 my-4 bg-white border-2 border-black md:w-[90%] lg:w-[80%]'>
    <h2 className='font-medium '>Quiz dates</h2>
    <p>Quiz 1: March 2023,  5:00pm</p>
    <p>Quiz 2: October 2023,  7:00pm</p>
  </div>
    <OsData link='/OsWk1File' name='File' week={1} desc='Intro to Business Statistics' icon={<FileOutlined />}/>
    <OsData link='/OsWk2File' name='File' week={2} desc='Probability' icon={<FileOutlined />}/>
    <OsData link='/OsWk3File' name='File' week={3} desc='Median,mean and mode' icon={<FileOutlined />}/>
    <OsData link='/' name='File' week={4} desc='Histograms' icon={<FileOutlined />}/>
    <OsData link='/' name='File' week={5} desc='Bar charts' icon={<FileOutlined />}/>
    <OsData link='/' name='File' week={6} desc='Object and object destructuring' icon={<FileOutlined />}/>
    <OsData link='/' name='File' week={7} desc='Array methods' icon={<FileOutlined />}/>
    <OsData link='/' name='File' week={8} desc='Oops' icon={<FileOutlined />}/>
    <OsData link='/' name='File' week={9} desc='Errors' icon={<FileOutlined />}/>
</div>
  )
}

export default OperatingSystems;