import React from 'react';
import { motion } from 'framer-motion';
import { MotionDiv, MotionSection, MotionButton } from '../components/motion';
import { Users, Wifi, Clock , Zap } from 'lucide-react';
import AnimatedBackground from "../components/AnimatedBackground";
import CountingStats from "../components/CountingStats"

import { Phone, ArrowRight } from 'lucide-react';



const Hero = () => {

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "60%", label: "Mobile Money Users in Africa", countTo: 60 },
    { icon: <Wifi className="w-8 h-8" />, value: "0", label: "Internet Required", countTo: 0 },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Earn Rewards" }
  ];

  return (
    <MotionSection 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] text-white pt-16 pb-2 overflow-hidden"
    >
       <AnimatedBackground />
      
      <div className="container mx-auto px-2 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <motion.div 
          className="md:w-1/2 mb-4 md:mb-0 md:pr-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
      <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-white/20">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-base font-semibold">Powered by Apechain's Web3 Technology</span>
          </div>
         


          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-['Montserrat'] leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring', damping: 10 }}
          >
            Buy, Send & Earn Crypto. <br />Just Dial <span className="text-yellow-300 font-extrabold">*123#</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl mb-4 opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
             <span className="flex items-center gap-3 justify-center mt-3 md:justify-start">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span>No internet or smartphone needed. Available on any mobile phone in Africa.</span>
            </span>
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <MotionButton 
              className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-white/25 hover:scale-105"
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-8 h-8 group-hover:animate-pulse" />
              <span>Dial *123# Now</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </MotionButton>
            
            <MotionButton 
              className="text-2xl px-8 py-5 bg-transparent text-white border border-white hover:bg-white/10 rounded-2xl font-bold transition-colors"
              onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </MotionButton>
          </div>
          
         
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {/* <div className="text-center sm:text-left">
              <p className="text-base text-blue-200 flex items-center justify-center sm:justify-start space-x-2 mb-1">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Works on any phone</span>
              </p>
              <p className="text-base text-blue-200">MTN MoMo • Vodafone Cash</p>
            </div> */}
            <div className="hidden md:flex justify-center mt-9">
              <CountingStats stats={stats} />
            </div>
          
          </motion.div>
        </motion.div>
        
        {/* Phone image */}
        <motion.div 
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            className="absolute w-56 h-56 bg-[#6F42C1]/30 rounded-full blur-3xl -z-10 top-10 right-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: 'easeInOut'
            }}
          />
          
          <motion.div 
            className="relative w-80 h-[32rem] md:w-[26rem] md:h-[36rem] bg-white rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute top-0 w-40 h-6 bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-xl z-10"></div>
            <div className="p-4 h-full">
              <div className="bg-gray-100 h-full rounded-2xl p-6 flex flex-col">
                <div className="text-center text-gray-800 font-bold text-2xl mb-4">MTN USSD</div>
                <motion.div 
                  className="bg-gray-200 p-5 rounded-xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <p className="text-lg text-gray-700 font-mono">Welcome to KudiFI</p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <p className="text-lg text-gray-700 font-mono">1. Create Wallet</p>
                    <p className="text-lg text-gray-700 font-mono">2. Buy ApeCoin</p>
                    <p className="text-lg text-gray-700 font-mono">3. Send ApeCoin</p>
                    <p className="text-lg text-gray-700 font-mono">4. Earn Rewards</p>
                    <p className="text-lg text-gray-700 font-mono">5. Cash Out</p>
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-lg text-gray-700 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                >
                  Enter option:
                </motion.p>
                
                <motion.div 
                  className="mt-auto grid grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {[1,2,3,4,5,6,7,8,9,"*",0,"#"].map((key, index) => (
                    <motion.button 
                      key={index} 
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-4 rounded-xl flex items-center justify-center shadow-md text-xl"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {key}
                    </motion.button>
                  ))}
                   
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
       
      </div>
    </MotionSection>
  );
};

export default Hero;