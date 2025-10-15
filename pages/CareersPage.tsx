
import React, { useState, useMemo } from 'react';
import { CAREERS_DATA } from '../constants';
import type { Job } from '../types';
import Button from '../components/ui/Button';

const CareersPage: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [filters, setFilters] = useState({ department: 'All', designation: 'All' });

    const departments = ['All', ...Array.from(new Set(CAREERS_DATA.map(j => j.department)))];
    const designations = ['All', ...Array.from(new Set(CAREERS_DATA.map(j => j.designation)))];

    const filteredJobs = useMemo(() => {
        return CAREERS_DATA.filter(job => 
            (filters.department === 'All' || job.department === filters.department) &&
            (filters.designation === 'All' || job.designation === filters.designation)
        );
    }, [filters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleApply = (job: Job) => {
        setSelectedJob(job);
        // In a real app, you might scroll to a form
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    return (
        <div className="bg-brand-black py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-poppins">Join Our Team</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        We're looking for passionate individuals to help us build the future of technology.
                    </p>
                </div>

                {/* Filters */}
                <div className="mt-12 flex justify-center gap-4 sm:gap-8">
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-400">Department</label>
                        <select name="department" id="department" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-800 border-gray-700 focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm rounded-md text-white">
                            {departments.map(d => <option key={d}>{d}</option>)}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="designation" className="block text-sm font-medium text-gray-400">Designation</label>
                        <select name="designation" id="designation" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-800 border-gray-700 focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm rounded-md text-white">
                            {designations.map(d => <option key={d}>{d}</option>)}
                        </select>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="mt-12 space-y-8">
                    {filteredJobs.length > 0 ? filteredJobs.map(job => (
                        <div key={job.id} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                <p className="mt-1 text-gray-400">{job.department} &middot; {job.designation}</p>
                                <p className="mt-4 text-gray-300">{job.description}</p>
                            </div>
                            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                                <Button onClick={() => handleApply(job)}>Apply Now</Button>
                            </div>
                        </div>
                    )) : (
                        <p className="text-center text-gray-400 text-lg py-10">No open positions match your criteria. Check back soon!</p>
                    )}
                </div>

                {/* Application Form */}
                {selectedJob && (
                    <div id="application-form" className="mt-20 pt-12 border-t border-gray-800">
                        <h2 className="text-3xl font-bold text-center text-white">Apply for {selectedJob.title}</h2>
                        <div className="mt-8 max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg border border-gray-800">
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for applying!'); }}>
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                                    <input type="text" name="fullName" id="fullName" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                    <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                                </div>
                                 <div>
                                    <label htmlFor="resume" className="block text-sm font-medium text-gray-300">Resume/CV</label>
                                    <input type="file" name="resume" id="resume" required className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-gold file:text-black hover:file:bg-yellow-500"/>
                                </div>
                                <Button type="submit" fullWidth>Submit Application</Button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CareersPage;
