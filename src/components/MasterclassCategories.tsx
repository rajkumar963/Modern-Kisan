import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Cpu, Leaf, Droplet, Building, TrendingUp, Flower, Globe } from 'lucide-react';

type Category = {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  courses: Course[];
};

type Course = {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  free: boolean;
};

const MasterclassCategories = () => {
  const [activeCategory, setActiveCategory] = useState('smart-farming');

  const categories: Category[] = [
    {
      id: 'smart-farming',
      name: 'Smart Farming & Precision Agriculture',
      icon: Cpu,
      description: 'Learn how technology is revolutionizing traditional farming practices.',
      courses: [
        {
          id: 'ai-iot',
          title: 'AI & IoT in Agriculture',
          description: 'How sensors, drones, and AI optimize farm productivity.',
          icon: '🌾',
          level: 'Intermediate',
          duration: '2h 30m',
          free: false,
        },
        {
          id: 'precision-farming',
          title: 'Precision Farming Techniques',
          description: 'Using GPS and data analytics for better yields.',
          icon: '🛰',
          level: 'Beginner',
          duration: '1h 45m',
          free: true,
        },
        {
          id: 'smart-irrigation',
          title: 'Smart Irrigation Systems',
          description: 'Drip vs. sprinkler vs. automated irrigation solutions.',
          icon: '💧',
          level: 'Beginner',
          duration: '2h 15m',
          free: false,
        },
        {
          id: 'drones',
          title: 'Drones in Agriculture',
          description: 'Aerial mapping, spraying, and pest monitoring.',
          icon: '🚁',
          level: 'Advanced',
          duration: '3h',
          free: false,
        },
        {
          id: 'smart-sensors',
          title: 'Smart Sensors & Weather Stations',
          description: 'Implementing IoT sensors for soil, climate, and crop monitoring.',
          icon: '📡',
          level: 'Intermediate',
          duration: '2h 15m',
          free: false,
        },
        {
          id: 'predictive-analytics',
          title: 'Predictive Analytics in Farming',
          description: 'Using data science for crop yield prediction and optimization.',
          icon: '📊',
          level: 'Advanced',
          duration: '3h 30m',
          free: false,
        },
      ],
    },
    {
      id: 'sustainable',
      name: 'Sustainable & Regenerative Agriculture',
      icon: Leaf,
      description: 'Discover farming methods that replenish rather than deplete natural resources.',
      courses: [
        {
          id: 'organic-farming',
          title: 'Organic Farming & Certification',
          description: 'How to build a profitable organic farm.',
          icon: '🥦',
          level: 'Beginner',
          duration: '2h 45m',
          free: true,
        },
        {
          id: 'soil-health',
          title: 'Soil Health & Regeneration',
          description: 'Improving fertility and yield naturally.',
          icon: '🌱',
          level: 'Intermediate',
          duration: '2h',
          free: false,
        },
        {
          id: 'permaculture',
          title: 'Permaculture & Agroforestry',
          description: 'Sustainable models for long-term productivity.',
          icon: '🌳',
          level: 'Advanced',
          duration: '3h 30m',
          free: false,
        },
      ],
    },
    {
      id: 'hydroponics',
      name: 'Hydroponics & Vertical Farming',
      icon: Droplet,
      description: 'Master soil-less farming techniques for maximum efficiency in minimal space.',
      courses: [
        {
          id: 'hydroponics-101',
          title: 'Hydroponics 101',
          description: 'Setting up a soil-less farming system.',
          icon: '💧',
          level: 'Beginner',
          duration: '1h 30m',
          free: true,
        },
        {
          id: 'vertical-farming',
          title: 'Vertical Farming for Urban Spaces',
          description: 'Maximizing output in minimal space.',
          icon: '🌆',
          level: 'Intermediate',
          duration: '2h 15m',
          free: false,
        },
      ],
    },
    {
      id: 'specialty-crops',
      name: 'Specialty & High-Value Crops',
      icon: Flower,
      description: 'Learn to grow and market high-value specialty crops for premium returns.',
      courses: [
        {
          id: 'kesar-farming',
          title: 'Kesar Saffron Cultivation',
          description: 'Complete guide to growing, harvesting, and marketing premium Kesar saffron.',
          icon: '🌷',
          level: 'Intermediate',
          duration: '3h 45m',
          free: false,
        },
        {
          id: 'exotic-fruits',
          title: 'Exotic Fruits Farming',
          description: 'Growing dragon fruit, passion fruit, and other exotic crops in Indian conditions.',
          icon: '🍉',
          level: 'Intermediate',
          duration: '2h 30m',
          free: false,
        },
        {
          id: 'medicinal-herbs',
          title: 'Medicinal Herbs Cultivation',
          description: 'Growing and processing high-value medicinal plants like ashwagandha and tulsi.',
          icon: '🌿',
          level: 'Beginner',
          duration: '2h 15m',
          free: true,
        },
      ],
    },
    {
      id: 'agri-tech',
      name: 'Agri-Tech & Digital Transformation',
      icon: Building,
      description: 'Embrace digital solutions that are reshaping the agricultural landscape.',
      courses: [
        {
          id: 'blockchain',
          title: 'Blockchain in Agriculture',
          description: 'Ensuring transparency in the supply chain.',
          icon: '🔗',
          level: 'Advanced',
          duration: '2h',
          free: false,
        },
        {
          id: 'ai-crop-disease',
          title: 'AI-Powered Crop Disease Detection',
          description: 'Using machine learning for early diagnosis.',
          icon: '🤖',
          level: 'Intermediate',
          duration: '1h 45m',
          free: false,
        },
      ],
    },
    {
      id: 'finance',
      name: 'Finance & Entrepreneurship',
      icon: TrendingUp,
      description: 'Build the business skills needed to make your farm commercially successful.',
      courses: [
        {
          id: 'agri-fintech',
          title: 'Agri-Fintech & Loan Access',
          description: 'How to secure funding for agribusiness.',
          icon: '💰',
          level: 'Beginner',
          duration: '1h 30m',
          free: true,
        },
        {
          id: 'export',
          title: 'Exporting Agri-Products',
          description: 'Navigating international markets and regulations.',
          icon: '🌍',
          level: 'Intermediate',
          duration: '2h 30m',
          free: false,
        },
      ],
    },
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section id="masterclasses" className="section-padding bg-kisan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-white text-kisan-700 mb-4">Our Curriculum</span>
          <h2 className="section-title text-kisan-900">
            Masterclass Categories
          </h2>
          <p className="section-subtitle">
            Explore our expert-led courses designed to elevate your farming knowledge and skills.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap",
                activeCategory === category.id
                  ? "bg-kisan-500 text-white shadow-md"
                  : "bg-white text-kisan-700 hover:bg-kisan-100"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12 max-w-3xl mx-auto animate-fade-in">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-kisan-600">
            <currentCategory.icon size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-kisan-900 mb-4">{currentCategory.name}</h3>
          <p className="text-muted-foreground">{currentCategory.description}</p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const { title, description, icon, level, duration, free } = course;
  
  const levelColors = {
    'Beginner': 'bg-blue-50 text-blue-700',
    'Intermediate': 'bg-amber-50 text-amber-700',
    'Advanced': 'bg-red-50 text-red-700',
  };

  return (
    <div 
      className="glass-card rounded-2xl overflow-hidden hover-lift animate-on-scroll"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="text-3xl">{icon}</span>
          {free ? (
            <span className="chip bg-kisan-100 text-kisan-700">Free</span>
          ) : (
            <span className="chip bg-earth-100 text-earth-800">Premium</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-kisan-900 mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className={cn("chip", levelColors[level])}>
            {level}
          </span>
          <span className="chip bg-gray-100 text-gray-700">
            {duration}
          </span>
        </div>
      </div>
      <div className="border-t border-gray-100 p-4 bg-white/50">
        <button className="text-kisan-600 font-medium flex items-center hover:text-kisan-700 transition-colors">
          View Course
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MasterclassCategories;
