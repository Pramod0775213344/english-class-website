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
            <section style={{ marginTop: "50px" ,scrollMarginTop :"140px"}} id="contact">
                <div className={styles.contactDiv}>
                    <AnimatedCard animationType="fadeUp">
                        <h4 className={styles.contactSubtitle}>Get In Touch</h4>
                    </AnimatedCard>
                    <AnimatedCard animationType="fadeUp">
                        <h1>Start Your English Journey Today</h1>
                    </AnimatedCard>
                    <AnimatedCard animationType="fadeUp">
                        <p>
                            Ready to transform your English skills? Get in touch with our admission team for a free
                            consultation and personalized course recommendations.
                        </p>
                    </AnimatedCard>
                </div>

                <div className={styles.contactCards}>
                    <AnimatedCard animationType="fadeUp">
                        <div className={styles.contactFormCard}>
                            <ContactForm />
                        </div>
                    </AnimatedCard>

                    <AnimatedCard animationType="fadeUp">
                        <div className={styles.contactCard}>
                            <h1>Get In touch with us</h1>
                            <p>
                                Our friendly admissions team is here to help you choose the perfect course and answer
                                any questions about your English learning journey.
                            </p>

                            <div className={styles.contactDetailsCard}>
                                <div className={styles.contactIcon}>
                                    <FontAwesomeIcon icon={faMap} />
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

                            <div className={styles.contactDetailsCard}>
                                <div className={styles.contactIcon}>
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </div>
                                <div>
                                    <h4>Call Us</h4>
                                    <ul>
                                        <li>Personal - +94 77 715 0370</li>
                                        <li>Official (SSEA) - +94 76 275 7900</li>
                                        <li>Southwind - +94 76 046 4588</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.contactDetailsCard}>
                                <div className={styles.contactIcon}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <ul>
                                        <li>surangasenanayaka337@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>

        </div>
    )
}

export default Contact
