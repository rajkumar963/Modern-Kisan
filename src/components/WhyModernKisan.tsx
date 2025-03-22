
import React from 'react';
import { Cpu, Globe, VideoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhyModernKisan = () => {
  const features = [
    {
      icon: VideoIcon,
      title: 'Learn from Experts',
      description: 'Video lessons from leading agriculturalists and industry pioneers.',
      delay: '100ms'
    },
    {
      icon: Cpu,
      title: 'Accessible Anytime, Anywhere',
      description: 'Watch on mobile, even with low bandwidth. Designed for rural connectivity.',
      delay: '300ms'
    },
    {
      icon: Globe,
      title: 'Regional Languages',
      description: 'Content available in Hindi, Marathi, Tamil, Telugu & more languages.',
      delay: '500ms'
    }
  ];

  return (
    <section id="why-modern-kisan" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-kisan-50 text-kisan-700 mb-4">Why Choose Us</span>
          <h2 className="section-title text-kisan-900">
            Why Modern Kisan?
          </h2>
          <p className="section-subtitle">
            We're bridging the knowledge gap in agriculture with accessible, 
            expert-led content designed specifically for Indian farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    icon: React.ElementType;
    title: string;
    description: string;
    delay: string;
  };
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { icon: Icon, title, description, delay } = feature;

  return (
    <div 
      className="glass-card rounded-2xl p-8 hover-lift animate-on-scroll"
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 bg-kisan-50 rounded-xl flex items-center justify-center mb-6 text-kisan-600">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-kisan-900 mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default WhyModernKisan;
