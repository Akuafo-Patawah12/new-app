import React from 'react'
import DBMSdata from './DBMSdata';
import {  BarChartOutlined, FileOutlined,  FilePdfTwoTone, LinkOutlined, PieChartTwoTone } from '@ant-design/icons';

const Database = () => {
  return (
    <div className='flex flex-col gap-2 bg-gray-200  mt-[50px] pt-4'>
      <div className='w-[95%] mx-auto pl-3 my-4 bg-white border-2 border-black md:w-[90%] lg:w-[80%]'>
        <h2 className='font-medium '>Quiz dates</h2>
        <p>Quiz 1: March 2023,  5:00pm</p>
        <p>Quiz 2: October 2023,  7:00pm</p>
        <p>Quiz 3: November 2023,  3:00pm</p>
      </div>
        <DBMSdata link='/Courses/DatabaseWk1File' name='File' info='Definitions of databases and ER diagrams' week={1} desc='Intro to databases' icon={<FileOutlined />} />
        <DBMSdata link='/Courses/DatabaseWk2File' name='File' info='MySQl editor installment.' week={2} desc='SQL set up' icon={<FileOutlined />} />
        <DBMSdata link='/Courses/DatabaseWk3File'  name='File' info='How to create databases and how to query them' week={3} desc='Creating my new database file' icon={<FileOutlined  />} />
        <DBMSdata link='/Courses/Db4subFile' name='Quiz' info='Quiz will be set from topics from week one to week 3,' week={4} desc='' icon={<BarChartOutlined />}/>
        <DBMSdata link='' name='File' info='information' week={5} desc='' icon={<PieChartTwoTone />} />
        <DBMSdata link='' name='URL' info='information' week={6} desc='' icon={<LinkOutlined />} />
        <DBMSdata link='' name='Quiz' info='information' week={7} desc='' icon={<PieChartTwoTone />} />
        <DBMSdata link='' name='File' info='information' week={8} desc='' icon={<FileOutlined />} />
        <DBMSdata link='' name='Exams' info='information' week={9} desc='' icon={<PieChartTwoTone />} />
        <DBMSdata link='' name='Past Questions' week={9} icon={<FilePdfTwoTone />} />
    </div>
  )
}

export default Database;