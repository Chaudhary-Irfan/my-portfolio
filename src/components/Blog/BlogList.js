// Blog/BlogList.js
import React, { useEffect, useState } from 'react';
import blogData from './BlogData';
import { Link } from 'react-router-dom';
// MUI imports removed

const BlogList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(blogData);

    const categories = ['All', ...new Set(blogData.map(blog => blog.category))];

    useEffect(() => {
        let filtered = blogData;

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(blog => blog.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm.trim()) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(searchLower) ||
                blog.excerpt.toLowerCase().includes(searchLower) ||
                blog.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
                blog.author.toLowerCase().includes(searchLower)
            );
        }

        setFilteredBlogs(filtered);
    }, [selectedCategory, searchTerm]);

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [filteredBlogs]);

    return (
        <div className="blog-section">
            <div className="blog-background"></div>
            <div className="blog-container">
                {/* Search Bar */}
                <div className="mb-8 br-15 " >
                    <div className="max-w-lg mx-auto search-filter-container">
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 p-2.5 border border-gray-200 rounded-full bg-black shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:focus-within:border-blue-500" style={{ display: 'flex', flexDirection: 'row', padding: '10px', borderRadius: '30px' }}>
                            <div className="pl-2">
                                <svg className="h-5 w-5 t-10 text-gray-400" height="20px" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search blogs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input flex-grow bg-transparent focus:outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                            />
                            {searchTerm && (
                                <button
                                    type="button"
                                    onClick={() => setSearchTerm('')}
                                    className="clear-btn"
                                >
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}
                            <button type="submit" className="search-btn">
                                Search
                            </button>
                        </form>
                    </div>
                </div>


                {/* Category Filters */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-100 mb-6">Browse by Category</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            >
                                {category}
                                {category !== 'All' && (
                                    <span className="ml-2 text-xs opacity-75">
                                        ({blogData.filter(blog => blog.category === category).length})
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Results Info */}
                {(searchTerm || selectedCategory !== 'All') && (
                    <div className="mb-6 text-center">
                        <p className="text-gray-600">
                            {filteredBlogs.length === 0 ? 'No blogs found' :
                                `Showing ${filteredBlogs.length} of ${blogData.length} blog${filteredBlogs.length !== 1 ? 's' : ''}`}
                            {searchTerm && ` for "${searchTerm}"`}
                            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
                        </p>
                    </div>
                )}

                {/* Blog Table */}
                <div className="blog-card-container">
                    <table className="blog-table">
                        <tbody>
                            {Array.from({ length: Math.ceil(filteredBlogs.length / 3) }).map((_, rowIdx) => (
                                <tr key={rowIdx}>
                                    {filteredBlogs.slice(rowIdx * 3, rowIdx * 3 + 3).map((blog, colIdx) => (
                                        <td key={blog.id} className="blog-table-cell">
                                            <Link
                                                to={`/blog/${blog.slug}`}
                                                className="fade-in blog-card-view group"
                                                style={{
                                                    animationDelay: `${(rowIdx * 3 + colIdx) * 100}ms`,
                                                    textDecoration: 'none',
                                                    color: 'inherit'
                                                }}
                                            >
                                                <div className="blog-card-top relative overflow-hidden">
                                                    <img
                                                        src={blog.coverImage}
                                                        alt={blog.title}
                                                        className="blog-image w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                    {/* <div className="absolute top-2 left-4">
                                                        <span className="category-tag">
                                                            {blog.category}
                                                        </span>
                                                    </div> */}
                                                    <div className="blog-overlay">
                                                        <svg className="info-icon" fill="currentColor" viewBox="0 0 20 20" height="32">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>Read Article</span>
                                                    </div>
                                                </div>

                                                <div className="blog-card-body p-6">
                                                    <div className="blog-card-content">
                                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" style={{ height: '20px' }}>
                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="mr-2 text-xs">
                                                                {new Date(blog.date).toLocaleDateString('en-US', {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })}
                                                            </span>
                                                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" style={{ height: '20px' }}>
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>{blog.readTime}</span>
                                                        </div>

                                                        <h2 className="blog-title text-md font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                                            {blog.title}
                                                        </h2>

                                                        <p className="blog-description text-gray-600 text-xs mb-2 line-clamp-3">
                                                            {blog.excerpt}
                                                        </p>

                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                                                                <span
                                                                    key={tagIndex}
                                                                    className="tag"
                                                                >
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                            {blog.tags.length > 3 && (
                                                                <span className="text-gray-400 text-xs px-2 py-1">
                                                                    +{blog.tags.length - 3} more
                                                                </span>
                                                            )}
                                                        </div>

                                                    </div>
                                                    <div className="blog-card-footer flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="author-avatar">
                                                                CI
                                                            </div>
                                                            <span className="author-name">{blog.author}</span>
                                                        </div>

                                                        <span className="read-more-link group">
                                                            Read More
                                                            <svg height='20px' className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                    ))}
                                    {/* Fill empty cells if needed */}
                                    {Array.from({ length: 3 - filteredBlogs.slice(rowIdx * 3, rowIdx * 3 + 3).length }).map((_, emptyIdx) => (
                                        <td key={`empty-${emptyIdx}`} className="blog-table-cell empty-cell"></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No blogs found</h3>
                            <p className="text-gray-500">Try selecting a different category.</p>
                        </div>
                    )}
                </div>

            </div >
        </div >
    );
};

export default BlogList;
