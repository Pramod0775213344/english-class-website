'use client'
import React from 'react'
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

function NavBar() {

    const handleClickEnroll = () => {
        const contactSection = document.getElementById('contactForm');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* nav bar */}
            <nav className={styles.navbar}>

                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Logo" width={150} height={100} />
                </div>

                <div className={styles.navLinks}>

                    {/* Nav bar links */}
                    <div><Link href="/">Home</Link></div>

                    <div><Link href="#courses">Courses</Link></div>
                    <div><Link href="#about">About</Link></div>
                    <div><Link href="#contact">Contact</Link></div>

                </div>

                <div>
                    <button className={styles.enrollnow} onClick={handleClickEnroll}>Enroll Now</button>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
