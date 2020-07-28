import React from 'react';
import styles from './app.module.css';
import Header from "./components/header";
import Aside from "./components/aside";
import Main from "./components/main";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.Container}>
                <Aside/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
