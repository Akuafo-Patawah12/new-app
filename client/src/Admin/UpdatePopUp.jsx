import React from 'react';
import  ReactDom  from 'react-dom';
export default function UpdatePopUp({children,popRef}){
    return ReactDom.createPortal(
        <div  className='Cs'>
        <div  ref={popRef} className=' fixed pt-3 w-[250px] bg-stone-300 h-[300px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          {children}
        </div>
      </div>,
      document.getElementById('Update')
    
    )
  }