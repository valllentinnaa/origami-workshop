import React from "react";
import styles from './post.module.css';

const Post = ({description, author}) => {
    return (
        <div className={styles.Post}>
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <small>Author:</small>
                <span>{author.username}</span>
            </div>
        </div>
    )
};

export default Post;