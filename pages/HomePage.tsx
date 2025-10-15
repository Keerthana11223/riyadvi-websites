
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, BarChart, Download } from 'lucide-react';
import Button from '../components/ui/Button';
import { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA } from '../constants';
import type { Service, Project, Testimonial } from '../types';

// Section: Hero
const HeroSection: React.FC = () => (
  <div className="bg-brand-black text-white relative">
    <div className="absolute inset-0 bg-grid-gray-700/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center relative z-10">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white leading-tight font-poppins">
        Custom Software & Digital Solutions to <span className="text-brand-gold">Grow Your Business</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
        Web & App Development, UI/UX Design, and Business Strategy – all tailored to your needs.
      </p>
      <div className="mt-10">
        <Button to="/contact">Book a Free Consultation</Button>
      </div>
    </div>
  </div>
);

// Section: Services Overview
const ServicesSection: React.FC = () => (
    <div className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">Our Expertise</h2>
                <p className="mt-4 text-lg text-gray-400">We are your solution partners, not just vendors.</p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES_DATA.map((service: Service) => (
                    <div key={service.id} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-2 group">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-gold text-black mb-6">
                            <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <p className="mt-2 text-gray-400">{service.shortDescription}</p>
                        <Link to={`/services/${service.id}`} className="mt-6 inline-flex items-center text-brand-gold font-semibold group-hover:underline">
                            Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


// Section: Why Choose Us
const WhyChooseUsSection: React.FC = () => {
    const features = [
        { icon: Clock, title: 'Since 2021', description: 'Proven track record of delivering excellence and innovation in the tech industry.' },
        { icon: BarChart, title: 'Business Health Checkup', description: 'We analyze your digital ecosystem to identify growth opportunities and bottlenecks.' },
        { icon: CheckCircle, title: 'End-to-End Solutions', description: 'From idea to launch and beyond, we are your dedicated partners for the entire journey.' },
    ];
    return (
        <div className="py-20 sm:py-28 bg-brand-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">Why Partner With Riyadvi?</h2>
                    <p className="mt-4 text-lg text-gray-400">We don't just build products; we build partnerships that foster growth.</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
                    {features.map(feature => (
                        <div key={feature.title}>
                            <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-gray-800 text-brand-gold mb-6">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                            <p className="mt-2 text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section: Lead Magnet
const LeadMagnetSection: React.FC = () => (
    <div className="bg-brand-gold">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-black font-poppins">Download Our Software Project Planning Guide</h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-800">
                    Get expert insights and a step-by-step checklist to ensure your next software project is a success from day one.
                </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
                <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email-address" type="email" autoComplete="email" required className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-600 focus:ring-white focus:border-white rounded-md text-black" placeholder="Enter your email"/>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-gold bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-600 focus:ring-black">
                            <Download className="mr-2 h-5 w-5" /> Download Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);


// Section: Portfolio Preview
const PortfolioPreviewSection: React.FC = () => (
    <div className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">Our Work in Action</h2>
                <p className="mt-4 text-lg text-gray-400">See how we've helped businesses like yours achieve their goals.</p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
                {PROJECTS_DATA.slice(0, 2).map((project: Project) => (
                    <Link to={`/portfolio/${project.id}`} key={project.id} className="group block rounded-lg overflow-hidden relative border border-gray-800 hover:border-brand-gold transition-all duration-300">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <span className="text-sm font-semibold text-brand-gold">{project.category}</span>
                            <h3 className="mt-1 text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-12 text-center">
                <Button to="/portfolio" variant="secondary">View Full Portfolio</Button>
            </div>
        </div>
    </div>
);

// Section: Testimonials
const TestimonialsSection: React.FC = () => (
    <div className="py-20 sm:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">What Our Partners Say</h2>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
                {TESTIMONIALS_DATA.map((testimonial: Testimonial) => (
                    <div key={testimonial.name} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                            <img src={testimonial.photoUrl} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                            <div className="ml-4">
                                <p className="font-bold text-white">{testimonial.name.split(',')[0]}</p>
                                <p className="text-sm text-gray-400">{testimonial.name.split(',')[1]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <LeadMagnetSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
