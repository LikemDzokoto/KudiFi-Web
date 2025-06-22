import React from 'react';
import { motion } from 'framer-motion';
import { MotionSection, MotionHeading } from '../components/motion';
import FAQItem from '../components/FAQItem';

const faqItems = [
  {
    question: "What is ApeCoin?",
    answer: "ApeCoin is a digital currency that powers KudiFi. It can increase in value over time, and you can buy, send, and earn it using just your mobile phone."
  },
  {
    question: "Is my money safe?",
    answer: "Yes. KudiFi uses mobile money security plus additional protections. Your wallet is PIN-protected, and we use encryption for all transactions with SMS confirmations."
  },
  {
    question: "How do I cash out?",
    answer: "Dial *123#, select 'Cash Out', choose your mobile money provider, enter the amount, and confirm with your PIN. Funds arrive in minutes."
  },
  {
    question: "How do I earn rewards?",
    answer: "You automatically earn weekly rewards on your ApeCoin balance. The more you hold, the more you earn."
  },
  {
    question: "Do I need internet or a smartphone?",
    answer: "No. KudiFi works entirely through USSD on any phone with network coverage. No internet or smartphone needed."
  },
  {
    question: "What are the fees?",
    answer: "Just 1% on buy/sell transactions and 0.5% for sending to other KudiFi users—much lower than traditional money transfers."
  },
  {
    question: "Which mobile money services work with KudiFi?",
    answer: "Currently MTN Mobile Money (MoMo) and Vodafone Cash in Ghana, with more providers and countries coming soon."
  },
  {
    question: "What if I forget my PIN?",
    answer: "Dial *123# and select 'Help' for our account recovery process, which verifies your identity through your mobile money account."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FAQ = () => {
  return (
    <MotionSection 
      id="faq" 
      className="py-16 md:py-24 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MotionHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Frequently Asked Questions
          </MotionHeading>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Quick answers to common questions
          </motion.p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-12 -z-10 opacity-5">
            <div className="absolute top-0 left-0 text-5xl">?</div>
            <div className="absolute top-0 right-0 text-5xl">?</div>
          </div>
          
        
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default FAQ;