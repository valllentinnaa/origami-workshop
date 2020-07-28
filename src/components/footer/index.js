import React from "react";
import styles from './footer.module.css';
import Link from "../link";

const Footer = () => {
    return(
        <footer className={styles.Footer}>
            <div>
                <Link href="#" name="Going to 1"/>
                <Link href="#" name="Going to 2"/>
                <Link href="#" name="Going to 3"/>
                <Link href="#" name="Going to 4"/>
                <Link href="#" name="Going to 5"/>
            </div>
            <p>Software university 2019</p>
        </footer>
    )
};

export default Footer;