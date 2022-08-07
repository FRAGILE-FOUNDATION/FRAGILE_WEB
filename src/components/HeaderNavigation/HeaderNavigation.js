import { Button } from "antd";
import React from "react";
import './HeaderNavigation.css'
import CampaigneProgressBar from '../campaigneProgressBar/CampaigneProgressBar'

function HeaderNavigation(){
    return (
        <div className="header-navigation">
            {/* <div className="header-grid"> */}
            <div className="logo"><b>Fragile</b></div>
            
            <button className="connect-metamask"><b>Connect wallet</b></button>
            {/* </div> */}
           
        </div>);

    }
export default HeaderNavigation;