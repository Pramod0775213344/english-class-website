
import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "./components/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSun, faCircle, faCalendar, faClock, faMap, faMessage, faEnvelope, faHeadphones, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import MyButtonComponent from "./components/Button";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import TecherSection from "./components/TecherSection";
import FeedBack from "./components/FeedBack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollContext from "./components/ScrollContext";


export default function Home() {

  return (
    <>
      <ScrollContext>
        <NavBar />
              <Hero />
        <main>
          <Courses />
          <About />
          <TecherSection />
          <FeedBack />
          <Contact />
        </main>

        <Footer />
      </ScrollContext>
    </>
  );
}
