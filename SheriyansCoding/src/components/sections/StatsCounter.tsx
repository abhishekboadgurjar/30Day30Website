import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Award, BookOpen, Briefcase } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  inView: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', inView }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(countUp);
      }
    };
    
    animationFrame = requestAnimationFrame(countUp);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);
  
  return (
    <span>{count}{suffix}</span>
  );
};

const StatsCounter: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const stats = [
    { 
      icon: <Users size={28} className="text-indigo-600" />,
      value: 5000, 
      label: "Students Trained", 
      suffix: "+" 
    },
    { 
      icon: <BookOpen size={28} className="text-indigo-600" />,
      value: 25, 
      label: "Professional Courses", 
      suffix: "" 
    },
    { 
      icon: <Award size={28} className="text-indigo-600" />,
      value: 15, 
      label: "Industry Awards", 
      suffix: "" 
    },
    { 
      icon: <Briefcase size={28} className="text-indigo-600" />,
      value: 97, 
      label: "Job Placement Rate", 
      suffix: "%" 
    }
  ];
  
  return (
    <section className="py-16 bg-indigo-700 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-indigo-800/50 hover:bg-indigo-800 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <Counter 
                  end={stat.value} 
                  duration={2000} 
                  suffix={stat.suffix} 
                  inView={inView} 
                />
              </h3>
              <p className="text-indigo-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;