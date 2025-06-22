import React, { useState, useEffect } from 'react';

const CountingStats = ({ stats }) => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            if (stat.countTo) {
              animateCount(index, stat.countTo);
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('counting-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  const animateCount = (index, target) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = Math.floor(current);
        return newCounts;
      });
    }, duration / steps);
  };

  return (
    <div id="counting-stats" className="grid md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat' }}>
            {stat.countTo ? counts[index].toLocaleString() + (stat.value.includes('%') ? '%' : '+') : stat.value}
          </div>
          <div className="text-white">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountingStats;