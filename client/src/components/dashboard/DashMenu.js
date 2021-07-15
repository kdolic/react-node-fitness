import React from 'react';
import {ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import logo from '../../assets/images/Logo.png';
import {FaShoppingBag} from 'react-icons/fa';
import {IoIosFitness, IoIosTrophy} from 'react-icons/io';
import {IoFitness} from 'react-icons/io5';
import {BsFillGearFill} from 'react-icons/bs';
import {FiTarget} from 'react-icons/fi';
import {RiLogoutCircleRFill} from 'react-icons/ri';


const DashMenu = () => {
    return (
        <ProSidebar width='250px' collapsedWidth='100px'>
            <SidebarHeader>
                <a href="/"><img src={logo} alt='logo' className='navTitle' /></a>
                <p>X</p>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='round'>
                    <MenuItem>Menu</MenuItem>
                    <hr />
                    <MenuItem icon={<IoIosFitness />}>Workout Log</MenuItem>
                    <MenuItem icon={<IoFitness />}>Exercises</MenuItem>
                    <MenuItem icon={<FiTarget />}>Goals</MenuItem>
                    <MenuItem icon={<IoIosTrophy />}>Streaks</MenuItem>
                    <hr />
                    <MenuItem>Account</MenuItem>
                    <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
                    <MenuItem icon={<FaShoppingBag />}>Shop</MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <a href='/'><MenuItem icon={<RiLogoutCircleRFill />}> Logout</MenuItem></a>
                <p>© 2021 DEV.FIT, Inc. All rights reserved.</p>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default DashMenu
