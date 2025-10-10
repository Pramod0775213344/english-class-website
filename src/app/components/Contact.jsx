import React from 'react'
import styles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faHeadphones, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactForm from './form';
import AnimatedCard from "@/app/animation/AnimatedCard";


function Contact() {
    return (
        <div>
            {/* contact */}
            <section style={{ marginTop: "100px" }} id="contact">
                <div className={styles.contactDiv}>
                    <h4 className={styles.contactSubtitile}>Get In Touch</h4>

                    <h1>Start Your English Journey Today</h1>
                    <p>Ready to transform your English skills?Get in touch with our admission team for a free<br></br>
                        consultation and personalized course recommendations</p>
                </div>

                <div className={styles.contactCards}>
                    <AnimatedCard animationType="fadeUp">
                        <div>
                            <ContactForm />
                        </div>
                    </AnimatedCard>
                    <div className={styles.contactCard}>
                        
                        <h1>Get In touch with us</h1>
                        <p>Our friendly admissions team is here to help you <br /> choose the perfect course and answer any <br /> questions about your English learning journey.</p>

                        <div>
                            <AnimatedCard animationType="fadeUp">
                                <div className={styles.contactDetailsCard}>
                                    <div className={styles.contactIcon}>
                                        <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                                    </div>
                                    <div>
                                        <h4>Visit Our Place</h4>
                                        <ul>
                                            <li>Gampaha - SYZYGY</li>
                                            <li>Galle - SIPARA</li>
                                            <li>Morawaka - SIPONE</li>
                                            <li>Matara - DAKUNA</li>
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedCard>

                            <AnimatedCard animationType="fadeUp" delay={0.1}>
                                <div className={styles.contactDetailsCard}>
                                    <div className={styles.contactIcon}>
                                        <FontAwesomeIcon icon={faHeadphones} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                                    </div>
                                    <div>
                                        <h4>Call us</h4>
                                        <ul>
                                            <li>Personal - +94 77 715 0370</li>
                                            <li>Official(SSEA) - +94 76 275 7900</li>
                                            <li>Southwind - +94 76 046 4588</li>

                                        </ul>
                                    </div>
                                </div>
                            </AnimatedCard>
                            <AnimatedCard animationType="fadeUp" delay={0.2}>
                                <div className={styles.contactDetailsCard}>
                                    <div className={styles.contactIcon}>
                                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
                                    </div>
                                    <div>
                                        <h4>Email us</h4>
                                        <ul>
                                            <li>surangasenanayaka337@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedCard>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
