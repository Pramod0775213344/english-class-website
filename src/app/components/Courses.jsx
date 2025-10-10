'use client'
import React from 'react'
import styles from '../styles/Courses.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faMap, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import AnimatedCard from "@/app/animation/AnimatedCard";


function Courses() {

    const handleClickContact = () => {
        const contactSection = document.getElementById('contactForm');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            {/* course section */}
            <section style={{ marginTop: "100px" }} id="courses">
                <div className={styles.coursediv}>
                    <h4 className={styles.subtitle}>Our Courses</h4>

                    <h1>Choose Your Perfect Course</h1>
                    <p>From Beginner To Advance levels, We offered specialized English Courses Designed to Meet your Specific goals and learning styles</p>
                </div>

                {/* course cards */}

                <div className={styles.courseCards} >
                    <AnimatedCard animationType="fadeUp">
                        <div className={`${styles.courseCard} ${styles.courseCardOne}`}>
                        <div>
                                <Image src="/course1.jpg" alt="Course 1" width={600} height={400} className={styles.courseImage} />
                            </div>
                            <div>
                                <h3>Diploma in English & Management</h3>
                                <p>Build strong foundations in speaking, listening, reading, and writing with our comprehensive general English program.</p>
                                <p style={{ marginTop: "25px" }}><span>Gampaha(SyZyGy) - Tuseday | 8.30 AM - 2.00PM</span></p>
                                <p style={{ marginTop: "5px" }}><span>Galle(Sipara) - Wednesday | 8.30 AM - 2.00PM</span></p>
                                <p style={{ marginTop: "5px" }}><span>Morawaka(Sipone) - Friday | 8.30 AM - 2.00PM</span></p>
                                <p style={{ marginTop: "5px" }}><span>Matara(Dakuna) - Sunday | 8.30 AM - 2.00PM</span></p>
                                <p style={{ marginTop: "5px" }}><span>Online Zoom - Mon / Wed / Fri / Sat</span></p>
                                <button className={styles.courseButton} onClick={handleClickContact}>Enroll Now <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "29px" }} /></button>
                            </div>
                        </div>
                    </AnimatedCard>

                    <AnimatedCard animationType="fadeUp">
                        <div className={`${styles.courseCard} ${styles.courseCardTwo}`}>
                        <div>
                                <Image src="/course2.jpg" alt="Course 1" width={600} height={400} className={styles.courseImage2} />
                            </div>
                            <div>
                                <h3>Southwind Saturday English School</h3>
                                <p>Focus on Speaking, Listening, Reading, and Writing through activities, group work, and real-life practice.</p>
                                <p style={{ marginTop: "25px" }}><span>Every Saturday from 8.00 AM – 6.00 PM</span></p>
                                <button className={styles.courseButton} style={{ marginTop: "143px" }} onClick={handleClickContact}>Enroll Now <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "29px" }} /></button>
                            </div>

                        </div>
                    </AnimatedCard>

                </div>

                {/* title general class details */}
                <h1 className={styles.classesTitle}>General English Classes Details</h1>
                <p className={styles.classesTitleParagraph}>Enhance your English language skills with our comprehensive courses taught by experienced instructors</p>
                {/* class Cards */}
                <div className={styles.mainClassCardDiv}>
                    <div className={styles.classCards}>

                        <AnimatedCard animationType="fadeUp" delay={0.1}>
                            <div className={styles.classCard}>
                                <h1>Monday Evening Batch</h1>
                                <h2>
                                    <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Gampaha - SyZyGy</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Monday - General English 2027</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    3.30 PM - 5.30 PM</h2>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard animationType="fadeUp" delay={0.2}>
                            <div className={styles.classCard}>
                                <h1>Tuesday Evening Batch</h1>
                                <h2>
                                    <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Gampaha - SyZyGy</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Tuseday - General English 2026</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    3.00 PM - 5.00 PM</h2>
                            </div>
                        </AnimatedCard>
                    </div>
                    <div className={styles.classCards}>
                        <AnimatedCard animationType="fadeUp" delay={0.3}>
                            <div className={styles.classCard}>
                                <h1>Wednesday Evening Batch</h1>
                                <h2>
                                    <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Galle - Sipara</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Wednesday - General English 2026/2027</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    2.30 PM - 4.30 PM</h2>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard animationType="fadeUp " delay={0.4}>
                            <div className={styles.classCard}>
                                <h1>Thursday Online Batch</h1>
                                <h2>
                                    <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Online - Zoom</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    Thursday - General English 2026/2027</h2>
                                <h2>
                                    <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff", marginRight: "29px", backgroundColor: "#e1ba0e39", padding: "15px", borderRadius: "15px" }} />
                                    8.00 PM - 10.00 PM</h2>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>

                {/* contact Assessment details */}
                <div className={styles.assessmentDetailsDiv}>
                    <h1>Not sure which course is right for you?</h1>
                    <p>Take our free English level assessment and get personalized course recommendations based on your current skills and learning goals</p>
                    <button className={styles.assessmentButton} onClick={handleClickContact}>Get Free Assessment  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "29px" }} /></button>
                </div>
            </section >
        </div>
    )
}

export default Courses
