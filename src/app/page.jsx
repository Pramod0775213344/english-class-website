import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* nav bar */}
      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={150} height={100} />
        </div>

        <div className={styles.navLinks}>

          {/* Nav bar links */}
          <div><Link href="/">Home</Link></div>

          <div><Link href="#courses">Courses</Link></div>
          <div><Link href="#about">About</Link></div>
          <div><Link href="#contact">Contact</Link></div>

        </div>

        <div>
          <button className={styles.enrollnow}>Enroll Now</button>
        </div>

      </nav>

      {/* home section */}
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
            <button className={styles.startButton} > Start Learning today</button>
            <button className={styles.exploreButton} > Explore Courses</button>
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
      </section>

      {/* course section */}
      <section style={{ marginTop: "100px" }} id="courses">
        <div className={styles.coursediv}>
          <h4 className={styles.subtitle}>Our Courses</h4>

          <h1>Choose Your Perfect Course</h1>
          <p>From Beginner To Advance levels, We offered specialized English Courses Designed to Meet your Specific goals and learning styles</p>
        </div>

        {/* course cards */}
        <div className={styles.courseCards} >
          <div className={styles.courseCard} style={{ borderTopRightRadius: "30px", borderBottomLeftRadius: "30px" }}>
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
              <button className={styles.courseButton}>Enroll Now</button>
            </div>


          </div>
          <div className={styles.courseCard} style={{ borderBottomRightRadius: "30px", borderTopLeftRadius: "30px" }}>
            <div>
              <Image src="/course2.jpg" alt="Course 1" width={600} height={400} className={styles.courseImage2} />
            </div>
            <div>
              <h3>Southwind Saturday English School</h3>
              <p>Focus on Speaking, Listening, Reading, and Writing through activities, group work, and real-life practice.</p>
              <p style={{ marginTop: "25px" }}><span>Every Saturday from 8.00 AM – 6.00 PM</span></p>
              <button className={styles.courseButton} style={{ marginTop: "143px" }}>Enroll Now</button>
            </div>

          </div>
        </div>
        {/* title general class details */}
        <h1 className={styles.classesTitle}>General English Classes Details</h1>
        {/* class Cards */}
        <div className={styles.mainClassCardDiv}>
          <div className={styles.classCards}>
            <div className={styles.classCard}>
              <h2>Gampaha - SyZyGy</h2>
              <h2>Monday - General English 2027</h2>
              <h2>3.30 PM - 5.30 PM</h2>
            </div>
            <div className={styles.classCard}>
              <h2>Gampaha - SyZyGy</h2>
              <h2>Tuseday - General English 2026</h2>
              <h2>3.00 PM - 5.00 PM</h2>
            </div>
          </div>
          <div className={styles.classCards}>
            <div className={styles.classCard}>
              <h2>Galle - Sipara</h2>
              <h2>Wednesday - General English 2026/2027</h2>
              <h2>2.30 PM - 4.30 PM</h2>
            </div>
            <div className={styles.classCard}>
              <h2>Online - Zoom</h2>
              <h2>Thursday - General English 2026/2027</h2>
              <h2>8.00 PM - 10.00 PM</h2>
            </div>
          </div>
        </div>

        {/* contact Assessment details */}
        <div className={styles.assessmentDetailsDiv}>
          <h1>Not sure which course is right for you?</h1>
          <p>Take our free English level assessment and get personalized course recommendations based on your current skills and learning goals</p>
          <button className={styles.assessmentButton}>Get Free Assessment</button>
        </div>

      </section >


    </>
  );
}
