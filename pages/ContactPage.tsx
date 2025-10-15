
import React from 'react';
import { Mail, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Thank you for your message! We will get back to you shortly.");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-brand-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-poppins">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-brand-gold" />
              <a href="mailto:contact@riyadvi.com" className="text-gray-300 hover:text-brand-gold">contact@riyadvi.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-brand-gold" />
              <a href="tel:+1234567890" className="text-gray-300 hover:text-brand-gold">+1 (234) 567-890</a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-brand-gold" />
              <span className="text-gray-300">123 Innovation Drive, Tech City</span>
            </div>
            
            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold text-white">Book a Meeting</h3>
              <p className="text-gray-400 mt-2">Find a time that works for you on our calendar.</p>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                <Calendar className="h-5 w-5 mr-2" /> View Calendly
              </a>
            </div>
             <div className="pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold text-white">Chat with Us</h3>
              <p className="text-gray-400 mt-2">Get instant answers via WhatsApp.</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                <MessageSquare className="h-5 w-5 mr-2" /> WhatsApp
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-900/50 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input type="text" name="subject" id="subject" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold"></textarea>
              </div>
              <div>
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
