import React from 'react';
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';


export default function topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
        <span className="logo">PeterAdmin</span>  
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/2409539/pexels-photo-2409539.jpeg?cs=srgb&dl=pexels-lord-pixel-2409539.jpg&fm=jpg" alt="" className="topAvatar" />
          </div>
      </div>
      </div>
  )
}