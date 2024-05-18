import React from 'react'
import { createPortal } from 'react-dom'

const ProfileEdit = ({children}) => {
  return createPortal(
    <div className='hidden z-[60] inset-0'>{children}</div>
    ,document.getElementById('Profile')
  )
}

export default ProfileEdit