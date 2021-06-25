import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import './sidebar.scss';


const Sidebar: FC = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>
                <img src="/icons/bitcoin.svg" alt="bit"/>
                <span>BITCOIN  FRENZY</span>
            </div>
            <ul className='nav-list'>
                <li>
                    <NavLink exact className="nav-link" activeClassName='active' to="/">
                        <img src="/icons/icon.svg" alt="bit"/>
                        MY WALLET</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName='active' to="/buy">
                        <img src="/icons/icon.svg" alt="bit"/>
                        BUY BITCOIN</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName='active' to="/sell">
                        <img src="/icons/icon.svg" alt="bit"/>
                        SELL BITCOIN</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName='active' to="/bitcoin">
                        <img src="/icons/icon.svg" alt="bit"/>
                        BITCOIN PRICE</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;