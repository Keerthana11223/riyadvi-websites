
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-brand-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-poppins">Our Portfolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            We take pride in our work. Explore a selection of projects that showcase our commitment to quality and innovation.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project: Project) => (
            <Link to={`/portfolio/${project.id}`} key={project.id} className="group block rounded-lg overflow-hidden relative border border-gray-800 hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-2">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-sm font-semibold text-brand-gold">{project.category}</span>
                  <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
