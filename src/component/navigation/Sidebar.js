import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import { NavLink } from 'react-router-dom';

function Sidebar() {

    return (

        <div className='sidebar'>
            <ul className='sidebarList'>
                {
                    SidebarData.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.link}  className='ancharTagsideBarRow' >
                                    <div className='sideBarIcon'>{item.icon}</div>
                                    <div className='sideBarTitle'>{item.title}</div>
                                </NavLink>
                            </li>

                        )
                    })


                }
            </ul>
        </div>






    )
}


export default Sidebar