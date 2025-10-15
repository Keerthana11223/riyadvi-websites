
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import Button from '../components/ui/Button';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-40">
        <h1 className="text-2xl text-white">Service not found.</h1>
        <Link to="/services" className="text-brand-gold mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <Link to="/services" className="inline-flex items-center text-brand-gold hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all services
            </Link>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-brand-gold text-black">
                        <service.icon className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-poppins">{service.title}</h1>
                </div>

                <div className="mt-8 prose prose-invert prose-lg text-gray-300 max-w-none">
                    <h2 className="text-brand-gold font-semibold">The Problem</h2>
                    <p>{service.problem}</p>
                    <h2 className="text-brand-gold font-semibold">Our Solution</h2>
                    <p>{service.solution}</p>
                </div>
            </div>

            <div className="mt-12 lg:mt-0">
                <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                    <ul className="space-y-4">
                        {service.features.map(feature => (
                            <li key={feature} className="flex items-start">
                                <Check className="h-6 w-6 text-brand-gold flex-shrink-0 mr-3 mt-1" />
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <Button to="/contact" fullWidth>Get a Quote</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Industry Use Cases</h3>
                <div className="space-y-4">
                    {service.useCases.map(useCase => (
                        <div key={useCase} className="bg-gray-900 p-4 rounded-md border border-gray-800">{useCase}</div>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="text-2xl font-bold text-white mb-6">Tools & Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                    {service.techStack.map(tech => (
                        <span key={tech} className="bg-gray-800 text-brand-gold text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
