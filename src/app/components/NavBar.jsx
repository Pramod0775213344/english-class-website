import React from 'react'
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
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
                    <button className={styles.enrollnow}>Enroll Now</button>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
