'use client'
import React, { ReactNode, useState, useEffect  } from 'react';
interface LayoutProps {
    children: ReactNode; // Explicitly define the type for children
  }

const LayoutHome : React.FC<LayoutProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (children) {
            setIsLoading(false);
        }
    }, [children]);
    return (
        <>
            <div className='autn_layout'>
                <div className="auth_img">
                    <div className="auth_img_box">

                <img src="./face-ai.png" alt="" className="nav_img"/>
                    </div>
                <h1 style={{color:"white"}}>XAI</h1>
                </div>
                <div className="auth_content">
                    <div className="auth_box_warp">
                        <h2>XAI</h2>
                        {isLoading ? <div>Loading...</div> : children}

                    </div>
                    </div>
            </div>
        </>
    );
};

export default LayoutHome;
