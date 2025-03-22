
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kisan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-kisan-900 font-bold text-sm">MK</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Modern Kisan
              </span>
            </div>
            <p className="text-kisan-100 mb-4">
              Empowering farmers with modern agricultural knowledge through accessible video-based education.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} label="Facebook" />
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
              <SocialLink href="#" icon={Youtube} label="YouTube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#masterclasses" label="Courses" />
              <FooterLink href="#how-it-works" label="How It Works" />
              <FooterLink href="#testimonials" label="Testimonials" />
              <FooterLink href="#partners" label="Partners" />
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Popular Courses</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Drone Farming" />
              <FooterLink href="#" label="Organic Certification" />
              <FooterLink href="#" label="Smart Irrigation" />
              <FooterLink href="#" label="Agri-Entrepreneurship" />
              <FooterLink href="#" label="Vertical Farming" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <p className="text-kisan-100 mb-4">
              Have questions? Reach out to us via WhatsApp or call our support team.
            </p>
            <a 
              href="#" 
              className="flex items-center gap-2 text-white font-medium bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-lg mb-3"
            >
              <MessageCircle size={20} />
              WhatsApp Support
            </a>
            <p className="text-kisan-100">
              Call: +91 1234 567 890 <br />
              Email: support@modernkisan.com
            </p>
          </div>
        </div>

        <div className="border-t border-kisan-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-kisan-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Modern Kisan. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-kisan-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-8 h-8 rounded-full bg-kisan-700 hover:bg-kisan-600 transition-colors flex items-center justify-center"
    >
      <Icon size={18} />
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-kisan-100 hover:text-white transition-colors"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
