import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.btn}>
                <h1 className="title">hello</h1>
            </header>
        )
    }
}

export default Header;