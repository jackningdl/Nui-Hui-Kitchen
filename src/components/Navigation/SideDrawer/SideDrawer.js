import React from 'react';
import './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {

    return (
        <Aux>
        <Backdrop show/>
        <div className="SideDrawer">
            <div className="LogoInSideDrawer">
                <Logo />
            </div>

            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
};


export default sideDrawer;