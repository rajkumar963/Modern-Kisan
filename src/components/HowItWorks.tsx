
import React from 'react';
import { CheckCircle2, ListChecks, PlayCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: ListChecks,
      title: 'Choose a Course',
      description: 'Browse free & premium lessons tailored to your farming needs and interests.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: PlayCircle,
      title: 'Watch & Learn',
      description: 'Short, expert-led video lessons designed for busy farmers with practical insights.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: CheckCircle2,
      title: 'Apply in Your Farm',
      description: "Implement what you've learned with ongoing support from our community.",
      color: 'bg-green-50 text-green-600',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-kisan-50 rounded-bl-[100px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-kisan-50 rounded-tr-[70px] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="chip bg-kisan-50 text-kisan-700 mb-4">Simple Process</span>
          <h2 className="section-title text-kisan-900">
            How It Works
          </h2>
          <p className="section-subtitle">
            Our learning platform is designed for simplicity and ease of use, 
            even for farmers with limited digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connect line between steps (desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-kisan-100">
            <div className="absolute left-1/6 right-1/6 h-full" />
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
              <StepCard step={step} index={index + 1} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#masterclasses" className="btn-primary">
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  const { icon: Icon, title, description, color } = step;

  return (
    <div className="glass-card rounded-2xl p-8 text-center hover-lift h-full flex flex-col">
      <div className="relative mb-6 mx-auto">
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-kisan-500 text-white flex items-center justify-center font-bold">
          {index}
        </div>
      </div>
      <h3 className="text-xl font-bold text-kisan-900 mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default HowItWorks;
