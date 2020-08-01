import React from "react";
import styles from './post.module.css';
import image from '../../images/blue-origami-bird.png';

const Post = ({description, author, index}) => {
    return (
        <div className={styles.Post}>
            <img src={image}/>
            <p className={styles.description}>
                <span>{index} - </span>
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