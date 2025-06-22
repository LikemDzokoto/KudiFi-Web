import React from 'react';
import { motion } from 'framer-motion';
import { MotionSection, MotionHeading } from '../components/motion';

const features = [
  {
    title: "For Everyone",
    description: "Use on any phone - no internet or smartphone required",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    emoji: "📱",
    gradient: "from-blue-600 to-blue-400"
  },
  {
    title: "Ultra Secure",
    description: "Protected by your MoMo PIN - no extra passwords needed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    emoji: "🔐",
    gradient: "from-purple-600 to-purple-400"
  },
  {
    title: "Simple USSD",
    description: "Just dial *123# and follow the menu - as easy as using MoMo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    emoji: "📞",
    gradient: "from-green-600 to-green-400"
  },
  {
    title: "Instant Transfers",
    description: "Send money to anyone in seconds - no delays, no hassle",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    emoji: "⚡",
    gradient: "from-amber-600 to-amber-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const WhyUseKudiFI = () => {
  return (
    <MotionSection 
      id="features" 
      className="py-16 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MotionHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Key Features
          </MotionHeading>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Simple, accessible crypto for everyone in Ghana
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow relative group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, type: "spring", stiffness: 100 }
                }
              }}
            >
              {/* Gradient circle in the background */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-[#0E49A1]/10 to-[#6F42C1]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-6">
                <div className="mb-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] text-white shadow-md">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span>{feature.title}</span>
                  <span className="text-lg">{feature.emoji}</span>
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Bottom accent line */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#0E49A1] to-[#6F42C1] origin-left"
                initial={{ scaleX: 0.2 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 + (index * 0.1) }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default WhyUseKudiFI;