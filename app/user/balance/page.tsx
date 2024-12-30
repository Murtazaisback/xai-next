import AccountStatus from '@/components/AccountStatus'
import React from 'react'

const Balance = () => {
  return (
    <div className='main_dash_row start'>
        <div className="dash_big">
        <h3 className='account_head'>My XAI Token</h3>
        <div className="balance_box">
            <div className="balc">
                <div className="balc_col">
                    <p className='Light'>Token Balance</p>
                    <span>0 XAI</span>
                    <p className='light_sm'>Equivalent to <strong>0 USD</strong></p>
                </div>
                <button className='Update_pro'>Buy More Token</button>
            </div>
            <div className="balc">
                <div className="balc_col">
                    <p className='Light'>Total Token Amount</p>
                    <span className='light_span'>0 XAI</span>
                    <div className="token_ul">
                        <div className="token_col">
                            <p>Purchased Token</p>
                            <p className='bold'>0 XAI</p>
                        </div>
                        <div className="token_col">
                            <p>Referral Token</p>
                            <p className='bold'>0 XAI</p>
                        </div>
                        <div className="token_col">
                            <p>Bonuses Token</p>
                            <p className='bold'>0 XAI</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="balc">
                <div className="balc_col">
                    <p className='Light'>Token Balance</p>
                    <span className='bold'>0 XAI</span>
                </div>
            </div>
        </div>
        </div>
        <div className="right_col">
        <AccountStatus />
        </div>
    </div>
  )
}

export default Balance