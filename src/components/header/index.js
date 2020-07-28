import React from "react";
import styles from './header.module.css'
import Link from '../link';
import logo from '../../images/white-origami-bird.png'

const Header = () => {
    return (
        <nav className={styles.Navigation}>
            <img className={styles.logo} src={logo}/>
            <Link href="#" name="Going to 1"/>
            <Link href="#" name="Going to 2"/>
            <Link href="#" name="Going to 3"/>
            <Link href="#" name="Going to 4"/>
            <Link href="#" name="Going to 5"/>
        </nav>
    );
};

export default Header;