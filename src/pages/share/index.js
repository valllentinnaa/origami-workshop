import React from "react";

import Container from "../../components/page-container";
import Title from "../../components/title";
import Button from "../../components/button";

import styles from './index.module.css';
import Posts from "../../components/posts";

const Share = () => {
    return (
        <Container>
            <Title title="Share your thoughts"/>
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea}>Publication...</textarea>
                </div>
                <div>
                    <Button name="Post"/>
                </div>
            </div>
            <Posts length={3}/>
        </Container>
    );
};

export default Share;