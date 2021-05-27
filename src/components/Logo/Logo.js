import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import learning from "./learning.png";

const Logo = () => {
    return (
        <div className="m-4 mt-0" options={{ max:25}} style={{ height: '50px', width:'50px' }}>
            <Tilt className="Tilt b-2 shadow-2">
                <div className="Tilt-inner">
                    <div >
                        <img alt="Logo" src={learning} />
                    </div>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;