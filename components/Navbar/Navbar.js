import Link from 'next/link'
import { useState } from "react";
import styles2 from "../../styles/Home.module.css";
import styles3 from "../../styles/modules/_nav.module.scss";
import {MenuItems} from "./MenuItems"

export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return <> 
            <header className={styles2.header}>
                <nav className={styles3.test}>
                    <Link href='/'>
                     <a id={styles3.navlogo}>005F</a>
                    </Link>
                <ul className={isOpen === false ? 
                        styles3.navmenu : styles3.navmenu +' '+ styles3.active}>
                        {MenuItems.map((item, index) => {
                            return(
                                <li className ="overflow-wrap underscore-cta " key={index} >
                                    <Link
                                        to={"/" +item.href} 
                                        href={item.href} smooth={true} 
                                        spy={true}  
                                        className={item.cName, isOpen === false ? 
                                            styles3.navlink : styles3.navlink+' '+styles3.active}
                                            onClick={openMenu}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
                <button className={isOpen === false ? 
                                    styles3.hamburger : styles3.hamburger+' '+styles3.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles3.bar}></span>
                    <span className={styles3.bar}></span>
                    <span className={styles3.bar}></span>
                </button>
                </nav>
            </header>
        {children}
        {/* {footer} */}
     </>
}