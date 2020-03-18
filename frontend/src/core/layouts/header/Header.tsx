import React, { Component } from 'react';
import styles from './Header.module.scss';
import {
    Link
} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

class Header extends Component {
    readonly state: any;

    constructor(props: object) {
        super(props);
        this.state = {value: 0};
    }

    handleChange = (event: React.ChangeEvent<{}>, value: number) => {
        this.setState({value})
    };

    render() {
        console.log(styles);
        return (
            <AppBar position="static">
                <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
        )
    }
}

export default Header;
