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
            <section id="courses">
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
                                <button className={styles.courseButton} onClick={handleClickContact}>Enroll Now <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "9px" }} /></button>
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
                                <button className={styles.courseButton} style={{ marginTop: "143px" }} onClick={handleClickContact}>Enroll Now <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "9px" }} /></button>
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

                        <AnimatedCard animationType="fadeUp" >
                            <div className={styles.classCard}>
                                <Image src='/Class1.jpg' alt="class 01" width={1020} height={10} className={styles.cardImage}/>
                                <div className={styles.cardBottomTitle}>
                                    <h3>General English 2027 Batch</h3>
                                </div>
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>General English 2027 Batch</h3>
                                    <p className={styles.cardDescription}>Location : SYZYGY Gampaha</p>
                                    <p className={styles.cardDescription}>Time : 3.30 p.m - 5.30 p.m</p>
                                    <p className={styles.cardDescription}>Day : Monday</p>
                                </div>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard animationType="fadeUp">
                            <div className={styles.classCard}>
                                <Image src='/Class1.jpg' alt="class 02" width={1020} height={10} className={styles.cardImage}/>
                                <div className={styles.cardBottomTitle}>
                                    <h3>General English 2026 Batch</h3>
                                </div>
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>General English 2026 Batch</h3>
                                    <p className={styles.cardDescription}>Location : SYZYGY Gampaha</p>
                                    <p className={styles.cardDescription}>Time : 3.00 p.m - 5.00 p.m</p>
                                    <p className={styles.cardDescription}>Day : Tuesday</p>
                                </div>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard animationType="fadeUp">
                            <div className={styles.classCard}>
                                <Image src='/Class2.jpg' alt="class 03" width={1020} height={10} className={styles.cardImage}/>
                                <div className={styles.cardBottomTitle}>
                                    <h3>General English  Friday Batch</h3>
                                </div>
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>General English 2026/2027 Batch</h3>
                                    <p className={styles.cardDescription}>Location : Galle Sipara</p>
                                    <p className={styles.cardDescription}>Time : 2.30 p.m - 4.30 p.m</p>
                                    <p className={styles.cardDescription}>Day : Wednesday</p>
                                </div>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard animationType="fadeUp ">
                            <div className={styles.classCard}>
                                <Image src='/Sir.jpg' alt="class 04" width={1020} height={10} className={styles.cardImage}/>
                                <div className={styles.cardBottomTitle}>
                                    <h3>General English Online Class</h3>
                                </div>
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>General English Online Class</h3>
                                    <p className={styles.cardDescription}>Method : Zoom app</p>
                                    <p className={styles.cardDescription}>Time : 8.00 p.m - 10.00 p.m</p>
                                    <p className={styles.cardDescription}>Day : Thursday</p>
                                </div>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>

                {/* contact Assessment details */}
                <div className={styles.assessmentDetailsDiv}>
                    <h1>Not sure which course is right for you?</h1>
                    <p>Take our free English level assessment and get personalized course recommendations based on your current skills and learning goals</p>
                    <button className={styles.assessmentButton} onClick={handleClickContact}>Get Free Assessment  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "9px" }} /></button>
                </div>
            </section >
        </div>
    )
}

export default Courses
