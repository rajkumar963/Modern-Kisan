
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoCarousel from '@/components/VideoCarousel';
import WhyModernKisan from '@/components/WhyModernKisan';
import MasterclassCategories from '@/components/MasterclassCategories';
import HowItWorks from '@/components/HowItWorks';
import Company from '@/components/Company';
import DraggableCourseCards from '@/components/DraggableCourseCards';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import GovernmentGrants from '@/components/GovernmentGrants';
import BlogSection from '@/components/BlogSection';
import Marketplace from '@/components/Marketplace';
import Footer from '@/components/Footer';

const Index = () => {
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main>
        <Hero />
        <VideoCarousel />
        <MasterclassCategories />
        <WhyModernKisan />
        <HowItWorks />
        <GovernmentGrants />
        <Marketplace />
        <BlogSection />
        <Company />
        <DraggableCourseCards />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
