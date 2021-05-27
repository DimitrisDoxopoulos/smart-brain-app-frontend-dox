import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn)
    {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signOut')} className="p-3 btn text-white">Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('SignIn')} className="p-3 btn text-white">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="p-3 btn text-white">Register</p>
            </nav>
        )
    }
}

export default Navigation;