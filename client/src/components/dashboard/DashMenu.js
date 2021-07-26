import React, {useState} from 'react';
import {ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import logo from '../../assets/images/Logo.png';
import {FaShoppingBag, FaPowerOff} from 'react-icons/fa';
import {IoIosFitness, IoIosTrophy} from 'react-icons/io';
import {IoFitness} from 'react-icons/io5';
import {BsFillGearFill, BsArrowBarRight, BsArrowBarLeft} from 'react-icons/bs';
import {FiTarget} from 'react-icons/fi';
import '../../css/Dashboard/DashMenu.css';

const DashMenu = () => {
    const [opened, setOpened] = useState(false);

    const handleToggle = () => setOpened(!opened)


    return (
        <div className='sidebarContainer'>
            <ProSidebar className='sidebarCollapse' breakPoint="xs" rtl="false" >
                <SidebarHeader >
                    {/* <a href="/"><img src={logo} alt='logo' className='navTitle' /></a> */}
                    {!opened ? <BsArrowBarRight onClick={handleToggle}/> : <BsArrowBarLeft onClick={handleToggle}/>}
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape='round'>
                        <hr />
                        <MenuItem icon={<IoIosFitness />}>Workout Log</MenuItem>
                        <MenuItem icon={<IoFitness />}>Exercises</MenuItem>
                        <MenuItem icon={<FiTarget />}>Goals</MenuItem>
                        <MenuItem icon={<IoIosTrophy />}>Streaks</MenuItem>
                        <hr />
                        {/* <MenuItem>Account</MenuItem> */}
                        <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
                        <MenuItem icon={<FaShoppingBag />}>Shop</MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter className='sideFooter'>
                    <MenuItem icon={<FaPowerOff />}></MenuItem>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default DashMenu
