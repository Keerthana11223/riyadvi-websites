
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];
    
  const socialLinks = [
    { icon: <Twitter className="h-6 w-6" />, href: '#' },
    { icon: <Linkedin className="h-6 w-6" />, href: '#' },
    { icon: <Github className="h-6 w-6" />, href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <NavLink to="/" className="text-3xl font-bold font-poppins text-white">
                Riyadvi<span className="text-brand-gold">.</span>
            </NavLink>
            <p className="text-gray-400">Custom Software & Digital Solutions to Grow Your Business.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-base text-gray-400 hover:text-brand-gold transition-colors duration-300">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
           <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-base text-gray-400">
                <li><a href="mailto:contact@riyadvi.com" className="hover:text-brand-gold">contact@riyadvi.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-brand-gold">+1 (234) 567-890</a></li>
                <li>123 Innovation Drive, Tech City</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-base text-gray-400">Subscribe for the latest insights and updates.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-brand-gold focus:border-brand-gold" placeholder="Enter your email" />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" className="w-full bg-brand-gold border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-gold transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Riyadvi Software Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
