'use client'
import Nav from "@/components/nav";
import ParticlesComponent from "@/components/Particles";
import Timer from "@/components/Timer";
import Timer2 from "@/components/Timer2";
import React from "react";

const Home = () => {
  return (
    <div>
        {/* <div id="preloader">
        <img src="./assets/cropped-Xai-PNG.png" alt="Preloader" className="preloader-image"/>
        <div className="loader">
            <div></div>
        
            <div></div>
        </div>
    </div> */}
    <div className="content">
    <Nav/>
    <header id="pre-sale" >
        {/* <div id="particles-js"></div> */}
        <ParticlesComponent id="Particles_js"/>
      
        <div className="container">
            <div className="header_warp">
                <div className="pre-sale_block_warp">
                    <div className="main_heading">
                        <div className="main_heading_t">
                            <p className="Heading_heros">
                            <p className="blue main_heading_h">xAI </p>
                            pre-sale with up to 
                            
                            <p className="main_heading_h blue"> 200%</p>
                            </p>
                        </div>
                        <p> bonus</p>
                    </div>
                    <div className="Token_stats">
                        <p className="token_text">Token Presale is Live</p>
                        <p className="token_stat">Live</p>
                    </div>
                    <Timer/>
                    <a href="/user/contribute" className="main_BTN">BUY xAI NOW <i className="fa-solid fa-arrow-right"></i></a>
                    <div className="payment-section">
                        <span className="title">We Accept :</span> <br/>
                        <div className="payment-methods">
                            <div className="payment-method">
                                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022" alt="Bitcoin"
                                    className="crypto-icon"/>
                                <span>Bitcoin</span>
                            </div>
                            <div className="separator">|</div>
                            <div className="payment-method">
                                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022" alt="Ethereum"
                                    className="crypto-icon"/>
                                <span>Ethereum</span>
                            </div>
                            <div className="separator">|</div>
                            <div className="payment-method">
                                <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=022" alt="BNB"
                                    className="crypto-icon"/>
                                <span>BNB</span>
                            </div>
                            <div className="separator">|</div>
                            <div className="payment-method">
                                <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022" alt="XRP"
                                    className="crypto-icon"/>
                                <span>XRP</span>
                            </div>
                            <div className="separator">|</div>
                            <div className="payment-method">
                                <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=022" alt="USDT"
                                    className="crypto-icon"/>
                                <span>USDT</span>
                            </div>
                            <div className="separator">|</div>
                            <div className="payment-method">
                                <img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=022" alt="ADA"
                                    className="crypto-icon"/>
                                <span>ADA</span>
                            </div>
                            <div className="separator">|</div>
                            <div className="payment-method">
                                <img src="https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=022" alt="DOGE"
                                    className="crypto-icon"/>
                                <span>DOGE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="./banner-33-2-2048x1915.png" alt="" className="robots_img"/>
            </div>
            <div>

            </div>
        </div>

    </header>
    <div className="header_divider"></div>
    <div className="info_section" id="SERVICES">
        <div className="container">
            <div className="info_section_warp">
                <h2>xAI: Revolutionizing Crypto with Artificial Intelligence</h2>
                <div className="info_text_d_warp">
                    <div className="info_text_divider"></div>
                </div>
                <p className="indo_content">We are excited to introduce xAI, an innovative project at the intersection of
                    cryptocurrency and artificial <br/>intelligence, spearheaded by Elon Musk. xAI is set to
                    revolutionize the crypto landscape by leveraging cutting- <br/> edge AI technologies to create a
                    smarter, more efficient, and highly secure digital currency ecosystem.</p>
                <div className="info_cards">
                    <div className="info_card">
                        <h4>Quantum AI Consensus Mechanism</h4>
                        <p>xAI could pioneer a novel consensus mechanism based on quantum computing and artificial
                            intelligence. This consensus algorithm would leverage quantum principles to achieve
                            unprecedented scalability, security, and energy efficiency, while AI algorithms optimize
                            block validation and network governance.</p>
                    </div>
                    <div className="info_card">
                        <h4>AI-Driven Token Economics</h4>
                        <p>xUnlike traditional crypto projects with static tokenomics, xAI could implement dynamic token
                            economics powered by AI. Through predictive analytics and machine learning algorithms, the
                            platform could autonomously adjust token supply, inflation rates, and reward mechanisms to
                            maintain stability and incentivize user participation.</p>
                    </div>
                    <div className="info_card">
                        <h4>Quantum-Resistant Cryptography</h4>
                        <p>Recognizing the potential threat of quantum computing to traditional cryptographic systems,
                            xAI could integrate quantum-resistant cryptography into its blockchain architecture. This
                            would ensure the security and integrity of transactions even in the face of future quantum
                            attacks, providing unparalleled resilience to emerging threats.</p>
                    </div>
                    <div className="info_card">
                        <h4>AI-Powered Market Prediction</h4>
                        <p>xAI could offer AI-powered market prediction tools that leverage quantum computing
                            capabilities to forecast cryptocurrency trends with unprecedented accuracy. These predictive
                            analytics algorithms would analyze vast amounts of market data, sentiment analysis, and
                            technical indicators to inform users investment decisions and optimize trading strategies.
                        </p>
                    </div>
                    <div className="info_card">
                        <h4>Quantum AI Oracles</h4>
                        <p>To bridge the gap between off-chain data sources and on-chain smart contracts, xAI could
                            introduce quantum AI oracles that provide real-time data feeds and external information to
                            the blockchain network. These oracles would leverage quantum computing to ensure data
                            integrity, reliability, and tamper resistance, enabling a wide range of decentralized
                            applications (DApps) and financial instruments.</p>
                    </div>
                    <div className="info_card">
                        <h4>Quantum AI-Driven Identity Verification</h4>
                        <p>xAI could revolutionize identity verification processes by introducing quantum AI-driven
                            solutions that enhance security and privacy. These solutions could leverage
                            quantum-resistant cryptography and biometric authentication techniques to verify users
                            identities without compromising sensitive information, enabling secure and seamless
                            onboarding processes. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header_divider"></div>
    <div className="personal_Details" id="BONUS">
        <div className="container">
            <div className="personal_Details_warp">
                <img src="./banner-5.jpg" alt=""/>
                <div className="personal_Details_content">
                    <h2>personal Details</h2>
                    <div className="personal_divider"></div>
                    <p>• Presale Phases:</p>
                    <p>15% of total supply at $1 per token (limited to early investors).</p>
                    <p>• Bonuses: </p>
                    <p>Early investors receive token bonuses up to 200% based on the amount of their investment.</p>
                    <p>• Limit Order: </p>
                    <p>Each customer is limited to a single purchase</p>

                </div>

            </div>
        </div>
    </div>
    <div className="token_sale" id="TOKEN">
        <div className="container">
            <div className="token_sale_warp">
                <div className="token_sale_content">
                    <h2>Token Sale</h2>
                    <p>The presale ends when either the token sale goal is fully achieved or the timer expires,
                        whichever occurs first.</p>
                    {/* <div className="timer bg_blue">
                        <div className="timer-section2">
                            <span id="days2">00</span>
                            <div className="label2">DAYS</div>
                        </div>
                        <div className="colon2">:</div>
                        <div className="timer-section2">
                            <span id="hours2">00</span>
                            <div className="label2">HOURS</div>
                        </div>
                        <div className="colon2">:</div>
                        <div className="timer-section2">
                            <span id="minutes2">00</span>
                            <div className="label2">MINUTES</div>
                        </div>
                        <div className="colon2">:</div>
                        <div className="timer-section2">
                            <span id="seconds2">00</span>
                            <div className="label2">SECONDS</div>
                        </div>
                    </div> */}
                    <Timer2/>
                    <div className="progress_bars">
                        <div className="progress_top">
                            <b>Sale Raised</b>
                            <b>98%</b>
                        </div>
                        <div className="progress-bar">
                            <div className="progressed-bar"></div>
                        </div>

                    </div>
                    <p>Presale Participant: <b id="counter-increase">69388</b></p>
                    <div className="buy_toekn_warp">

                        <a href="/user/contribute" className="main_BTN">Buy Token <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="buy_toke">
                        <div className="payment-section">
                            <p className="Purchase_text">Purchase with:</p>
                            <div className="payment-methods2">
                                <div className="payment-method">
                                    <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022" alt="Bitcoin"
                                        className="crypto-icon"/>
                                    <span>Bitcoin</span>
                                </div>
                                <div className="payment-method">
                                    <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022" alt="Ethereum"
                                        className="crypto-icon"/>
                                    <span>Ethereum</span>
                                </div>
                                <div className="payment-method">
                                    <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=022" alt="BNB"
                                        className="crypto-icon"/>
                                    <span>BNB</span>
                                </div>
                                <div className="payment-method">
                                    <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022" alt="XRP"
                                        className="crypto-icon"/>
                                    <span>XRP</span>
                                </div>
                                <div className="payment-method">
                                    <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=022" alt="USDT"
                                        className="crypto-icon"/>
                                    <span>USDT</span>
                                </div>
                                <div className="payment-method">
                                    <img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=022" alt="ADA"
                                        className="crypto-icon"/>
                                    <span>ADA</span>
                                </div>
                                <div className="payment-method">
                                    <img src="https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=022" alt="DOGE"
                                        className="crypto-icon"/>
                                    <span>DOGE</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img src="./z5520329352798_4809add7676de5643e97129c5d467412.jpg" alt="" className="token_img"/>
            </div>
        </div>
    </div>
    <div className="Distribution" >
        <div className="container">
            <div className="Distribution_heading">

                <h2>Token Distribution</h2>
                <div className="Distribution_heading_divi"></div>
            </div>
            <div className="Distribution_warp">
                <div className="elementor-widget-container">
                    <p><b>• Total Supply: </b>1,000,000,000 xAI tokens</p>
                    <p><b>• Initial Presale: </b>15% (150,000,000 tokens)</p>
                    <p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Early investors receive up to 200% bonuses
                            based on the purchase tier.</b></p>
                    <p><b>• Public Sale: </b>30% (300,000,000 tokens)</p>
                    <p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Available through major
                            cryptocurrency exchanges post-presale.</b></p>
                    <p><b>• Team and Advisors: </b>10% (100,000,000 tokens)</p>
                    <p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Vesting period of 2 years with a
                            6-month cliff.</b></p>
                    <p><b>• Ecosystem Development: </b>25% (250,000,000 tokens)</p>
                    <p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Reserved for future development and
                            partnerships.</b></p>
                    <p><b>• Community and Marketing: </b>20% (200,000,000 tokens)</p>
                    <p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Used for community incentives,
                            marketing campaigns, and airdrops.</b></p>
                    <div>&nbsp;</div>
                </div>
                <img src="./bieudo-1.png" alt="" className="Distribution_img"/>
            </div>
        </div>


    </div>
    <div className="header_divider"></div>
    <div className="Dynamics">
        <div className="container">
            <div className="Dynamics_warp">
                <img src="./face-ai.png" alt="" className="Dynamics_warp_img"/>
                <div data-particle_enable="false" data-particle-mobile-disabled="false"
                    className="elementor-element elementor-element-e1cda55 e-con-full e-flex e-con e-child"
                    data-id="e1cda55" data-element_type="container">
                    <div className="elementor-element elementor-element-56ac80e elementor-widget elementor-widget-heading"
                        data-id="56ac80e" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Token Dynamics</h2>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-4a557c1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                        data-id="4a557c1" data-element_type="widget" data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-7d7a273 elementor-widget elementor-widget-text-editor"
                        data-id="7d7a273" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <p><b>• Transaction Fees: </b>xAI tokens are used to pay for transaction fees within the xAI
                                ecosystem.</p>
                            <p><b>• Staking: </b>Users can stake xAI tokens to earn rewards and participate in network
                                governance.</p>
                            <p><b>• AI Services: </b>xAI tokens are required to access and utilize AI-powered services
                                and tools on the platform.</p>
                            <p><b>• Incentives: </b>Tokens are distributed as rewards for participating in network
                                activities, such as providing liquidity and securing the network.</p>
                            <div>&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header_divider"></div>
    <div className="roadmap" id="ROADMAP">
        <div className="container">
            <div className="roadmap_warp">

                <h2>Roadmap</h2>
                <img src="./banner-3-roadmap-2000x2000-01-2048x2048.png" alt="" className="roadmap_img"/>
            </div>
        </div>
    </div>
    <div className="header_divider"></div>
    <div className="Customer">
        <div className="container">
            <div className="Customer_warp">
                <h2>Our Customer</h2>
                <img src="./Screenshot 2024-06-27 135516.png" alt="" className="Customer_img"/>
            </div>
        </div>
    </div>
    <div id="faq">
        <div className="container">
            <div className="faq_warp">
                <div className="faq_warp_heading">
                    <h2>Questions and Answers</h2>
                    <div className="faq_warp_heading_div"></div>
                </div>
                <p className="faq_warp_p">Frequently Asked Questions (FAQ) provide detailed answers to clarify the most
                    important <br/> aspects of the presale. For any additional questions, please use our official 24/7
                    support <br/> chat. Click the icon at the bottom right to connect with a support agent.</p>
                <div className="Faqs_warpper">
                    <div className="Faqs">
                        <p>xAI Presale</p>
                        <div className="Faqs_shadow">

                            <button className="accordion">
                                <i className="fa-solid fa-caret-right"></i>
                                <i className="fa-solid fa-sort-down" style={{display:"none"}}></i>
                                1. What is xAI
                            </button>
                            <div className="panel">
                                <p><b>xAI</b> is Elon Musk’s new AI-powered cryptocurrency designed to revolutionize
                                    digital
                                    finance by combining the security and efficiency of blockchain technology with the
                                    intelligence of advanced AI algorithms.</p>
                            </div>
                            <button className="accordion">
                                <i className="fa-solid fa-caret-right"></i>
                                <i className="fa-solid fa-sort-down" style={{display:"none"}} ></i>
                                2. How can I participate in the xAI presale?
                                {/* <p style={{display:"none"}}></p> */}
                            </button>
                            <div className="panel">
                                <p>
                                    <b>Step 1:</b>
                                    Purchase tokens by exchanging one of the accepted cryptocurrencies for xAI with
                                    rewards up to 200%.
                                </p>
                                <p>
                                    <b>Step 2:</b>

                                    Verify your identity after exchanging tokens

                                </p>
                                <p>
                                    <b>Step 3:</b>

                                    Claim your AWS tokens after completing the KYC process

                                    Please note that each customer is limited to a single purchase

                                </p>
                            </div>



                            <button className="accordion">3. What are the benefits of investing in xAI during the
                                presale?</button>
                            <div className="panel">
                                <p>Early investors in the xAI presale can enjoy:</p>
                                <ul>
                                    <li><b>Exclusive Bonuses:</b>Special bonuses up to 200% based on the amount and
                                        timing of your investment.</li>
                                    <li><b>Early Access: </b>Be among the first to use xAI’s AI-powered financial
                                        services.</li>
                                    <li><b>Discounted Prices: </b> Purchase xAI tokens at a lower price compared to the
                                        public sale.</li>
                                    <li><b>Discounted Prices: </b> Purchase xAI tokens at a lower price compared to the
                                        public sale.</li>
                                </ul>
                            </div>
                            <button className="accordion">4. What are the use cases for xAI tokens?</button>
                            <div className="panel">
                                <p>xAI tokens can be used for:</p>
                                <ul>
                                    <li><b>Transaction Fees:</b>Paying for transaction fees within the xAI ecosystem.
                                    </li>
                                    <li><b>Staking: </b>Earning rewards by staking tokens to support network security.
                                    </li>
                                    <li><b>AI Services: </b> Accessing and utilizing AI-driven financial services.</li>
                                    <li><b>Incentives: </b> Receiving rewards for network participation and
                                        contributions.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Faqs">
                        <p>Bonus program</p>
                        <div className="Faqs_shadow">

                            <button className="accordion">
                                <i className="fa-solid fa-caret-right"></i>
                                <i className="fa-solid fa-sort-down" style={{display:"none"}}></i>
                                xAI Bonus for Purchases Made with BTC
                            </button>
                            <div className="panel">
                                <p>The amount of xAI bonus you receive is linked to the amount of your BTC deposit.
                                <div style={{marginTop:"20px"}}>
                                    <p>– Tier 1: Deposits over 0.012 BTC receive a 50% xAI bonus.</p>
                                    <p>– Tier 2: Deposits over 0,033 BTC receive a 100% xAI bonus.</p>
                                    <p>– Tier 3: Deposits over 0,083 BTC receive a 200% xAI bonus.</p>
                                </div>
                                </p>
                            </div>
                            <button className="accordion">
                                <i className="fa-solid fa-caret-right"></i>
                                <i className="fa-solid fa-sort-down" style={{display:"none"}}></i>
                                xAI Bonus for Purchases Made with ETH
                            </button>
                            <div className="panel">
                                <p>“The amount of xAI bonus is linked to your ETH deposit.
                                <div style={{marginTop:"20px"}}>
                                    <p>– Tier 1: Deposits over 0,23 ETH receive a 50% xAI bonus.</p>
                                    <p>– Tier 2: Deposits over 0.6 ETH receive a 100% xAI bonus.</p>
                                    <p>– Tier 3: Deposits over 1.51 ETH receive a 200% xAI bonus.</p>
                                </div>
                                </p>
                            </div>
                            <button className="accordion">
                                <i className="fa-solid fa-caret-right"></i>
                                <i className="fa-solid fa-sort-down" style={{display:"none"}}></i>
                                xAI Bonus for Purchases Made with USDT
                            </button>
                            <div className="panel">
                                <p>The amount of xAI bonus you receive is linked to the amount of your USDT deposit.
                                <div style={{marginTop:"20px"}}>
                                    <p>– Tier 1: Deposits over 750 USDT receive a 50% xAI bonus.</p>
                                    <p>– Tier 2: Deposits over 2000 USDT receive a 100% xAI bonus.</p>
                                    <p>– Tier 3: Deposits over 5000 USDT receive a 200% xAI bonus.</p>
                                </div>
                                </p>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header_divider"></div>
    <div id="GetToch">
        <div className="container">
            <div className="GetToch_warp">

                <h2>Get In Touch!</h2>
                <p>If you need assistance or have any questions, please don’t hesitate to contact our dedicated 24/7
                    live support team. Simply access the support panel by clicking the chat icon in the bottom left
                    corner.</p>
            </div>
        </div>
    </div>
    <div className="header_divider"></div>
    <footer>
        <div className="container">
            <div className="footer_warp">

                <div className="footer_logo">
                    <img src="./image-removebg-preview (14).png" alt=""/>
                    <p>xAI are registered trademarks by x.ai, Inc. – All rights reserved</p>
                </div>
                <div className="footer_QUICK">

                    <div className="footer_heading">
                        <h2>QUICK LINKS</h2>
                        <div className="footer_heading_divi"></div>
                    </div>
                    <ul>
                        <li><a href="#pre-sale">PRE-SALE</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">BONUS</a></li>
                        <li><a href="">TOKEN</a></li>
                        <li><a href="">ROADMAP</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
                <div className="footer_NEWSLETTER">
                    <div className="footer_heading">
                        <h2>NEWSLETTER</h2>
                        <div className="footer_heading_divi"></div>
                    </div>
                    <p>By subscribing to our mailing list, you will receive the latest updates and news from us.</p>
                    <form action="" className="newsletter">
                        <input type="text" placeholder="Email Address"/> 
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="Copyright">
            <div className="container">
                <div className="Copyright_warp">

                    <p>Copyright © 2024, x.ai, Inc. or its affiliates</p>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</div>
    </div>
  )
}

export default Home