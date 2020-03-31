import React, { Component, Suspense } from 'react';
import Header from '../header/Header';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { routes } from '../../../pages';
import styles from './AppContainer.module.scss';
import Loader from '../../components/loader/Loader';
import { Container } from '@material-ui/core';

class AppContainer extends Component {
    render() {
        return (
            <Router>
                <div className={styles.appContainer}>
                    <Header/>
                    <Container className={styles.rootContent} maxWidth="lg">
                        <Suspense fallback={<Loader/>}>
                            {routes.map(route => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}
                                />
                            ))}
                        </Suspense>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default AppContainer;

