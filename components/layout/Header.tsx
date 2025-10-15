
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
    ];

    const linkClass = "text-gray-300 hover:text-brand-gold transition-colors duration-300";
    const activeLinkClass = "text-brand-gold";

    return (
        <header className="sticky top-0 z-50 bg-brand-black/80 backdrop-blur-lg shadow-lg shadow-brand-gold/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-2xl font-bold font-poppins text-white">
                            Riyadvi<span className="text-brand-gold">.</span>
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                       <Button to="/contact">Book a Consultation</Button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${linkClass} ${isActive ? activeLinkClass : ''}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                     <div className="pt-4 pb-3 border-t border-gray-700 px-5">
                        <Button to="/contact" fullWidth>Book a Consultation</Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
