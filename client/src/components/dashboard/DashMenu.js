import React, {useState} from 'react';
import {ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import logo from '../../assets/images/Logo.png';
import {FaShoppingBag, FaPowerOff} from 'react-icons/fa';
import {IoIosFitness, IoIosTrophy} from 'react-icons/io';
import {IoFitness} from 'react-icons/io5';
import {BsFillGearFill, BsArrowBarRight, BsArrowBarLeft} from 'react-icons/bs';
import {FiTarget} from 'react-icons/fi';



const DashMenu = () => {
    const [toggled, setToggled] = useState(null);
    const [opened, setOpened] = useState(false);

    return (
        <div className='sidebarContainer'>
            <ProSidebar width='300px' collapsed='true' collapsedWidth='80px' toggled='true'>
                <SidebarHeader>
                    {/* <a href="/"><img src={logo} alt='logo' className='navTitle' /></a> */}
                    {!opened ? <BsArrowBarRight /> : <BsArrowBarLeft />}
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
                <SidebarFooter>
                    <a href='/'><MenuItem icon={<FaPowerOff />}></MenuItem></a>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default DashMenu
