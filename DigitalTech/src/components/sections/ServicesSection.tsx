import React from 'react';
import {
  Code,
  Layout,
  ShoppingCart,
  Smartphone,
  Rocket,
  Layers,
  BarChart,
  Settings
} from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import { useInView } from '../hooks/useInView';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Creative and engaging website designs that capture your brand\'s essence and connect with your audience.',
    icon: Layout
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies that provide exceptional performance and user experience.',
    icon: Code
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with secure payment gateways and intuitive shopping experiences.',
    icon: ShoppingCart
  },
  {
    id: 4,
    title: 'Mobile-First Development',
    description: 'Responsive websites that work flawlessly across all devices, prioritizing the mobile experience.',
    icon: Smartphone
  },
  {
    id: 5,
    title: 'Performance Optimization',
    description: 'Speed up your website with best practices for optimal loading times and better user retention.',
    icon: Rocket
  },
  {
    id: 6,
    title: 'CMS Development',
    description: 'Custom content management systems that make updating your website simple and efficient.',
    icon: Layers
  },
  {
    id: 7,
    title: 'Analytics Integration',
    description: 'Implement powerful tracking tools to understand your users and make data-driven decisions.',
    icon: BarChart
  },
  {
    id: 8,
    title: 'Maintenance & Support',
    description: 'Ongoing technical support and regular updates to keep your website secure and running smoothly.',
    icon: Settings
  }
];

const ServicesSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <AnimatedText
            text="Solutions We Provide"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          />
          <p className="max-w-2xl mx-auto text-slate-600">
            We offer comprehensive web development services tailored to your unique needs,
            helping your business establish a powerful online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;