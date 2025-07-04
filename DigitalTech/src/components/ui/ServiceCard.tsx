import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  delay,
  isVisible
}) => {
  return (
    <div 
      className={`bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } hover:-translate-y-1`}
      style={{
        transitionDelay: `${delay}s`,
        transitionProperty: 'opacity, transform'
      }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/10 to-indigo-500/10 flex items-center justify-center mb-4">
        <Icon className="text-sky-600" size={24} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;