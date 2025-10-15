
import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-black text-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden py-24 sm:py-32">
                <div className="absolute inset-0 bg-grid-gray-700/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-poppins">About Riyadvi</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        We are more than a software company. We are your strategic partners in digital innovation.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-24 sm:py-32 bg-black">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-poppins">Our Story</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-400">
                            Founded in 2021, Riyadvi Software Technologies was born from a passion for solving complex problems with elegant technological solutions. We saw a gap between businesses' needs and what traditional vendors offered. We set out to be different: a partner that truly understands business goals and translates them into powerful digital products.
                        </p>
                        <p className="mt-4 text-lg leading-8 text-gray-400">
                            From our humble beginnings, we have grown into a multidisciplinary team of strategists, designers, and engineers, united by a single purpose: to help our clients succeed in the digital age.
                        </p>
                    </div>
                    <img
                        src="https://picsum.photos/seed/team/800/600"
                        alt="Our Team"
                        className="rounded-xl shadow-2xl"
                    />
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                    <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                            <Eye className="h-12 w-12 text-brand-gold"/>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-poppins">Our Vision</h3>
                            <p className="mt-2 text-gray-400">To be a globally recognized leader in digital transformation, known for our innovation, integrity, and the tangible value we create for our partners.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                            <Target className="h-12 w-12 text-brand-gold"/>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-poppins">Our Mission</h3>
                            <p className="mt-2 text-gray-400">To empower businesses with custom-built, user-centric digital solutions that drive growth, enhance efficiency, and create lasting competitive advantages.</p>
                        </div>
                    </div>
                </div>
            </div>
            
             {/* Awards */}
            <div className="bg-black py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-poppins">Awards & Certifications</h2>
                    <p className="mt-4 text-lg text-gray-400">Our commitment to excellence has been recognized by the industry.</p>
                    <div className="mt-16 inline-flex items-center bg-gray-900 p-8 rounded-lg border border-brand-gold">
                        <Award className="h-16 w-16 text-brand-gold" />
                        <div className="ml-6 text-left">
                            <p className="text-2xl font-bold text-white">Star of Excellence Award</p>
                            <p className="text-lg text-gray-300">Awarded in 2021 for Innovation in Software Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
