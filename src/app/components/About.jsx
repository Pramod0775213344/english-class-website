import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faHeart, faCircle } from '@fortawesome/free-solid-svg-icons'
import AnimatedCard from '@/app/animation/AnimatedCard';


function About() {
    return (
        <div>
            {/* about us section */}
            <section style={{ marginTop: "100px",scrollMarginTop :"120px" }} id="about">
                {/* about details div */}
                <AnimatedCard animationType="scale">
                    <div className={styles.aboutdiv}>
                        <h4 className={styles.aboutsubtitle}>About us</h4>

                        <h1>Your success is our 15-year legacy</h1>
                        <p>Since our founding, we've remained committed to a single, powerful idea: that English fluency can transform lives. We achieve this by seamlessly integrating proven teaching  methodologies with innovative technology, creating a learning experience that is both  effective and dynamic. Get ready to achieve your English excellence with a partner you can trust..</p>
                    </div>
                </AnimatedCard>
                {/* about card div */}
                <div className={styles.aboutCards} >
                    <AnimatedCard animationType="scale">
                        <div >
                            <Image src="/aboutus.jpg" alt="about us" width={500} height={600} className={styles.aboutImageCard} />
                        </div>
                    </AnimatedCard>

                    <AnimatedCard animationType="scale">
                        <div className={styles.aboutCard}>

                            <h3>
                                Our Mission
                            </h3>
                            <p>
                                To provide world-class English education that empowers students to achieve their personal and professional goals through innovative teaching methods, experienced instructors, and a supportive learning environment.
                            </p>

                        </div>
                    </AnimatedCard>
                </div>

                {/* about core values */}
                <div className={styles.coreValueDiv}>
                    <AnimatedCard animationType="scale">
                        <h2>Our Core Values</h2>
                        <p>These principles guide everything we do and shape the learning experience we create for our students.</p>
                    </AnimatedCard>
                    <div className={styles.coreValueCards}>
                        <AnimatedCard animationType="rotate" delay={0.2}>
                            <div className={styles.coreValueCard}>
                                <div className={styles.coreIcon}>
                                    <FontAwesomeIcon icon={faSun} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                                </div>
                                <h4>Results-Focused</h4>
                                <p>Every lesson is designed to help you achieve measurable progress toward your English goals.</p>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard animationType="rotate" delay={0.4}>
                            <div className={styles.coreValueCard}>
                                <div className={styles.coreIcon}>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                                </div>
                                <h4>Student-Centered</h4>
                                <p>We prioritize your individual learning style, pace, and objectives in every interaction.</p>

                            </div>
                        </AnimatedCard>
                        <AnimatedCard animationType="rotate" delay={0.6}>
                            <div className={styles.coreValueCard}>
                                <div className={styles.coreIcon}>
                                    <FontAwesomeIcon icon={faCircle} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                                </div>
                                <h4>Cultural Bridge</h4>
                                <p>Learn English while exploring global cultures and building international connections.</p>

                            </div>
                        </AnimatedCard>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default About
