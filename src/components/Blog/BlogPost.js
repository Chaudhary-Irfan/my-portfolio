// Blog/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import blogData from './BlogData';

const CodeBlock = ({ className, children }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedCode, setEditedCode] = useState(String(children).replace(/\n$/, ''));
    const [copyText, setCopyText] = useState('Copy');

    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';

    const handleCopy = () => {
        navigator.clipboard.writeText(editedCode);
        setCopyText('Copied!');
        setTimeout(() => setCopyText('Copy'), 2000);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="code-block-container">
            <div className="code-block-header">
                <span className="code-block-language">{language}</span>
                <div className="code-block-actions">
                    <button onClick={handleCopy} className="code-block-action-btn">
                        {copyText}
                    </button>
                    <button onClick={handleEditToggle} className="code-block-action-btn">
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>
            <div className="code-block-content">
                {isEditing ? (
                    <textarea
                        className="code-block-editable"
                        value={editedCode}
                        onChange={(e) => setEditedCode(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <SyntaxHighlighter
                        style={tomorrow}
                        language={language}
                        PreTag="div"
                    >
                        {editedCode}
                    </SyntaxHighlighter>
                )}
            </div>
        </div>
    );
};

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogData.find((item) => item.slug === slug);
    const [markdownContent, setMarkdownContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (blog && blog.filePath) {
            fetch(blog.filePath)
                .then((res) => res.text())
                .then((content) => {
                    setMarkdownContent(content);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error('Error loading markdown:', err);
                    setIsLoading(false);
                });
        }
    }, [blog]);

    const shareOnTwitter = () => {
        const url = window.location.href;
        const text = `Check out this amazing blog post: ${blog.title}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        const url = window.location.href;
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnWhatsApp = () => {
        const url = window.location.href;
        const text = `Check out this blog post: ${blog.title} - ${url}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-8">Blog post not found</p>
                    <Link to="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading blog post...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-container">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    style={{ width: '60%', height: '50%' }}
                    className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <div className="mb-4">
                            <span className="category-tag">
                                {blog.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">{blog.title}</h1>
                        <p className="text-md md:text-lg text-gray-200 mb-4">{blog.description}</p>
                        <div className="flex items-center justify-center space-x-4 text-xs">
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" style={{ height: '20px' }}>
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg><span> </span>
                                {blog.author}
                            </span><span> </span>
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" style={{ height: '20px' }}>
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg><span> </span>
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span><span> </span>
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" style={{ height: '20px' }}>
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg><span> </span>
                                {blog.readTime}
                            </span><span> </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="max-w-4xl mx-auto px-4 py-12">
                {/* Tags */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Social Share */}
                <div className="social-share-card">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={shareOnTwitter}
                            className="social-share-btn twitter"
                        >
                            {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg> */}
                            <span>Twitter</span>
                        </button>
                        <button
                            onClick={shareOnLinkedIn}
                            className="social-share-btn linkedin"
                        >
                            {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg> */}
                            <span>LinkedIn</span>
                        </button>
                        <button
                            onClick={shareOnWhatsApp}
                            className="social-share-btn whatsapp"
                        >
                            {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg> */}
                            <span>WhatsApp</span>
                        </button>
                        <button
                            onClick={copyToClipboard}
                            className="social-share-btn copy"
                        >
                            {/* <svg className="w-5 h-5" fill="currentColor"  viewBox="0 0 20 20">
                                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                            </svg> */}
                            <span>Copy Link</span>
                        </button>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="blog-content-card">
                    <div className="prose prose-lg max-w-none">
                        <ReactMarkdown
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <CodeBlock className={className}>
                                            {String(children).replace(/\n$/, '')}
                                        </CodeBlock>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                                h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-2">{children}</h3>,
                                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">{children}</ol>,
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4 bg-blue-50 py-2">
                                        {children}
                                    </blockquote>
                                ),
                                a: ({ href, children }) => (
                                    <a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </div>
                </div>

                {/* Author Section */}
                <div className="author-card">
                    <div className="flex items-center space-x-4">
                        <div className="author-avatar-large">
                            DI
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900">{blog.author}</h3>
                            <p className="text-gray-600 mb-3">Full-stack & Mobile Developer | React & .NET Specialist</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/chaudhary-irfan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="author-social-link"
                                >
                                    <svg className="w-6 h-6" height='20px' fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/chaudhary-irfan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="author-social-link"
                                >
                                    <svg className="w-6 h-6" height='20px' fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:chaudharyirfan0420@gmail.com"
                                    className="author-social-link"
                                >
                                    <svg className="w-6 h-6" height='20px' fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/+923185248744"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="author-social-link"
                                >
                                    <svg className="w-6 h-6" height='20px' fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                    <Link
                        to="/blog"
                        className="back-to-blog-link"
                    >
                        <svg className="w-5 h-5" fill="currentColor" height='20px' viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span>Back to Blog</span>
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
