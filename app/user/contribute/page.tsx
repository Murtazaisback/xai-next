'use client'
import TokenBalance from '@/components/TokenBalance'
import TokenSales from '@/components/TokenSales'
import React, { useState } from "react";
import { FaEthereum, FaBtc, FaRegCopy, FaInfo, FaWallet,  } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiBnbchain, SiTether, SiSolana } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { MdArrowRightAlt } from "react-icons/md";
import ReactQRCode from 'react-qr-code';


import { FaX } from 'react-icons/fa6';

const calculateBonusPercentage = (xaiAmount: number): number => {
  if (xaiAmount >= 1200000) {
    return 20;
  } else if (xaiAmount >= 300000) {
    return 10;
  } else if (xaiAmount >= 60000) {
    return 5;
  }
  return 0;
};

const getBonusWidth = (bonusPercentage: number): string => {
  switch (bonusPercentage) {
    case 5:
      return "33%";
    case 10:
      return "66%";
    case 20:
      return "100%";
    default:
      return "0%";
  }
};

const Contribute = () => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isThirdPopupOpen, setIsThirdPopupOpen] = useState(false);  // Third popup state


   // Toggle first popup
   const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Open second popup and close first one
  const openSecondPopup = () => {
    setIsPopupOpen(false);  // Close the first popup
    setIsSecondPopupOpen(true);  // Open the second popup
  };

  // Close second popup
  const closeSecondPopup = () => {
    setIsSecondPopupOpen(false);
  };

  // Open third popup and close second one
  const openThirdPopup = () => {
    setIsSecondPopupOpen(false);  // Close the second popup
    setIsThirdPopupOpen(true);  // Open the third popup
  };

  // Close third popup
  const closeThirdPopup = () => {
    setIsThirdPopupOpen(false);
  };
  const [selectedCurrency, setSelectedCurrency] = useState<string>("ETH");
  const [coinRates] = useState<Record<string, number>>({
    ETH: 0.000006,
    BTC: 0.00000004,
    BNB: 0.000028,
    USDT: 0.01952,
    USDC: 0.0195,
    SOL: 0.000102,
  });

  const [paymentAddress, setPaymentAddress] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Handle input change
  const handleAddressChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPaymentAddress(value);

    // Check if the value starts with "0x" and is not empty
    if (value && value.startsWith('0x')) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const [xaiAmount, setXaiAmount] = useState<number>(0); // State to track the input value for XAI
  const [convertedAmount, setConvertedAmount] = useState<number>(0); // State to store the calculated value
  const minimumXaiAmount = 15380; // Minimum required XAI value
  const address = "0x7d4046c163f2a4B78f92baC760effA9B62E82528";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard');
  };


  // Format the rate for BTC to avoid scientific notation
  const formatRate = (currency: string, rate: number): string => {
    if (currency === "BTC") {
      return rate.toFixed(8); // Format BTC with 8 decimal places
    }
    return rate.toString(); // Format other rates as normal
  };

  // Handle currency selection
  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
  };

  // Handle input change for XAI amount and calculate converted amount
  const handleXaiAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setXaiAmount(value);

    // Calculate the equivalent amount based on the selected currency
    const calculatedAmount = value * coinRates[selectedCurrency];
    setConvertedAmount(calculatedAmount);
  };

  // Calculate the minimum contribution in the selected currency
  const calculateMinimumContribution = (currency: string): number => {
    return minimumXaiAmount * coinRates[currency];
  };

  const minimumContributionInSelectedCurrency = calculateMinimumContribution(selectedCurrency);

  const isMinimumValid = xaiAmount >= minimumXaiAmount; // Check if the entered amount is valid
  const bonusPercentage = calculateBonusPercentage(xaiAmount);
  const bonusWidth = getBonusWidth(bonusPercentage);


  return (
    <div className='main_dash_row start'>
      <div className="dash_big">
        <div className="currency_warp">

          <div className="currency_head">

            <h1>Choose currency and calculate XAI token price</h1>
            <p>You can buy our XAI token using the below currency choices to become part of our project.</p>
          </div>
          <div className="currency_selection">
            {Object.entries(coinRates).map(([currency, rate]) => (
              <div
                key={currency}
                className={`currency_select ${selectedCurrency === currency ? "selected" : ""}`}
                onClick={() => handleCurrencySelect(currency)}
                style={{
                  borderColor: selectedCurrency === currency ? "#7668fe" : "transparent",
                }}
              >
                <div className="coin_logo">
                  {currency === "ETH" && <FaEthereum />}
                  {currency === "BTC" && <FaBtc />}
                  {currency === "BNB" && <SiBnbchain />}
                  {currency === "USDT" && <SiTether />}
                  {currency === "USDC" && <BsCurrencyDollar />}
                  {currency === "SOL" && <SiSolana />}
                  <p>{currency}</p>
                </div>
                <div className="coin_amount">
                  <p>{formatRate(currency, rate)} {currency}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="currency_content">
            <h3>Amount of contribute</h3>
            <p>Enter the amount you would like to contribute in order to calculate the amount of tokens you will receive. The calculator below helps to convert the required quantity of tokens into the amount of your selected currency.</p>
          </div>
          <div className="price_input">
            <div className="input_price_box">
              <input type="text" min="15380" max="18000000" onChange={handleXaiAmountChange} />
              <p>AXI</p>
            </div>
            <div className="input_price_content">
              <p>=</p>
              <p className='currnecy_infos'>
                <span className='currency_value'>  {convertedAmount.toFixed(4)}</span>
                <span className='Currency_name'>{selectedCurrency}</span>
              </p>
            </div>
          </div>
          <div className="min_value_p">
            <FaInfo
              style={{
                color: isMinimumValid ? "green" : "red", // Change color to red if the amount is less than the minimum
              }}
            />
            <span>
              {minimumContributionInSelectedCurrency.toFixed(5)}{" "}
              <span>{selectedCurrency}</span>
            </span>
            <p>(15,380 XAI) Minimum contribution amount is required.</p>
          </div>
          <div className="extra_bonus">

            <div
              className="bonus-extra"
              style={
                {
                  "--bonus-width": bonusWidth,
                } as React.CSSProperties // Cast to React.CSSProperties to allow custom CSS variables
              }
            />
            <div className="bonus-extra-item">
              <span className="bonus-extra-amount">60,000 XAI</span>
              <span className="bonus-extra-percent">5%</span>
            </div>
            <div className="bonus-extra-item item2">
              <span className="bonus-extra-amount">300,000 XAI</span>
              <span className="bonus-extra-percent">10%</span>
            </div>
            <div className="bonus-extra-item item3">
              <span className="bonus-extra-amount">1,200,000 XAI</span>
              <span className="bonus-extra-percent">20%</span>
            </div>
          </div>
          <div className="bonus_box">
            <div className="sale_bonus">
              <p>+ Sale Bonus {bonusPercentage}%</p>
              <span>
                0
              </span>
            </div>
            <div className="amount_bonus">
              <p>+ Amount Bonus</p>
              <span>{(xaiAmount + (xaiAmount * bonusPercentage) / 100).toFixed(2)} </span>
            </div>
            <div className="total_bonus">
              <p>Total XAI</p>
              <span>
                {(xaiAmount + (xaiAmount * bonusPercentage) / 100).toFixed(2)}
              </span>
            </div>
          </div>
          <p className='red_p'>Your contribution will be calculated based on exchange rate at the moment when your transaction is confirmed.</p>
          <button
            className={`makePay ${isMinimumValid ? "" : "disabled"}`}
            onClick={togglePopup}
            disabled={!isMinimumValid}
          >
            <p>Make Payment</p>
            <FaWallet />
          </button>
          <div className="border-sec"></div>
          <p className='italci'>Tokens will appear in your account after payment successfully made and approved by our team. Please note that, XAI token will be distributed after the token sales end-date.</p>
        </div>
      </div>
      <div className="right_col">

        <TokenBalance />
        <TokenSales />
      </div>
      {isPopupOpen && (
        <div className="popup-overlay" >
          <div className="popup-content" >
            <h3>Payment Process</h3>
            <p>
              Please make payment of <span>{convertedAmount.toFixed(6)} {selectedCurrency}</span> to receive <span>{xaiAmount.toFixed(0)} XAI</span> token including bonus <span>{((xaiAmount * bonusPercentage) / 100).toFixed(0)} XAI</span> token.
            </p>

            <p className='content_sm'>You can choose any of following payment method to make your payment. The tokens balance will appear in your account after successful payment.</p>
            <div className="payment_method">
              <strong>Select payment method:</strong>
              <div className="payvia">
                <div className="radio"></div>
                <p>Pay via Crypto</p>
                <GiWallet color='#5e55b8' size="21" />
              </div>
              <p className='light_p'>* Payment gateway may charge you a processing fees.</p>

            </div>
            <div className="checkbocpay">
              <input type="checkbox" name='paymentcheck' />
              <p>I hereby agree to the token purchase agreement and token sale term.</p>

            </div>
            <button className='makePay' onClick={openSecondPopup}><p>Buy Crypto Now</p> <MdArrowRightAlt size="21" /> </button>

            <div className="close_btn" onClick={togglePopup}>
              <FaX />
            </div>

          </div>
        </div>
      )}
      {isSecondPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content gap2">
          <h3>Payment Process</h3>
          <p className='blue_p'> Your Order no. TNX001977 has been placed successfully.</p>
          <p className='content-p'>Please send <span><span>{convertedAmount.toFixed(6)} {selectedCurrency}</span></span> to the address below. The token balance will appear in your account only after transaction gets 3 confirmation and approved by our team.</p>
          <p className='bold'>Payment to the following Ethereum Wallet Address</p>
          <div className="wallet_address">
            <div className="qr_code">
            <ReactQRCode value={address} size={70} /></div>
            <div className="address-box">
              <p className='address-box_p'>Send Amount: <strong>0.710709 ETH</strong></p>
              <div className="address">
                <FaEthereum/>
                <p>0x7d4046c163f2a4B78f92baC760effA9B62E82528</p>
                  <div className="address_copy" onClick={copyToClipboard}>
                    <FaRegCopy/>
                  </div>
              </div>
            </div>
          </div>
          <p className='address_infos'>To speed up verification process please enter your wallet address from where you'll transferring your amount to our address.</p>
          <input type="text" placeholder='Insert your payment address' className='address_inp' value={paymentAddress}
        onChange={handleAddressChange}/>
          <div className="address_btns">

            <button className='makePay' disabled={!isValid} onClick={openThirdPopup} >
              <p>Confirm Payment</p> 
            </button>
            <button onClick={closeSecondPopup} className='cancel'>Cancel Order</button>
          </div>
            <p className='ligh_blue'>
              <FaInfo size="7"/>
              <p>Do not make payment through exchange Kraken, Bitfinex. You can use MyEtherWallet, MetaMask, Mist wallets etc.</p>
            </p>
            <p className='ligh_red'>
              <FaInfo size="7"/>
              <p>In case you send a different amount, number of XAI token will update accordingly.</p>

            </p>
          </div>
        </div>
      )}
      {isThirdPopupOpen && (
        <div className="popup-overlay">
          <div className='popup-content'>
            <div className="confirm">

          <FaRegCircleCheck size="29" color='green' />
          <h3>We're reviewing your payment.</h3>
          <p className='confirm_p'>We'll review your transaction and get back to your within 6 hours. You'll receive an email with the details of your contribution.</p>
          <a href="/user/transactions" className='makePay' >View transactions</a>
            </div>
          <div className="close_btn" onClick={closeThirdPopup}>
              <FaX />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Contribute