import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Footer2 from "./components/Footer2";
import FloatingCTA from "./components/FloatingCTA";


import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import WhyUseSikaCoin from './sections/WhyUseKudiFi';
import TrustSignals from './sections/TrustSignals';
import USSDInstructions from './sections/USSDInstructions';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import AboutUs from './sections/AboutUs';


function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    const interLink = document.createElement('link');
    interLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    interLink.rel = 'stylesheet';
    
    const montserratLink = document.createElement('link');
    montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
    montserratLink.rel = 'stylesheet';
    
    document.head.appendChild(interLink);
    document.head.appendChild(montserratLink);
    
  
    document.body.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    
   
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.head.removeChild(interLink);
      document.head.removeChild(montserratLink);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div 
          className="min-h-screen flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main className="flex-grow">
            <Hero />
            <HowItWorks />
            <Benefits />
            <WhyUseSikaCoin />
            <TrustSignals />
            <USSDInstructions />
            <FAQ />
            {/* <Contact /> */}
            <AboutUs />

            
            {/* Sticky CTA at the bottom */}
            {/* <motion.div 
              id="dial-now" 
              className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 p-4 md:px-6 z-40"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            >
              <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-3 sm:mb-0">
                  <h3 className="text-lg font-bold text-gray-800">Ready to start?</h3>
                  <p className="text-gray-600 text-sm">Dial *123# on your phone now</p>
                </div>
                <motion.button 
                  onClick={() => scrollToSection('ussd-instructions')}
                  className="bg-[#0E49A1] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#0D3E8A] transition-colors shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn How To Dial *123#
                </motion.button>
              </div>
            </motion.div> */}
            
            {/* Scroll to top button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  className="fixed bottom-24 right-6 bg-[#6F42C1] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg z-40"
                  onClick={scrollToTop}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </main>
          <Footer2 />
          <FloatingCTA/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;