import AccountStatus from '@/components/AccountStatus'
import Ico from '@/components/Ico'
import TokenBalance from '@/components/TokenBalance'
import React from 'react'

const DashBoard = () => {
  return (
    <div className='main_dash_row'>
        <TokenBalance/>
        <Ico/>
        <AccountStatus/>
    </div>
  )
}

export default DashBoard