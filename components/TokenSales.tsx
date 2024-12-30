import React from 'react'

const TokenSales = () => {
  return (
    <div className='token_box_warp white'>
    <div className="Runing_warp">
        <p>Token Sales</p>
    </div>
    <div className="token_price">
        <p className='Light_p'>XAI Token Price</p>
        <p>1 XAI =  <span>0.0195 USD</span></p>
    </div>
    <div className="token_price">
        <p className='Light_p'>Exchange Rate</p>
        <p>1 USD = 0.9585 EUR = 0.7953 GBP</p>
    </div>
</div>
  )
}

export default TokenSales