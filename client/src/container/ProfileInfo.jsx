import React from 'react'

const ProfileInfo = (props) => {
  return (
    <div className='bg-white p-3 rounded-lg w-[100px] shadow-lg h-[100px]'>
    <div>{props.name}</div>
    <h1>{props.info}</h1>
    </div>
  )
}

export default ProfileInfo;