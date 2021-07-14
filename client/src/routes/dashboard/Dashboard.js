import React from 'react';
import DashNav from '../../components/dashboard/DashNav';
import DashMenu from '../../components/dashboard/DashMenu';
import '../../css/Dashboard/Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashContainer'>
            <div className='innerDash'>
                <DashNav />
                {/* <DashMenu /> */}
            </div>
        </div>
    )
}

export default Dashboard
