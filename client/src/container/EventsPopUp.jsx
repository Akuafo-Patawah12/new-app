import React from 'react';
import  ReactDom  from 'react-dom';
import { CloseOutlined } from '@ant-design/icons';

export default function EventsPopUp({children,popRef}){
    return ReactDom.createPortal(
        <div  className='Css'>
        <div  ref={popRef} className=' fixed w-[80%] h-[70%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-[80%] bg-white rounded-lg mg:w-[50%] lg:w-[30%]'>
        <button className='absolute right-5 top-5'>
          <CloseOutlined />
        </button>
        {children}
        </div>
      </div>,
      document.getElementById('modal')
    
    )
  }
