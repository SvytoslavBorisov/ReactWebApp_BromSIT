import React, {useState} from "react";
import hamburger from './hamburger.png';

function HeadMenu() {
    
    return (
        <div className="HeadMenu">
            <div className="headMenuButtons" id="headMenuButtonLogo">
                <img src={hamburger} alt=""/>
            </div>
            <div className="headMenuButtons" id="headMenuButtons1">
                <p>About</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons2">
                <p>Projects</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons3">
                <p>Contant</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons4">
                <p>Jobs</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons5">
                <p>BromS IT</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons6">
                <p>Fb</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons7">
                <p>In</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons8">
                <p>Li</p>
            </div>
            <div className="headMenuButtons" id="headMenuButtons9">
                <p>Press</p>
            </div>
        </div>
    );
}

export default HeadMenu;
