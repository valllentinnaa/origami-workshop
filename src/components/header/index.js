import React from "react";
import styles from './header.module.css'
import LinkComponent from '../link';
import logo from '../../images/white-origami-bird.png'
import getNavigation from "../../utils/navigation";

const Header = () => {
    const links = getNavigation();
    return (
        <nav className={styles.Navigation}>
            <img className={styles.logo} src={logo}/>
            {
                links.map(navItem => {
                    return (
                        <LinkComponent
                            key={`header-${navItem.title}-${Math.random()}`}
                            link={navItem.link}
                            title={navItem.title}
                        />
                    )
                })
            }
        </nav>
    );
};

export default Header;