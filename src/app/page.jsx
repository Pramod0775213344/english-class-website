import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Form from "next/form";
import ContactForm from "./components/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSun, faCircle, faCalendar, faClock, faMap, faMessage, faEnvelope, faHeadphones,faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";;

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
            <button className={styles.startButton} > Start Learning today  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px",marginLeft:"29px" }} /></button>
            <button className={styles.exploreButton} > <FontAwesomeIcon icon={faPlayCircle} style={{ color: "#e1bb0eff", height: "20px", width: "20px",marginRight:"29px" }} /> Explore Courses</button>
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
              <button className={styles.courseButton}>Enroll Now <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px",marginLeft:"29px" }} /></button>
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
              <button className={styles.courseButton} style={{ marginTop: "143px" }}>Enroll Now <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px",marginLeft:"29px" }} /></button>
            </div>

          </div>
        </div>
        {/* title general class details */}
        <h1 className={styles.classesTitle}>General English Classes Details</h1>
        {/* class Cards */}
        <div className={styles.mainClassCardDiv}>
          <div className={styles.classCards}>
            <div className={styles.classCard}>
              <h2>
                  <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                Gampaha - SyZyGy</h2>
              <h2>
                 <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                 Monday - General English 2027</h2>
              <h2>
                 <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                 3.30 PM - 5.30 PM</h2>
            </div>
            <div className={styles.classCard}>
              <h2>
                <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                Gampaha - SyZyGy</h2>
              <h2>
                <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                Tuseday - General English 2026</h2>
              <h2>
                <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                3.00 PM - 5.00 PM</h2>
            </div>
          </div>
          <div className={styles.classCards}>
            <div className={styles.classCard}>
              <h2>
                <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                Galle - Sipara</h2>
              <h2>
                <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                Wednesday - General English 2026/2027</h2>
              <h2>
                <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                2.30 PM - 4.30 PM</h2>
            </div>
            <div className={styles.classCard}>
              <h2>
                <FontAwesomeIcon icon={faMap} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                Online - Zoom</h2>
              <h2>
                <FontAwesomeIcon icon={faCalendar} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                Thursday - General English 2026/2027</h2>
              <h2>
                <FontAwesomeIcon icon={faClock} style={{ color: "#e1bb0eff",marginRight:"29px",backgroundColor:"#e1ba0e39",padding:"15px" ,borderRadius:"15px"}} />
                8.00 PM - 10.00 PM</h2>
            </div>
          </div>
        </div>

        {/* contact Assessment details */}
        <div className={styles.assessmentDetailsDiv}>
          <h1>Not sure which course is right for you?</h1>
          <p>Take our free English level assessment and get personalized course recommendations based on your current skills and learning goals</p>
          <button className={styles.assessmentButton}>Get Free Assessment  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff", height: "20px", width: "20px",marginLeft:"29px" }} /></button>
        </div>
      </section >

      {/* about us section */}
      <section style={{ marginTop: "100px" }} id="aboutus">
        {/* about details div */}
        <div className={styles.aboutdiv}>
          <h4 className={styles.aboutsubtitle}>About us</h4>

          <h1>Your success is our 15-year legacy</h1>
          <p>Since our founding, we've remained committed to a single, powerful idea: that English <br></br> fluency can transform lives. We achieve this by seamlessly integrating proven teaching <br></br> methodologies with innovative technology, creating a learning experience that is both <br></br> effective and dynamic. Get ready to achieve your English excellence with a partner you<br></br> can trust..</p>
        </div>

        {/* about card div */}
        <div className={styles.aboutCards} >

          <div >
            <Image src="/aboutus.jpg" alt="about us" width={500} height={600} className={styles.aboutImageCard} />
          </div>

          <div className={styles.aboutCard}>

            <h3>
              Our Mission
            </h3>
            <p>
              To provide world-class English education that empowers students to achieve their personal and professional goals through innovative teaching methods, experienced instructors, and a supportive learning environment.
            </p>

          </div>

        </div>

        {/* about core values */}
        <div className={styles.coreValueDiv}>
          <h2>Our Core Values</h2>
          <p>These principles guide everything we do and shape the learning<br></br> experience we create for our students.</p>
          <div className={styles.coreValueCards}>
            <div className={styles.coreValueCard}>
              <div className={styles.coreIcon}>
                <FontAwesomeIcon icon={faSun} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
              </div>
              <h4>Results-Focused</h4>
              <p>Every lesson is designed to help you achieve measurable progress toward your English goals.</p>
            </div>
            <div className={styles.coreValueCard}>
              <div className={styles.coreIcon}>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
              </div>
              <h4>Student-Centered</h4>
              <p>We prioritize your individual learning style, pace, and objectives in every interaction.</p>

            </div>
            <div className={styles.coreValueCard}>
              <div className={styles.coreIcon}>
                <FontAwesomeIcon icon={faCircle} style={{ color: "#e1bb0eff", height: "30px", width: "30px" }} />
              </div>
              <h4>Cultural Bridge</h4>
              <p>Learn English while exploring global cultures and building international connections.</p>

            </div>
          </div>

        </div>

      </section>

      {/* Teachers Detail's  */}
      <section style={{ marginTop: "100px", backgroundColor: "#f5f5f520", padding: "50px 0" }} id="about">
        <div className={styles.teacherDetails}>
          <h2>Experienced & Certified Teacher</h2>
          <p>Our instructors are native and near-native English speakers with advanced degrees in education, linguistics, or related fields. Each teacher brings years of international teaching experience and is certified in modern ESL methodologies.</p>
        </div>

        <div className={styles.teacherDetailsDiv}>
          <div className={styles.teacherDetailsList}>
            <h1>Mr.Suranga Senanayaka</h1>
            <ul>
              <li>Diploma & Higher Diploma in English</li>
              <li>Diploma in Management (English Medium) - American College</li>
              <li>Executive Course in English - University of Ruhuna</li>
              <li>Workshop & Special Training in English</li>

            </ul>
          </div>
          <div>
            <Image src="/teacher.jpg" alt="teacher" width={500} height={500} className={styles.teacherImage} />
          </div>
        </div>
      </section>

      {/* student feedback */}
      <section style={{ marginTop: "100px" }} id="feedback">
        <div className={styles.feedbackDiv}>
          <h4 className={styles.feedbackSubtitle}>Students Success Stories</h4>

          <h1>Real Result From Real Students</h1>
          <p>Join thousands of students who have transformed their lives and careers through our<br></br> English programs. Here's what they have to say.</p>
        </div>

        <div className={styles.feedbackCards}>

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

        </div>
      </section>

      {/* contact */}
      <section style={{ marginTop: "100px" }} id="contact">
        <div className={styles.contactDiv}>
          <h4 className={styles.contactSubtitile}>Get In Touch</h4>

          <h1>Start Your English Journey Today</h1>
          <p>Ready to transform your English skills?Get in touch with our admission team for a free<br></br>
            consultation and personalized course recommendations</p>
        </div>

        <div className={styles.contactCards}>
          <div>
              <ContactForm />
          </div>
          <div className={styles.contactCard}>
            <h1>Get In touch with us</h1>
            <p>Our friendly admissions team is here to help you <br /> choose the perfect course and answer any <br /> questions about your English learning journey.</p>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* ======= */}
      <section>
        <div className={styles.footerDiv}>
          <div className={styles.footerContent}>
            <div className={styles.logoAndTitle}>
              <div className={styles.footerLogo}>
                <Image src="/logo.png" alt="Logo" width={150} height={100} />
              </div>
              <div>
                <h2>Suranga Senayaka <br /> English Academy</h2>
                <p>Empowering students worldwide with quality English education <br></br> for over 15 years. Join our global community and transform your future today.</p>
              </div>
            </div>
          </div>
          <div className={styles.footerContent}>
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.footerContent}>
            <h2>Visit Our Socials</h2>
            <ul style={{ listStyle: "none" }}>
              <li><FontAwesomeIcon icon={faFacebook} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />Facebook</li>
              <li><FontAwesomeIcon icon={faInstagram} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />Instagram</li>
              <li><FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />LinkedIn</li>
              <li><FontAwesomeIcon icon={faTwitter} style={{ color: "#fff", height: "20px", width: "20px", marginRight: "8px" }} />Twitter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className={styles.footer}>
        <p>© 2024 Southwind English Academy. All rights reserved.</p>
      </footer>

    </>
  );
}
