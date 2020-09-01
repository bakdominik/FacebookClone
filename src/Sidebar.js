import React from 'react'
import './Sidebar.css'
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://iconic.com.pl/wp-content/uploads/2020/07/circle-cropped-300x300.png' title='Dominik Bąk' />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace'/>

        </div>
    )
}

export default Sidebar
