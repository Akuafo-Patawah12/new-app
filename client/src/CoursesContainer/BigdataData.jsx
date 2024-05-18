import React from 'react';
import { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const BigdataData = (props) => {
    const [accordion,setAccordion] = useState(false);
    const action = () =>{
        setAccordion(prevVal => !prevVal);
    }
  return (
    <div>
        <div className={`transit bg-white overflow-hidden w-[95%] h-[80px] mx-auto rounded-lg py-2 px-3 
                          shadow-xl md:w-[90%] lg:w-4/5
                          ${accordion? " h-[80px]" : " h "}`}>
          <div>
            <h2 className='font-bold flex gap-1'>
              <button onClick={action} 
              className={`w-6 h-6 bg-gray-300 border-2 border-stone-700 transition rounded-[50%] grid place-items-center
             `}>
                {accordion ? <PlusOutlined />:<MinusOutlined />}
               </button>
              {`WEEK ${props.week}`}
            </h2>
          </div >
          <div className='flex gap-3 mt-1'>
          <Link to={props.link}>
            <button className='bg-blue-300 w-[30px] h-[30px] rounded-[50%] grid place-items-center '>
            {props.icon}
          </button>
          </Link>
          <section className='flex flex-col'>
            <Link to={props.link}>
            <div className='font-bold mb-4'>{props.name}</div>
            </Link>
            <span>{props.desc}</span>
          </section>
          </div>
          
          <section className='h-[100px] bg-gray-200 mt-4'>
               {props.info}
          </section>
        </div>
    </div>
  )
}

export default BigdataData;