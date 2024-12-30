import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";


const Transactions = () => {
  return (
    <div className='main_dash_row'>
        <div className="transaction_box">
            <h3>Transactions list</h3>
            <div className="Search">
                <FaSearch color='#abbbd9' size="14"/>
                <input type="text" />
                <div className="fagear">

                <CiSettings className='' color='#495463' size="17"/>
                </div>
            </div>
            <div className="trans_headings">
                <p>Tranx NO</p>
                <p>Tokens</p>
                <p>Amount</p>
                <p>USD Amount</p>
                <p>To</p>
                <p>Type</p>
                <p></p>
            </div>
            <strong className='main_st'>No Transaction records found</strong>
        </div>
    </div>
  )
}

export default Transactions