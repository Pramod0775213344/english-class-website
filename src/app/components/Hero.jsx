import React from 'react'
import styles from '../page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';


function Hero() {
  return (
    <div>
          {/* hero section */}
      <section id="home">

        <div className={styles.hero}>

          {/* title section */}
          <h1 className={styles.title}>Master English,</h1>
          <h1 className={styles.title2}>Unlock Your Feature</h1>

          {/* paragraph area */}
          <div className={styles.paragraph}>
            <p > Join our professional English Academy and transform your language skills with expert teachers, proven methods, and personalized learning paths designed for your success.
            </p>
          </div>

          {/* button div */}
          <div className={styles.buttonDiv}>

            <button className={styles.startButton}> Start Learning today  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px", marginLeft: "29px" }} /></button>
            <button className={styles.exploreButton}> <FontAwesomeIcon icon={faPlayCircle} style={{ color: "#e1bb0eff", height: "20px", width: "20px", marginRight: "29px" }} /> Explore Courses</button>
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

        <div className={styles.englishLetters}>
          <img src="/B.png" alt="B" width={600} height={400} className={styles.englishLetter} />
          <img src="/C.png" alt="C" width={600} height={400} className={styles.englishLetter} />
          <img src="/p.png" alt="D" width={600} height={400} className={styles.englishLetter} />
          <img src="/q.png" alt="D" width={600} height={400} className={styles.englishLetter} />
          <img src="/r.png" alt="D" width={600} height={400} className={styles.englishLetter} />
          <img src="/s.png" alt="D" width={600} height={400} className={styles.englishLetter} />
          <img src="/t.png" alt="D" width={600} height={400} className={styles.englishLetter} />
          <img src="/u.png" alt="D" width={600} height={400} className={styles.englishLetter} />
          <img src="/v.png" alt="D" width={600} height={400} className={styles.englishLetter} />

        </div>
      </section>
    </div>
  )
}

export default Hero
