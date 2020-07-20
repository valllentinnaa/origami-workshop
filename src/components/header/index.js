import React from "react";
import styles from './header.module.css'
import Link from '../link';

const Header = () => {
    return (
        <nav className={styles.Navigation}>
            <Link href="#" name="Going to 1"/>
            <Link href="#" name="Going to 2"/>
            <Link href="#" name="Going to 3"/>
            <Link href="#" name="Going to 4"/>
            <Link href="#" name="Going to 5"/>
        </nav>
    );
};

export default Header;