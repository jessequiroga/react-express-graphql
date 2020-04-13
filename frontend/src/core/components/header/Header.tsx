import React, { Component } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Button, Container, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InstagramIcon from '@material-ui/icons/Instagram';

class Header extends Component {

    render() {
        return (
            <AppBar className={styles.header} position="static">
                <Container className={styles.links} maxWidth="lg">
                    <Link className={styles.loginLink} to="/">
                        <IconButton>
                            <InstagramIcon color="secondary"/>
                        </IconButton>
                        Instacam
                    </Link>
                    <Link className={styles.loginLink} to="/sign-in">
                        <Button variant="contained"
                                color="default"
                                startIcon={<ExitToAppIcon/>}>
                            Sign in
                        </Button>
                    </Link>
                </Container>
            </AppBar>
        )
    }
}

export default Header;
