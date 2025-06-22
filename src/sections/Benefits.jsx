import React from 'react';
import { motion } from 'framer-motion';
import { MotionSection, MotionHeading } from '../components/motion';

const benefitsList = [
  {
    title: "No Bank Account Needed",
    description: "Use mobile money directly. No paperwork, no hassle.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Access crypto with just your phone number",
      "Works with MTN MoMo and Vodafone Cash",
      "Start with as little as 5 GHS"
    ]
  },
  {
    title: "Earn Weekly Rewards",
    description: "Your balance earns rewards automatically. No staking needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      "Up to 5% weekly rewards",
      "Automatic deposits to your wallet",
      "No minimum balance requirements"
    ]
  },
  {
    title: "Fast & Affordable Transfers",
    description: "Send money to any phone number in Ghana instantly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      "Transfers confirmed in seconds",
      "Low 1% transaction fee",
      "Send to any phone number in Ghana"
    ]
  },
  {
    title: "Secure & Reliable",
    description: "Protected by mobile money security plus crypto safeguards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      "Secured by your personal PIN",
      "Transaction confirmations via SMS",
      "24/7 customer support via WhatsApp"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300 } }
};

const Benefits = () => {
  return (
    <MotionSection 
      id="benefits" 
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <MotionHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Why Use KudiFI?
          </MotionHeading>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of Ghanaians accessing crypto through their feature phones
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefitsList.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow"
              variants={cardVariants}
            >
              <div className="flex items-start p-6">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] text-white flex items-center justify-center mr-5 shadow-md shrink-0"
                  variants={iconVariants}
                >
                  {benefit.icon}
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#0E49A1] transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                  
                  <ul className="space-y-2">
                    {benefit.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-gray-600 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Animated gradient border on hover */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#0E49A1] via-[#6F42C1] to-[#0E49A1] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-[#0E49A1] to-[#6F42C1] text-white px-8 py-3 rounded-md font-medium shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('dial-now').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Now with *123#
          </motion.button>
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default Benefits;