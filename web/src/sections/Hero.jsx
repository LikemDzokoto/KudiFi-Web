import React from 'react';
import { motion } from 'framer-motion';
import { MotionDiv, MotionSection, MotionButton } from '../components/motion';
import { Users, Wifi, Clock , Zap } from 'lucide-react';
import AnimatedBackground from "../components/AnimatedBackground";



const Hero = () => {

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "60%", label: "Mobile Money Users in Africa", countTo: 60 },
    { icon: <Wifi className="w-8 h-8" />, value: "0", label: "Internet Required", countTo: 0 },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Earn Rewards" }
  ];

  return (
    <MotionSection 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] text-white pt-28 pb-6 overflow-hidden"
    >
       <AnimatedBackground />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Powered by Apechain Web3 Technology</span>
          </div>
         


          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Montserrat'] leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring', damping: 10 }}
          >
            Buy, Send & Earn Crypto. <br />Just Dial <span className="text-yellow-300 font-extrabold">*123#</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            No internet or smartphone needed. Available on any mobile phone in Ghana.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <MotionButton 
              className="text-lg px-6 py-3 bg-white text-[#0E49A1] hover:bg-gray-100 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dial *123# Now
            </MotionButton>
            
            <MotionButton 
              className="text-lg px-6 py-3 bg-transparent text-white border border-white hover:bg-white/10 rounded-md font-medium transition-colors"
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
          
          {/* Supported mobile money services */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-wider mb-3 opacity-80 font-medium">Works with</p>
            <div className="flex flex-wrap gap-3 items-center">
              {['MTN MoMo', 'Vodafone Cash', 'ApeCoin'].map((service, index) => (
                <motion.div 
                  key={service}
                  className="bg-white/90 backdrop-blur-sm rounded-md px-3 py-1.5 flex items-center shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className="font-medium text-[#0E49A1]">{service}</span>
                </motion.div>
              ))}
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
            className="absolute w-40 h-40 bg-[#6F42C1]/30 rounded-full blur-3xl -z-10 top-10 right-10"
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
            className="relative w-64 h-96 md:w-72 md:h-[28rem] bg-white rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute top-0 w-32 h-4 bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-xl z-10"></div>
            <div className="p-2 h-full">
              <div className="bg-gray-100 h-full rounded-2xl p-4 flex flex-col">
                <div className="text-center text-gray-800 font-bold text-lg mb-2">MTN USSD</div>
                <motion.div 
                  className="bg-gray-200 p-3 rounded-lg mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <p className="text-sm text-gray-700 font-mono">Welcome to KudiFI</p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <p className="text-sm text-gray-700 font-mono">1. Create Wallet</p>
                    <p className="text-sm text-gray-700 font-mono">2. Buy ApeCoin</p>
                    <p className="text-sm text-gray-700 font-mono">3. Send ApeCoin</p>
                    <p className="text-sm text-gray-700 font-mono">4. Earn Rewards</p>
                    <p className="text-sm text-gray-700 font-mono">5. Cash Out</p>
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-sm text-gray-700 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                >
                  Enter option:
                </motion.p>
                
                <motion.div 
                  className="mt-auto grid grid-cols-3 gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {[1,2,3,4,5,6,7,8,9,"*",0,"#"].map((key, index) => (
                    <motion.button 
                      key={index} 
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg flex items-center justify-center shadow-sm"
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