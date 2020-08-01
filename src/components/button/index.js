import React from "react";
import styles from './button.module.css';

const Button = ({name}) => {
    return (
        <button className={styles.submit}>{name}</button>
    )
};

export default Button;