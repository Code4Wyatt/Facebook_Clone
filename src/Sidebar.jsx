import userEvent from '@testing-library/user-event';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { ExpandMoreOutlined } from '@mui/icons-material';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://media-exp1.licdn.com/dms/image/C4E03AQFjH2M4r3umhQ/profile-displayphoto-shrink_200_200/0/1629117547194?e=1642636800&v=beta&t=4u_D_k0dRgzK84Xu5-2S3DFN-zdierUdEeay9LJv4Wg' title='Paul Murray' />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />

        </div>
    )
}

export default Sidebar;
