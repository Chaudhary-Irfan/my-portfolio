// Blog.js
import React from 'react';
import BlogSEO from '../seo/BlogSEO';
import BlogList from './BlogList';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <BlogSEO />
            <main className="blog-main">
                <div className="max-w-5xl mx-auto">
                    {/* <h1 className="text-4xl font-bold text-gray-800 mb-6 blog-h1" >📚 chaudhary Irfan’s Blog</h1> */}
                    <p className="text-gray-600 mb-10 blog-h1">
                        Insights on React, Firebase, AI tools, deployment, and building modern web/mobile apps.
                    </p>
                    <BlogList />
                </div>
            </main>
        </>
    );
};

export default Blog;
