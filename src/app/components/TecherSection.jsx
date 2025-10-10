import React from 'react'
import styles from '../styles/TeacherSection.module.css'
import Image from 'next/image'


function TecherSection() {
    return (
        <div>
            {/* Teachers Detail's  */}
            <section
                style={{
                    marginTop: "100px",
                    backgroundColor: "#f5f5f520",
                    padding: "50px 0",
                }}
            >
                <div className={styles.teacherDetails}>
                    <h2>Experienced & Certified Teacher</h2>
                    <p>
                        Our instructors are native and near-native English speakers with advanced
                        degrees in education, linguistics, or related fields. Each teacher brings
                        years of international teaching experience and is certified in modern ESL
                        methodologies.
                    </p>
                </div>

                <div className={styles.teacherDetailsDiv}>
                    <div className={styles.teacherDetailsList}>
                        <h1>Mr. Suranga Senanayaka</h1>
                        <ul>
                            <li>Diploma & Higher Diploma in English</li>
                            <li>Diploma in Management (English Medium) - American College</li>
                            <li>Executive Course in English - University of Ruhuna</li>
                            <li>Workshop & Special Training in English</li>
                        </ul>
                    </div>

                    <div>
                        <Image
                            src="/teacher.jpg"
                            alt="Mr. Suranga Senanayaka"
                            width={300}
                            height={300}
                            className={styles.teacherImage}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TecherSection
