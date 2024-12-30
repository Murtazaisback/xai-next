import Link from 'next/link'
import React from 'react'

const AccountStatus = () => {
  return (
    <div className='token_box_warp white'>
        <div className="status_head">
            <p>Your Account Status</p>
            <button>Email Verifed</button>
        </div>
        <div className="wallet_rec">
            <p>Receiving Wallet</p>
            <div className="add_waller">
                <p>Add Your Wallet Address</p>
                <button>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default AccountStatus