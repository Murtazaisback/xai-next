import React from 'react'
import { FaEthereum, FaBtc, FaInfo, FaWallet  } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiBnbchain, SiTether, SiSolana } from "react-icons/si";



const Currency = () => {
    return (
        <>
            <div className="currency_warp">

                <div className="currency_head">

                    <h1>Choose currency and calculate XAI token price</h1>
                    <p>You can buy our XAI token using the below currency choices to become part of our project.</p>
                </div>
                <div className="currency_selection">


                    <div className="currency_select">
                        <div className="coin_logo">
                            <FaEthereum />
                            <p>ETH</p>
                        </div>
                        <div className="coin_amount">
                            <p>0.000006 ETH</p>
                        </div>
                    </div>
                    <div className="currency_select">
                        <div className="coin_logo">
                            <FaBtc />
                            <p>BTC</p>
                        </div>
                        <div className="coin_amount">
                            <p>0 BTC</p>
                        </div>
                    </div>
                    <div className="currency_select">
                        <div className="coin_logo">
                            <SiBnbchain />
                            <p>BNB</p>
                        </div>
                        <div className="coin_amount">
                            <p>0.000027 BNB</p>
                        </div>
                    </div>
                    <div className="currency_select">
                        <div className="coin_logo">
                            <SiTether />
                            <p>USDT</p>
                        </div>
                        <div className="coin_amount">
                            <p>0.01952 USDT</p>
                        </div>
                    </div>
                    <div className="currency_select">
                        <div className="coin_logo">
                            <BsCurrencyDollar />
                            <p>USDC</p>
                        </div>
                        <div className="coin_amount">
                            <p>0.0195 USDC</p>
                        </div>
                    </div>
                    <div className="currency_select">
                        <div className="coin_logo">
                            <SiSolana />
                            <p>SOL</p>
                        </div>
                        <div className="coin_amount">
                            <p>0.000099 SOL</p>
                        </div>
                    </div>
                </div>
                <div className="currency_content">
                    <h3>Amount of contribute</h3>
                    <p>Enter the amount you would like to contribute in order to calculate the amount of tokens you will receive. The calculator below helps to convert the required quantity of tokens into the amount of your selected currency.</p>
                </div>
                <div className="price_input">
                    <div className="input_price_box">
                        <input type="text" min="15380" max="18000000" />
                        <p>AXI</p>
                    </div>
                    <div className="input_price_content">
                        <p>=</p>
                        <p className='currnecy_infos'>
                            <span className='currency_value'>0.000006</span>
                            <span className='Currency_name'>ETH</span>
                        </p>
                    </div>
                </div>
                <div className='min_value_p'>
                    <FaInfo />
                    <span>0.09228 ETH</span>
                    <p>(15,380 XAI) Minimum contribution amount is required.</p>
                </div>
                <div className="bonus-bar">
                <div className="bonus-extra">
                    <div className="bonus-extra-item">
                    <span className="bonus-extra-amount">60000 XAI</span>
                    <span className="bonus-extra-percent">5%</span>
                    </div>
                    <div className="bonus-extra-item item2">
                    <span className="bonus-extra-amount">300000 XAI</span>
                    <span className="bonus-extra-percent">10%</span>
                    </div>
                    <div className="bonus-extra-item item3">
                    <span className="bonus-extra-amount">1200000 XAI</span>
                    <span className="bonus-extra-percent">20%</span>
                    </div>
                </div>
                </div>
                <div className="bonus_box">
                    <div className="sale_bonus">
                        <p>+ Sale Bonus 0%</p>
                        <span>0</span>
                    </div>
                    <div className="amount_bonus">
                        <p>+ Amount Bonus</p>
                        <span>0</span>
                    </div>
                    <div className="total_bonus">
                        <p>Total XAI</p>
                        <span>5550.00</span>
                    </div>
                </div>
                <p className='red_p'>Your contribution will be calculated based on exchange rate at the moment when your transaction is confirmed.</p>
                <button className='makePay'><p>Make Payment</p> <FaWallet /> </button>
                <div className="border-sec"></div>
                <p className='italci'>Tokens will appear in your account after payment successfully made and approved by our team. Please note that, XAI token will be distributed after the token sales end-date.</p>
            </div>
        </>
    )
}

export default Currency