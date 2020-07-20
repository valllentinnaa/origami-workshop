import React from 'react';
import styles from './app.module.css';
import Header from "./components/header";
import Aside from "./components/aside";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.Container}>
                <Aside/>
            </div>
        </div>
    );
}

export default App;
