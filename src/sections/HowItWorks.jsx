import React from 'react';
import { motion } from 'framer-motion';
import { MotionSection, MotionDiv, MotionHeading, MotionParagraph } from '../components/motion';
import  InteractiveUSSDDemo from "../components/InteractiveMomoUssd";

const steps = [
  {
    number: 1,
    title: "Dial *123# to Start",
    description: "Use any phone to dial *123#. Create your wallet with a secure PIN in seconds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Buy ApeCoin",
    description: "Purchase ApeCoin with MTN MoMo or Vodafone Cash. Confirm with your mobile money PIN.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Send & Earn",
    description: "Send crypto to anyone with a phone number. Hold ApeCoin to earn weekly rewards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Cash Out",
    description: "Easily withdraw to mobile money. Get cash in minutes with just a few USSD commands.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HowItWorks = () => {
  return (
    <MotionSection 
      id="how-it-works" 
      className="py-16 md:py-24 bg-gray-50"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Simple Process
          </div>
          <MotionHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            How It Works
          </MotionHeading>
          <MotionParagraph 
            className="text-gray-600 text-lg max-w-xl mx-auto"
            delay={0.1}
          >
            Access crypto with any phone. No internet or smartphone needed.
          </MotionParagraph>
        </div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative hover:shadow-md transition-shadow overflow-hidden group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-[#0E49A1]/10 to-[#6F42C1]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-[#0E49A1] rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-md">
                  {step.number}
                </div>
                <div className="h-9 w-9 bg-gray-100 rounded-md flex items-center justify-center text-[#6F42C1]">
                  {step.icon}
                </div>
              </div>
              
              <motion.h3 
                className="text-lg font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                {step.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* USSD Flow Visualization */}
        <motion.div 
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] p-6 text-white flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Simple USSD Commands</h3>
                <p className="text-sm opacity-90 mb-4">Follow these easy steps on any phone:</p>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-xs">*123#</span>
                    <span>Dial to access the menu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-xs">1</span>
                    <span>Create wallet (first time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-xs">2</span>
                    <span>Buy ApeCoin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-xs">3</span>
                    <span>Send crypto to others</span>
                  </li>
                </ol>
              </div>
              
              <div className="md:w-3/5 p-6 flex items-center justify-center">
                <div className="relative w-40 h-64 bg-gray-800 rounded-2xl overflow-hidden border-8 border-gray-800 shadow-lg">
                  <div className="absolute top-0 inset-x-0 h-4 bg-gray-800 rounded-b-xl"></div>
                  <div className="bg-gray-200 h-full w-full p-2 pt-4 text-center">
                    <p className="text-xs font-bold mb-2">MTN USSD</p>
                    <motion.div 
                      className="bg-white p-2 rounded text-left text-xs font-mono"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p>Welcome to KudiFI</p>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: 'auto', opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <p>1: Create Wallet</p>
                        <p>2: Buy ApeCoin</p>
                        <p>3: Send ApeCoin</p>
                        <p>4: Check Balance</p>
                        <p>5: Cash Out</p>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        transition={{ delay: 1.2 }}
                      >
                        Enter option:
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <InteractiveUSSDDemo/>

        </motion.div>
      </div>
    </MotionSection>
  );
};

export default HowItWorks;