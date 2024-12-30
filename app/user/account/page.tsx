'use client'
import AccountStatus from '@/components/AccountStatus'
import React, { useState } from 'react'
import { getNames } from 'country-list';



const Account = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const countries = getNames();

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div className='main_dash_row start'>
            <div className="dash_big">
                <h3 className='account_head'>Profile Details</h3>
                <div className="profiles_menu">
                    <p>Personal Data</p>
                </div>
                <div className="forms_inputs">
                    <div className="inputs_row">
                        <div className="input">

                            <label htmlFor="">Full Name</label>
                            <input type="text" placeholder='Enter Full Name' />
                        </div>
                        <div className="input">

                            <label htmlFor="">Email Address</label>
                            <input type="email" placeholder='Enter Email' />
                        </div>
                    </div>
                    <div className="inputs_row">
                        <div className="input">

                            <label htmlFor="">Mobile Number</label>
                            <input type="tel" placeholder='Enter Mobile Number' />
                        </div>
                        <div className="input">

                            <label htmlFor="">Date of Birth</label>
                            <input type="date" placeholder='Enter Mobile Number' />
                        </div>
                    </div>
                    <div className="inputs_row">
                        <div className='input input_sm'>
                        <label htmlFor="">Nationality</label>
                            <select value={selectedCountry} onChange={handleChange}>
                                <option value="" disabled>
                                    Choose a country
                                </option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button className='Update_pro'>Update Profile</button>
                </div>
            </div>
            <div className="right_col">
                <AccountStatus />
            </div>
        </div>
    )
}

export default Account