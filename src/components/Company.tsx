
import React from 'react';
import { Users, Building2, Award, MapPin } from 'lucide-react';

const Company = () => {
  const companyInfo = [
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated team of agriculturists, tech experts, and educators working to transform Indian farming.'
    },
    {
      icon: Building2,
      title: 'Our Mission',
      description: 'To empower every Indian farmer with access to modern agricultural knowledge and techniques.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Innovation, accessibility, sustainability, and farmer-first approach in everything we do.'
    },
    {
      icon: MapPin,
      title: 'Our Reach',
      description: 'Present in 15 states across India, supporting over 50,000 farmers with practical knowledge.'
    }
  ];

  return (
    <section id="company" className="section-padding bg-kisan-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-kisan-100 rounded-tl-[100px] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="chip bg-white text-kisan-700 mb-4">Our Company</span>
          <h2 className="section-title text-kisan-900">
            About Modern Kisan
          </h2>
          <p className="section-subtitle">
            Founded in 2023, Modern Kisan is bridging the knowledge gap in agriculture with accessible, 
            expert-led content designed specifically for Indian farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-8 hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 text-kisan-600 shrink-0">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kisan-900 mb-2">{info.title}</h3>
                    <p className="text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-kisan-900 mb-4 text-center">Our Growth Journey</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-kisan-600">50,000+</p>
              <p className="text-sm text-muted-foreground">Farmers Trained</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-kisan-600">15</p>
              <p className="text-sm text-muted-foreground">States Covered</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-kisan-600">200+</p>
              <p className="text-sm text-muted-foreground">Expert Courses</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-kisan-600">8</p>
              <p className="text-sm text-muted-foreground">Regional Languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
