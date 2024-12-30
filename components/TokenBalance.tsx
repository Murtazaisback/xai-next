import React from 'react'
import { FaInfo } from "react-icons/fa";


const TokenBalance = () => {
  return (
    <div className='token_box_warp'>
        <div className="token_box">
            <div className="token_img-box">
            <img src="/image-removebg-preview (14).png" alt="User Icon" className="nav_img" />
            </div>
            <div className="token_ps">
                <p className='yellow_p'>Token Balance</p>
                <p className='content_p'>0 <span className='ALM-span'>XAI</span ><span className='fainfo'><FaInfo className='' size="7" color='#7668fe'/></span> </p>
            </div>
        </div>
        <div className="token_box col">
            <p className='yellow_p'>Your Contribution in</p>
            <div className="tokens_infos">
                <div className="token_info">
                    <p>~</p>
                    <p>USD</p>
                </div>
                <div className="token_info">
                    <p>~</p>
                    <p>ETH</p>
                </div>
                <div className="token_info">
                    <p>~</p>
                    <p>ETH</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TokenBalance