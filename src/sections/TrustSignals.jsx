import React from 'react';
import { motion } from 'framer-motion';
import { MotionSection, MotionHeading } from '../components/motion';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Ama Owusu',
    location: 'Market Trader, Kumasi',
    text: 'KudiFI helps me earn rewards while working at the market - all from my basic phone!',
    imageUrl: '',
    avatar: '👩🏾‍🦱'
  },
  {
    name: 'Kofi Mensah',
    location: 'Taxi Driver, Accra',
    text: 'I receive payments and save earnings with KudiFI. The weekly rewards have added up!',
    imageUrl: '',
    avatar: '👨🏾‍🦲'
  },
  {
    name: 'Abena Poku',
    location: 'Student, Cape Coast',
    text: 'I send money to my family without needing internet. Fast, affordable, and reliable.',
    imageUrl: '',
    avatar: '👩🏾'
  }
];

const partners = [
  { name: 'MTN MoMo', color: 'text-[#FFC107]', bgcolor: 'bg-yellow-50' },
  { name: 'Vodafone Cash', color: 'text-[#E60000]', bgcolor: 'bg-red-50' },
  { name: 'ApeCoin DAO', color: 'text-[#6F42C1]', bgcolor: 'bg-purple-50' }
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const TrustSignals = () => {
  return (
    <MotionSection 
      id="trust-signals" 
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MotionHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Trusted Across Ghana
          </MotionHeading>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Join thousands using KudiFI daily
          </motion.p>
        </div>

        {/* Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] text-white flex items-center justify-center text-xl shadow-sm mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 text-sm pl-4">"{testimonial.text}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Info + Partners in a flex container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Security Info */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="bg-gradient-to-br from-[#0E49A1] to-[#6F42C1] h-14 w-14 rounded-full flex items-center justify-center mb-6 sm:mb-0 sm:mr-6 shadow-md shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bank-Grade Security</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your funds are secured by your personal PIN and all transactions are encrypted and confirmed via SMS. We use industry-standard security protocols and regular audits to keep your money safe.
                </p>
                <ul className="mt-4 space-y-2">
                  <motion.li 
                    className="flex items-center text-gray-600 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    PIN-protected transactions
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-600 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SMS confirmations
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-600 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 transaction monitoring
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Partner Logos */}
          <motion.div 
            className="lg:w-2/5 bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Partners</h3>
            <motion.div 
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {partners.map((partner, index) => (
                <motion.div 
                  key={index}
                  className={`${partner.bgcolor} rounded-lg p-4 flex items-center justify-between hover:shadow-sm transition-shadow`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className={`font-bold text-lg ${partner.color}`}>{partner.name}</span>
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
              ))}
              <motion.div
                className="mt-2 text-center"
                variants={itemVariants}
              >
                <p className="text-gray-500 text-sm">Official partners powering KudiFI's secure transactions</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* User count stats */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-[#0E49A1] to-[#6F42C1] rounded-xl shadow-md py-8 px-6 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Join Our Growing Community</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-3xl font-bold">10,000+</span>
              <span className="text-sm opacity-80">Active Users</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-3xl font-bold">₵500K+</span>
              <span className="text-sm opacity-80">Transactions Weekly</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="text-3xl font-bold">4.9/5</span>
              <span className="text-sm opacity-80">User Rating</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default TrustSignals;