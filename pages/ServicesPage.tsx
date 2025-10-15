
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-poppins">Our Digital Solutions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            We provide a comprehensive suite of services to build, launch, and grow your digital products.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service: Service) => (
            <div key={service.id} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-2 group flex flex-col">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-gold text-black mb-6 flex-shrink-0">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400 flex-grow">{service.shortDescription}</p>
              <Link to={`/services/${service.id}`} className="mt-6 inline-flex items-center text-brand-gold font-semibold group-hover:underline">
                View Details <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
