import Nav from '@/components/nav';
import React, { ReactNode } from 'react';
interface LayoutProps {
    children: ReactNode; // Explicitly define the type for children
  }

const LayoutHome : React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className='autn_layout'>
                <div className="auth_img">
                <img src="./image-removebg-preview (14).png" alt="" className="nav_img"/>
                <h1 style={{color:"white"}}>XAI</h1>
                </div>
                <div className="auth_content">
                    <div className="auth_box_warp">
                        <h2>XAI</h2>

                    {children}
                    </div>
                    </div>
            </div>
        </>
    );
};

export default LayoutHome;
