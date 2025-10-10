import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div>
            {/* ======= */}
            <section>
                <div className={styles.footerDiv}>
                    <div className={styles.footerContent}>
                        <div className={styles.logoAndTitle}>
                            <div className={styles.footerLogo}>
                                <Image src="/logo3.png" alt="Logo" width={150} height={100} />
                            </div>
                            <div>
                                <h2>Suranga Senayaka <br /> English Academy</h2>
                                <p>Empowering students worldwide with quality English education <br></br> for over 15 years. Join our global community and transform your future today.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerContent}>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link href="#home">Home</Link></li>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#courses">Courses</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerContent}>
                        <h2>Visit Our Socials</h2>
                        <ul style={{ listStyle: "none" }}>
                            <li><FontAwesomeIcon icon={faFacebook} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />Facebook</li>
                            <li><FontAwesomeIcon icon={faInstagram} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />Instagram</li>
                            <li><FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />LinkedIn</li>
                            <li><FontAwesomeIcon icon={faTwitter} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />Twitter</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className={styles.footer}>
                <p>© 2025 Southwind English Academy. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
