import React, { Component } from 'react';

import './Layout.css';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler =() => {
        const showSideDrawerCurrent = !this.state.showSideDrawer;
        this.setState({showSideDrawer: showSideDrawerCurrent});
    }

    render() {
        return (
            <Aux>
                <Toolbar Toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>)
    }
};

export default Layout;