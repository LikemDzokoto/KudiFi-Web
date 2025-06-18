import React from 'react';
import { motion } from 'framer-motion';
import { MotionSection, MotionHeading, MotionDiv, MotionButton } from '../components/motion';

const steps = [
  {
    number: 1,
    title: "Dial *123#",
    description: "On your phone, dial *123# and press call to bring up the KudiFI menu.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Create Your Wallet",
    description: "Select 'Create Wallet' and set a 4-digit PIN for all transactions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Buy ApeCoin",
    description: "Choose 'Buy ApeCoin' and select your mobile money provider. Enter amount and confirm.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Manage Your Crypto",
    description: "Send crypto, check balance and rewards, or cash out to mobile money anytime.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    )
  }
];

const ussdOptions = [
  "Welcome to KudiFI",
  "Select an option:",
  "1. Create Wallet",
  "2. Buy ApeCoin",
  "3. Send ApeCoin",
  "4. Check Balance",
  "5. Cash Out",
  "6. Help"
];

const USSDInstructions = () => {
  return (
    <MotionSection 
      id="ussd-instructions" 
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MotionHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            How to Use KudiFI
          </MotionHeading>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Simple steps to access crypto on any phone
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* USSD Instructions */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0E49A1] to-[#6F42C1] mr-2">USSD</span> 
              Quick Guide
            </h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.15) }}
                >
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-10 w-10 bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] rounded-full flex items-center justify-center text-white font-medium shadow-sm">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1 flex items-center">
                      <span>Step {step.number}:</span> 
                      <span className="ml-2">{step.title}</span>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div 
            className="md:block relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 8,
                ease: 'easeInOut'
              }}
            />
            
            <div className="relative w-64 h-[28rem] mx-auto bg-black rounded-[2.5rem] border-[14px] border-black shadow-xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 w-32 h-6 bg-black left-1/2 transform -translate-x-1/2 rounded-b-xl z-10"></div>
              
              {/* Screen */}
              <div className="bg-gray-100 h-full rounded-[1.8rem] p-4 flex flex-col overflow-hidden">
                {/* Status bar */}
                <div className="flex justify-between items-center text-[10px] text-gray-500 mb-2 px-1">
                  <div>12:34 PM</div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    <span>80%</span>
                  </div>
                </div>
                
                <div className="text-center bg-gray-700 text-white text-sm py-1 px-2 rounded-lg mb-4">
                  MTN USSD
                </div>
                
                <div className="bg-white border border-gray-300 p-3 rounded-lg flex-grow overflow-hidden shadow-inner">
                  {ussdOptions.map((option, index) => (
                    <motion.p 
                      key={index} 
                      className="text-sm text-gray-700 font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + (index * 0.3) }}
                    >
                      {option}
                    </motion.p>
                  ))}
                  
                  <div className="mt-4">
                    <motion.p 
                      className="text-sm text-gray-700 font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4 }}
                    >
                      Enter option:
                    </motion.p>
                    <motion.span 
                      className="text-sm text-gray-700 font-mono inline-block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4.5 }}
                    >
                      _
                    </motion.span>
                    <motion.span
                      className="inline-block h-4 w-2 bg-gray-700 ml-1"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </div>
                </div>
                
                {/* Keypad */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[1,2,3,4,5,6,7,8,9,'*',0,'#'].map((key, index) => (
                    <motion.button 
                      key={index} 
                      className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 py-2 px-3 rounded-md flex items-center justify-center shadow-sm text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {key}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <MotionButton 
            className="bg-gradient-to-r from-[#0E49A1] to-[#6F42C1] hover:from-[#0c3c87] hover:to-[#5d38a3] text-white font-medium py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-block mr-2">Dial *123# Now</span>
            <span className="inline-block animate-pulse">➔</span>
          </MotionButton>
          
          <motion.p 
            className="mt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Works on all mobile networks in Ghana
          </motion.p>
        </div>
      </div>
    </MotionSection>
  );
};

export default USSDInstructions;