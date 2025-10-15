
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import Button from '../components/ui/Button';

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_DATA.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-40">
        <h1 className="text-2xl text-white">Project not found.</h1>
        <Link to="/portfolio" className="text-brand-gold mt-4 inline-block">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="bg-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <Link to="/portfolio" className="inline-flex items-center text-brand-gold hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio
            </Link>
        </div>
        
        <div className="text-center">
            <span className="text-brand-gold font-semibold">{project.category}</span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white font-poppins">{project.title}</h1>
            <p className="mt-4 text-lg text-gray-400">Client: {project.client}</p>
        </div>

        <img src={project.imageUrl} alt={project.title} className="mt-12 rounded-lg shadow-2xl w-full max-w-4xl mx-auto" />

        <div className="mt-20 max-w-4xl mx-auto prose prose-invert prose-lg text-gray-300">
            <h2 className="text-brand-gold font-semibold">The Problem</h2>
            <p>{project.problem}</p>
            
            <h2 className="text-brand-gold font-semibold">Our Solution</h2>
            <p>{project.solution}</p>
            
            <h2 className="text-brand-gold font-semibold">The Result</h2>
            <p>{project.result}</p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Tools & Technologies Used</h3>
            <div className="flex flex-wrap gap-4 justify-center">
                {project.tools.map(tool => (
                    <span key={tool} className="bg-gray-800 text-brand-gold text-md font-medium px-4 py-2 rounded-full">{tool}</span>
                ))}
            </div>
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white">Have a similar project in mind?</h2>
            <div className="mt-6">
                <Button to="/contact">Let's Talk</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
