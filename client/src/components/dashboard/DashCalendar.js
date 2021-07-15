import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DashCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='calendarContainer'>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default DashCalendar
