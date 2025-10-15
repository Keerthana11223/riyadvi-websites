
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS_DATA } from '../constants';

const BlogPage: React.FC = () => {
    return (
        <div className="bg-brand-black py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-poppins">Our Insights</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Stay updated with the latest trends, tips, and thoughts from our team of experts.
                    </p>
                </div>
                
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {BLOG_POSTS_DATA.map((post) => (
                        <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-800 bg-gray-900/50 hover:border-brand-gold transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-brand-gold">
                                        {post.category}
                                    </p>
                                    <Link to={`/blog/${post.id}`} className="block mt-2">
                                        <p className="text-xl font-semibold text-white hover:underline">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-400">{post.excerpt}</p>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
