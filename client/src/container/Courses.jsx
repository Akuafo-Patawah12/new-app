import React from 'react';
import Coursesbox from './Coursesbox';
import { DataProvider } from '../components/DataProvider';

const Courses = () => {
  return (
    <div className='mt-[60px]'>
      <h3 className='w-[100px] mt-6 mx-auto bg-gray-200 grid place-items-center mt-6 font-bold border-b-2 border-blue-300 text-lg'>Courses</h3>
      <DataProvider>
          <Coursesbox />
      </DataProvider>
    </div>
  )
}

export default Courses;