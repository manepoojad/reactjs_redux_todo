import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import TaskIcon from '@mui/icons-material/Task';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

  export const SidebarData= [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:'/home'
    },
    {
        title:"About",
        icon:<InfoIcon/>,
        link:"/about"
    },
    {
        title:"ContactUs",
        icon:<ContactsIcon/>,
        link:"/contactUs"
    },
    {
        title:"Project",
        icon:<TaskIcon/>,
        link:"/project"
    },
    {
        title:"LogOut",
        icon:<LogoutIcon/>,
        link:"/logIn"
    },

  ]
  
  