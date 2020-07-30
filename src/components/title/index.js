import React from "react";
import styles from './title.module.css';

const Title = ({title}) => {
    return <Title className={styles.title}>{title}</Title>
};

export default Title;