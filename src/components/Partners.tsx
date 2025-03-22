
import React from 'react';
import { cn } from '@/lib/utils';

const Partners = () => {
  const partners = [
    {
      name: 'AgroTech Solutions',
      category: 'Agri-Tech',
      logo: 'https://via.placeholder.com/150x80?text=AgroTech',
    },
    {
      name: 'FarmInnovate',
      category: 'Technology',
      logo: 'https://via.placeholder.com/150x80?text=FarmInnovate',
    },
    {
      name: 'Rural Initiative',
      category: 'NGO',
      logo: 'https://via.placeholder.com/150x80?text=RuralInitiative',
    },
    {
      name: 'Kisan Seva',
      category: 'Government',
      logo: 'https://via.placeholder.com/150x80?text=KisanSeva',
    },
    {
      name: 'CropAI',
      category: 'Agri-Tech',
      logo: 'https://via.placeholder.com/150x80?text=CropAI',
    },
    {
      name: 'FarmFund',
      category: 'Finance',
      logo: 'https://via.placeholder.com/150x80?text=FarmFund',
    },
  ];

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-kisan-50 text-kisan-700 mb-4">Collaborations</span>
          <h2 className="section-title text-kisan-900">
            Our Partners
          </h2>
          <p className="section-subtitle">
            We work with leading organizations in agriculture, technology, and education
            to bring the best resources to Indian farmers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-kisan-900 mb-6">
            Interested in Partnering with Us?
          </h3>
          <button className="btn-secondary">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

interface PartnerLogoProps {
  partner: {
    name: string;
    category: string;
    logo: string;
  };
  index: number;
}

const PartnerLogo = ({ partner, index }: PartnerLogoProps) => {
  const { name, category, logo } = partner;

  return (
    <div 
      className="glass-card rounded-xl p-4 flex flex-col items-center justify-center hover-lift animate-on-scroll"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-12 mb-3 flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-sm font-medium text-center text-kisan-900">{name}</p>
      <span className="text-xs text-kisan-600">{category}</span>
    </div>
  );
};

export default Partners;
