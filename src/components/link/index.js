import React from "react";
import styles from './link.module.css';

const Link = ({name, href}) => {
    return (
        <div className={styles.listItem}>
            <a href={href}>{name}</a>
        </div>
    )
};

export default Link;