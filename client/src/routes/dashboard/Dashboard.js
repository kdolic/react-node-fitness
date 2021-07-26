import React from 'react';
import DashNav from '../../components/dashboard/DashNav';
import DashMenu from '../../components/dashboard/DashMenu';
import DashCalendar from '../../components/dashboard/DashCalendar';
import DashQuote from '../../components/dashboard/DashQuote';
import DashAddExercise from '../../components/dashboard/DashAddExercise';
import '../../css/Dashboard/Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashContainer'>
            <div className='innerDash'>
                <DashMenu />
                <div className='navQuotes'>
                    <DashNav />
                    <DashQuote /> 
                </div>
                {/* <DashCalendar /> */}
                {/* <DashAddExercise /> */}
            </div>
        </div>
    )
}

export default Dashboard
