import React, { useState, useEffect } from 'react';

const StatsCounter = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0.0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const steps = 50; // Number of steps for smooth animation
    const projectTarget = 100;
    const satisfactionTarget = 4.9;
    const teamTarget = 20;

    const projectIncrement = projectTarget / steps;
    const satisfactionIncrement = satisfactionTarget / steps;
    const teamIncrement = teamTarget / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProjectsCount(Math.min(Math.round(currentStep * projectIncrement), projectTarget));
      setSatisfactionCount(Math.min((currentStep * satisfactionIncrement).toFixed(1), satisfactionTarget));
      setTeamCount(Math.min(Math.round(currentStep * teamIncrement), teamTarget));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 bg-gradient-to-br from-[#157682] to-[#18ddc6] p-8 lg:rounded-2xl shadow-lg text-[#f0fdfa] max-w-6xl mx-auto">
  <div className="flex-1 min-w-[250px] text-center px-5 md:border-r md:border-white/30 last:border-none">
    <h2 className="text-5xl font-bold">{projectsCount}+</h2>
    <p className="text-lg opacity-90 mt-2">Projects In The Past Year</p>
  </div>
  <div className="flex-1 min-w-[250px] text-center px-5 md:border-r md:border-white/30 last:border-none">
    <h2 className="text-5xl font-bold">{satisfactionCount}/5</h2>
    <p className="text-lg opacity-90 mt-2">Customer Satisfaction Rate</p>
  </div>
  <div className="flex-1 min-w-[250px] text-center px-5">
    <h2 className="text-5xl font-bold">{teamCount}+</h2>
    <p className="text-lg opacity-90 mt-2">Professional Team Members</p>
  </div>
</div>

  );
};

export default StatsCounter;