import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rotate-45 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-ping"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;