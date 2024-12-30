import Link from 'next/link'
import React from 'react'

const Ico = () => {
  return (
    <div className='token_box_warp white'>
        <div className="Runing_warp">
            <p>ICO Stage 16</p>
            <span className='runing'>Running</span>
        </div>
        <div className="Price">
            <p>1 XAI = 0.0195 USD</p>
            <span>1 USD = 0.000295 ETH</span>
        </div>
        <Link href="/user/contribute" className='Buy_btn'>Buy Token Now</Link>
    </div>
  )
}

export default Ico