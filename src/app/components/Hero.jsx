'use client';
import React from 'react'
import styles from '../styles/Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import AnimatedCard from '@/app/animation/AnimatedCard';
import AnimatedText from '@/app/animation/TextAnimation';


function Hero() {

  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickCourse = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* hero section */}
      <section id="home">

        <div className={styles.hero}>
          <div className={styles.herocontent}>

            {/* title section */}
            <h1 className={`${styles.title} ${styles.textAnimation}`}>Master English,</h1>
            <h2 className={`${styles.title2}`}>Unlock Your Future</h2>

            {/* paragraph area */}
            <div className={styles.paragraph}>
              <p > Join our professional English Academy and transform your language skills with expert teachers, proven methods, and personalized learning paths designed for your success.
              </p>
            </div>

            {/* button div */}
            <div className={styles.buttonDiv}>

              <button className={styles.startButton} onClick={handleClick}> Start Learning today  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "29px" }} /></button>
              <button className={styles.exploreButton} onClick={handleClickCourse}> <FontAwesomeIcon icon={faPlayCircle} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "29px" }} /> Explore Courses</button>
            </div>

            {/* details section ara */}
            <div className={styles.detaislDiv}>
              <div>
                <h3>10 +</h3>
                <p>Years of Experience</p>
              </div>
              <div>
                <h3>10K +</h3>
                <p>Student Taught</p>
              </div>
              <div>
                <h3>98%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
