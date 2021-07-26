import React from 'react';
import '../../css/Dashboard/DashNav.css';

const DashNav = () => {
    return (
        <div className='dashNav'>
            <div className='contentContainer'>
                <p className='navHead'>Welcome, [USER]</p>
                <div className='navIcons'>
                    <div className='icon'>
                        <div className='icons8-profile'></div>
                        <p>Profile</p>
                    </div>
                    <div className='icon'>
                        <div className='icons8-not'></div>
                        <p>Notifications</p>
                    </div>
                    <div className='icon'>
                        <a href='/'>
                            <div className='icons8-logout'></div>
                            <p>Logout</p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DashNav
