
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
