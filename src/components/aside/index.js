import React from "react";
import styles from './aside.module.css';
import Link from "../link";

const Aside = () => {
    return (
        <aside className={styles.Aside}>
            <Link href="#" name="Going to 0"/>
            <Link href="#" name="Going to 1"/>
            <Link href="#" name="Going to 2"/>
            <Link href="#" name="Going to 3"/>
        </aside>
    );
};

export default Aside;
