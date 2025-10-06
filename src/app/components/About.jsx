import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faHeart, faCircle } from '@fortawesome/free-solid-svg-icons'


function About() {
    return (
        <div>
            {/* about us section */}
            <section style={{ marginTop: "100px" }} id="about">
                {/* about details div */}
                <div className={styles.aboutdiv}>
                    <h4 className={styles.aboutsubtitle}>About us</h4>

                    <h1>Your success is our 15-year legacy</h1>
                    <p>Since our founding, we've remained committed to a single, powerful idea: that English <br></br> fluency can transform lives. We achieve this by seamlessly integrating proven teaching <br></br> methodologies with innovative technology, creating a learning experience that is both <br></br> effective and dynamic. Get ready to achieve your English excellence with a partner you<br></br> can trust..</p>
                </div>

                {/* about card div */}
                <div className={styles.aboutCards} >

                    <div >
                        <Image src="/aboutus.jpg" alt="about us" width={500} height={600} className={styles.aboutImageCard} />
                    </div>

                    <div className={styles.aboutCard}>

                        <h3>
                            Our Mission
                        </h3>
                        <p>
                            To provide world-class English education that empowers students to achieve their personal and professional goals through innovative teaching methods, experienced instructors, and a supportive learning environment.
                        </p>

                    </div>

                </div>

                {/* about core values */}
                <div className={styles.coreValueDiv}>
                    <h2>Our Core Values</h2>
                    <p>These principles guide everything we do and shape the learning<br></br> experience we create for our students.</p>
                    <div className={styles.coreValueCards}>
                        <div className={styles.coreValueCard}>
                            <div className={styles.coreIcon}>
                                <FontAwesomeIcon icon={faSun} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                            </div>
                            <h4>Results-Focused</h4>
                            <p>Every lesson is designed to help you achieve measurable progress toward your English goals.</p>
                        </div>
                        <div className={styles.coreValueCard}>
                            <div className={styles.coreIcon}>
                                <FontAwesomeIcon icon={faHeart} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                            </div>
                            <h4>Student-Centered</h4>
                            <p>We prioritize your individual learning style, pace, and objectives in every interaction.</p>

                        </div>
                        <div className={styles.coreValueCard}>
                            <div className={styles.coreIcon}>
                                <FontAwesomeIcon icon={faCircle} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                            </div>
                            <h4>Cultural Bridge</h4>
                            <p>Learn English while exploring global cultures and building international connections.</p>

                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default About
