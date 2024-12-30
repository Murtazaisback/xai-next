'use client'
// import Nav from '@/components/nav'
import UserNav from '@/components/UserNav';
import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode; // Explicitly define the type for children
  }

const UsersLayout : React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <UserNav/>
        <div className="User_boxs">
        <div className="User_boxs-warp">


        {children}
        </div>
        </div>
    </div>
  )
}

export default UsersLayout