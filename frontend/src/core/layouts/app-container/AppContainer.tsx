import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { BrowserRouter as Router, } from 'react-router-dom';
import { AppRouter } from '../../../pages';
import styles from './AppContainer.module.scss';
import { Container } from '@material-ui/core';

class AppContainer extends Component {
    render() {
        return (
            <Router>
                <div className={styles.appContainer}>
                    <Header/>
                    <Container className={styles.rootContent} maxWidth="lg">
                        <AppRouter />
                    </Container>
                </div>
            </Router>
        );
    }
}

export default AppContainer;

