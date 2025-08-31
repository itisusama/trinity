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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #157682, #18ddc6)',
      padding: '40px 20px',
      borderRadius: '16px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
      color: '#f0fdfa',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{
        flex: 1,
        textAlign: 'center',
        padding: '0 40px',
        borderRight: '2px solid rgba(255, 255, 255, 0.3)',
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          margin: 0,
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}>
          {projectsCount}+
        </h2>
        <p style={{
          fontSize: '18px',
          margin: '8px 0 0',
          opacity: 0.9,
        }}>
          Projects In The Past Year
        </p>
      </div>
      <div style={{
        flex: 1,
        textAlign: 'center',
        padding: '0 40px',
        borderRight: '2px solid rgba(255, 255, 255, 0.3)',
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          margin: 0,
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}>
          {satisfactionCount}/5
        </h2>
        <p style={{
          fontSize: '18px',
          margin: '8px 0 0',
          opacity: 0.9,
        }}>
          Customer Satisfaction Rate
        </p>
      </div>
      <div style={{
        flex: 1,
        textAlign: 'center',
        padding: '0 40px',
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          margin: 0,
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}>
          {teamCount}+
        </h2>
        <p style={{
          fontSize: '18px',
          margin: '8px 0 0',
          opacity: 0.9,
        }}>
          Professional Team Members
        </p>
      </div>
    </div>
  );
};

export default StatsCounter;