'use client'
import React, { useEffect, useState } from 'react'
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleClickEnroll = () => {
        const contactSection = document.getElementById('contactForm');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Image src="/logo3.png" alt="Logo" width={150} height={100} />
            </div>

            <button className={styles.menuToggle} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul>
                    <li onClick={() => setIsMenuOpen(false)}><Link href="#home">Home</Link></li>
                    <li onClick={() => setIsMenuOpen(false)}><Link href="#courses">Courses</Link></li>
                    <li onClick={() => setIsMenuOpen(false)}><Link href="#about">About</Link></li>
                    <li onClick={() => setIsMenuOpen(false)}><Link href="#contact">Contact</Link></li>
                </ul>

                {/* Enroll button inside mobile menu */}
                <div className={styles.mobileEnrollBtn}>
                    <button className={styles.enrollNow} onClick={() =>{handleClickEnroll(); setIsMenuOpen(false)}}>Enroll Now</button>
                </div>
            </div>

            {/* Enroll button for desktop only */}
            <div className={styles.desktopEnrollBtn}>
                <button className={styles.enrollNow} onClick={handleClickEnroll}>Enroll Now</button>
            </div>
        </nav>
    )
}

export default NavBar
