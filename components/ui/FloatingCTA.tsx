
import React, { useState } from 'react';
import { MessageSquare, Calendar, X, ChevronUp } from 'lucide-react';

const FloatingCTA: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className="relative flex flex-col items-center">
                {isOpen && (
                    <div className="flex flex-col items-center mb-4 space-y-3">
                        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-black rounded-full p-3 shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-110" title="Book a Meeting">
                            <Calendar className="h-6 w-6" />
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all transform hover:scale-110" title="Chat on WhatsApp">
                            <MessageSquare className="h-6 w-6" />
                        </a>
                    </div>
                )}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-brand-gold text-black rounded-full p-4 shadow-xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black transition-transform duration-300 transform hover:scale-110"
                >
                    {isOpen ? <X className="h-7 w-7" /> : <ChevronUp className="h-7 w-7" />}
                </button>
            </div>
        </div>
    );
};

export default FloatingCTA;
