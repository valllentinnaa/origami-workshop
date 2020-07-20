import React from 'react';
import styles from './app.module.css';
import Header from "./components/header";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
        </div>
    );
}

export default App;
