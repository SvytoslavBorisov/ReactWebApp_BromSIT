import React, {useState} from "react";
import logo from './b_logo.webp';

function HeadMenu() {
    
    return (
        <div className="HeadMenu">
            <div className="headMenuButtons" id="headMenuButtonLogo">
                <img src={logo} alt=""/>
            </div>
            <div className="headMenuButtons">
                <p>Новости</p>
            </div>
            <div className="headMenuButtons">
                <p>Товары</p>
            </div>
            <div className="headMenuButtons">
                <p>О нас</p>
            </div>
        </div>
    );
}

export default HeadMenu;
