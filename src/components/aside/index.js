import React from "react";
import styles from './aside.module.css';
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";

const Aside = () => {
    const links = getNavigation();
    return (
        <aside className={styles.Aside}>
            {
                links.map(navItem => {
                    return (
                        <LinkComponent
                            key={`aside-${navItem.title}-${Math.random()}`}
                            link={navItem.link}
                            title={navItem.title}
                        />
                    )
                })
            }
        </aside>
    );
};

export default Aside;
