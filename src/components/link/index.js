import React from "react";
import styles from './link.module.css';
import {Link} from 'react-router-dom';

const LinkComponent = ({title, link}) => {
    return (
        <div className={styles.listItem}>
            <Link to={link}>{title}</Link>
        </div>
    )
};

export default LinkComponent;