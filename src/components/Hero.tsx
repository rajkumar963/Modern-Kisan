
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Simulate a video background with a placeholder
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* In a real implementation, this would be a video */}
        <div className="absolute inset-0 bg-kisan-900/30 z-10" />
        <div className="h-full w-full bg-kisan-100 hero-pattern">
          {/* Video placeholder */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-farmer-plowing-land-with-a-tractor-4698-large.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 py-12 max-w-7xl mx-auto text-center">
        <div className="inline-block">
          <span className="chip bg-white/90 text-kisan-800 mb-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            🚀 The Future of Agricultural Education
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-display animate-fade-in" style={{ animationDelay: '400ms' }}>
          Farming Smarter, <br className="hidden md:block" />
          <span className="relative">
            Growing Stronger
            <svg 
              className="absolute -bottom-2 left-0 w-full h-3 text-kisan-500 hidden md:block" 
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
            >
              <path 
                d="M0,5 C50,0 150,0 200,5" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '500ms' }}>
          Expert-led video masterclasses on modern farming techniques, 
          delivered in your language, accessible anytime, anywhere.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a href="#masterclasses" className="btn-primary group">
            Start Learning Now
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#how-it-works" className="btn-secondary">
            How It Works
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#why-modern-kisan" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors animate-pulse-subtle"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
