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

        {/* couser cards */}
        <div className= {styles.courseCards} >
          <div className={styles.courseCard}>

          </div>
          <div className={styles.courseCard}>

          </div>
        </div>

        {/* Course Cards */}
        <div className={styles.mainCourseCardDiv}>
          <div className={styles.classCards}>
            <div className={styles.classCard}>
              <h2>Course 1</h2>
              <p>Description of Course 1</p>
            </div>
            <div className={styles.classCard}>
              <h2>Course 1</h2>
              <p>Description of Course 1</p>
            </div>
          </div>
          <div className={styles.classCards}>
            <div className={styles.classCard}>
              <h2>Course 2</h2>
              <p>Description of Course 2</p>
            </div>
            <div className={styles.classCard}>
              <h2>Course 3</h2>
              <p>Description of Course 3</p>
            </div>
          </div>
        </div>
      </section >


    </>
  );
}
