// seo/BlogSEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const BlogSEO = () => {
    return (
        <Helmet>
            <title>Chaudhary Irfan Blog | React, Firebase, AI, Deployment</title>
            <meta name="description" content="Developer blog by Chaudhary Irfan on React, React Native, ASP.NET, Firebase, Supabase, and AI." />
            <meta name="keywords" content="React, Firebase, Supabase, React Native, AI, ChatGPT, Web Deployment" />
            <meta name="author" content="Chaudhary Irfan" />
            <meta property="og:title" content="Chaudhary Irfan Blog" />
            <meta property="og:description" content="Explore professional developer blogs on full-stack development." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://my-portfolio-chaudhary-irfans-projects.vercel.app/blog" />
        </Helmet>
    );
};

export default BlogSEO;
