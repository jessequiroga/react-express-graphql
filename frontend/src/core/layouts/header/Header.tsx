import React, { Component } from 'react';
import styles from './Header.module.scss';
import {
    Link
} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Header extends Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar className={styles.links}>
                    <Link to="/login">
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<ExitToAppIcon />}
                        >
                            Login
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
