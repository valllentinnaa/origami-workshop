import React from "react";
import styles from './footer.module.css';
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";

const Footer = () => {
    const links = getNavigation();
    return (
        <footer className={styles.Footer}>
            <div>
                {
                    links.map(navItem => {
                        return (
                            <LinkComponent
                                key={`footer-${navItem.title}-${Math.random()}`}
                                link={navItem.link}
                                title={navItem.title}
                            />
                        )
                    })
                }
            </div>
            <p>Software university 2019</p>
        </footer>
    )
};

export default Footer;