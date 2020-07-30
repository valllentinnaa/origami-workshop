import React from "react";

import Header from "../header";
import Footer from "../footer";
import Aside from "../aside";
import styles from "./app.module.css"

const Container = (props) => {
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.Container}>
                <div className={styles.Main}>
                <Aside/>
                {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Container;