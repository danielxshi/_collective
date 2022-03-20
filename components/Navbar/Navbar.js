import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import style from '../../styles/modules/_nav.module.scss';
import MenuItems from '../../JSON/MenuItems';
import { debounce } from '../../utils/debounce';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos < 90
    );
    setPrevScrollPos(currentScrollPos);
  }, 0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    textAlign: 'center',
    transition: 'top 0.5s',
    width: '100%',
  };

  return (
    <div data-scroll style={{ ...navbarStyles, top: visible ? '0' : '-75px' }}>
      <div className="mx-4 sm:mx-8 2xl:max-w-[96rem] 2xl:mx-auto ">
        <nav className={style['nav--flex--space--layout']}>
          <div>
            <Link href="/">
              <a>005F</a>
            </Link>
          </div>
          <span>DIGITAL MEDIA AGENCY</span>
          <a href="mailto:wayne@liangholdings.com" className="link--buton">
            CONTACT
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
