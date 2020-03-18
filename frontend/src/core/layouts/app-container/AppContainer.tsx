import React, { Component, Suspense } from 'react';
import Header from '../header/Header';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { routes } from '../../pages';
import styles from './AppContainer.module.scss';
import Loader from '../../components/loader/Loader';

class AppContainer extends Component {
  render() {
    return (
        <Router>
            <div className={styles.appContainer}>
                <Header />
                <main className={styles.rootContent}>
                    <Suspense fallback={<Loader />}>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                    </Suspense>
                </main>
            </div>
        </Router>
    );
  }
}

export default AppContainer;

