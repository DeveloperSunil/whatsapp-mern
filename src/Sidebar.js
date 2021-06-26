import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import {Avatar,IconButton} from '@material-ui/core';
import SidebarChat from './SidebarChat';
function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src=""/>
                <div className="sidebar_headerRight">
                  <IconButton>
                    <DonutLargeIcon />
                  </IconButton>
                   
                  <IconButton>
                    <ChatIcon/>
                  </IconButton>

                  <IconButton>
                    <MoreVert/>
                  </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                 <div className="sidebar_searchContainer">
                        <SearchOutlined />
                        <input placeholder="Search or start new chat" type="text" />
                 </div>
            </div>

            <div className="sidebar_chats">
                  <SidebarChat />
                  <SidebarChat />
                  <SidebarChat />     
            </div>
        </div>
    );
}
export default Sidebar;