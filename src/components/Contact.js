import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section id="contact" className="relative">
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 px-6 md:px-20 shadow-inner border-t border-gray-700">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Left: Social Media Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-gray-300 border-b-2 border-gray-500 pb-1 inline-block">
              Follow Me
            </h3>

            <div className="flex space-x-6 text-2xl">
            <a href="https://www.linkedin.com/in/shivam-shukla-78515a170/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/shivamshukla9977" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition" aria-label="Instagram">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col space-y-1 text-sm">
            <h3 className="text-lg font-semibold text-gray-300 border-b-2 border-gray-500 pb-1 inline-block">
              Contact Me
            </h3>
            <p><span className="text-gray-400">Email:</span> <a href="mailto:contact@example.com" className="hover:underline">shishukla34@gmail.com.com</a></p>
            <p><span className="text-gray-400">Phone:</span> <a href="tel:+12345678900" className="hover:underline">+91 95891 16036</a></p>
            <p><span className="text-gray-400">Address:</span> indore, Madhya Pradesh, India</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
