import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Aspirations from "./components/Aspirations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#112240",
            color: "#ccd6f6",
            border: "1px solid #233554",
          },
        }}
      />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCursor />
          <ParticleCanvas />
          <Navbar />
          <SocialSidebar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <CodingProfiles />
            <Aspirations />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}