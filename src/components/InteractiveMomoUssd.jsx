import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const InteractiveUSSDDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const ussdSteps = [
    { display: "📱 Dialing *123#...", delay: 1000 },
    { display: "🔄 Connecting to KudiFi...", delay: 1500 },
    { display: "✅ Welcome to KudiFi!", delay: 1000 },
    { display: "1. Create Wallet\n2. Buy ApeCoin\n3. Send Money\n4. Check Balance\n5. Cash Out", delay: 2000 },
    { display: "Select option (1-5): 2", delay: 1000 },
    { display: "💰 Buy ApeCoin\nEnter amount (GHS): 50", delay: 1500 },
    { display: "📲 Confirm with MoMo PIN\nPress 1 to confirm", delay: 1500 },
    { display: "✅ Success! 50 GHS → ApeCoin\n🎉 You're earning rewards!", delay: 2000 }
  ];

  useEffect(() => {
    if (isPlaying && currentStep < ussdSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, ussdSteps[currentStep].delay);
      return () => clearTimeout(timer);
    } else if (isPlaying && currentStep >= ussdSteps.length - 1) {
      const resetTimer = setTimeout(() => {
        setCurrentStep(0);
        setIsPlaying(false);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentStep, isPlaying, ussdSteps]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Montserrat' }}>
          Interactive USSD Demo
        </h3>
        
        <div className="bg-black/50 rounded-lg p-6 font-mono text-green-400 text-sm min-h-[200px] backdrop-blur-sm border border-green-500/20">
          <div className="whitespace-pre-line">
            {ussdSteps[currentStep]?.display}
          </div>
          {isPlaying && (
            <div className="mt-2">
              <span className="animate-pulse">|</span>
            </div>
          )}
        </div>
        
        <div className="text-center mt-6">
          <button
            onClick={startDemo}
            disabled={isPlaying}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>{isPlaying ? 'Demo Running...' : 'Start Demo'}</span>
            {!isPlaying && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveUSSDDemo;