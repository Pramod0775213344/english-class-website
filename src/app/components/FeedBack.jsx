import React from 'react'
import styles from '../styles/FeedBack.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AnimatedCard from "@/app/animation/AnimatedCard";


function FeedBack() {
    return (
        <div>
            {/* student feedback */}
            <section style={{ marginTop: "100px" }} id="feedback">
                <div className={styles.feedbackDiv}>
                    <h4 className={styles.feedbackSubtitle}>Students Success Stories</h4>

                    <h1>Real Result From Real Students</h1>
                    <p>Join thousands of students who have transformed their lives and careers through our<br></br> English programs. Here's what they have to say.</p>
                </div>

                <div className={styles.feedbackCards}>

                    <AnimatedCard animationType="fadeUp">
                    <div className={styles.feedbackCard}>
                        <h1>"</h1>
                        <div style={{ textAlign: "start", marginBottom: "30px" }}>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                        </div>

                        <p>"The English course transformed my career. I gained confidence in presentations and now lead international meetings with ease. The teachers are incredibly supportive and knowledgeable."</p>

                        <hr></hr>

                        <div className={styles.studentDetails}>
                            <div className={styles.profileIcon} style={{ backgroundColor: "blue" }}>
                                <p>B</p>
                            </div>
                            <div className={styles.student}>
                                <h4>Brayan Perera</h4>
                                <p>Teacher</p>
                            </div>
                        </div>



                    </div>
                    </AnimatedCard>
                    <AnimatedCard animationType="fadeUp" delay={0.2}>
                    <div className={styles.feedbackCard}>
                        <h1>"</h1>
                        <div style={{ textAlign: "start", marginBottom: "30px" }}>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                        </div>

                        <p>"The English course transformed my career. I gained confidence in presentations and now lead international meetings with ease. The teachers are incredibly supportive and knowledgeable."</p>

                        <hr></hr>

                        <div className={styles.studentDetails}>
                            <div className={styles.profileIcon}>
                                <p>B</p>
                            </div>
                            <div className={styles.student}>
                                <h4>Brayan Perera</h4>
                                <p>Teacher</p>
                            </div>
                        </div>


                    </div>
                    </AnimatedCard>
                    <AnimatedCard animationType="fadeUp" delay={0.4}>
                    <div className={styles.feedbackCard}>
                        <h1>"</h1>
                        <div style={{ textAlign: "start", marginBottom: "30px" }}>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "5px" }} />
                        </div>

                        <p>"The English course transformed my career. I gained confidence in presentations and now lead international meetings with ease. The teachers are incredibly supportive and knowledgeable."</p>

                        <hr></hr>

                        <div className={styles.studentDetails}>
                            <div className={styles.profileIcon} style={{ backgroundColor: "red" }}>
                                <p>B</p>
                            </div>
                            <div className={styles.student}>
                                <h4>Brayan Perera</h4>
                                <p>Teacher</p>
                            </div>
                        </div>

                    </div>
                    </AnimatedCard>

                </div>
            </section>
        </div>
    )
}

export default FeedBack
