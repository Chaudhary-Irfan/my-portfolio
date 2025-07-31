---
title: "Web App Deployment Checklist: React, Vite, Firebase Hosting"
description: "Follow this step-by-step deployment checklist to get your modern React app live using Vite and Firebase Hosting or Vercel."
author: "Chaudhary Irfan"
date: "2025-07-22"
tags: [Web Dev, Deployment, Firebase, Vercel, Hosting]
---

## 🚀 Introduction

You’ve built your React app with Vite — lightning-fast and optimized for development. Now, it's time to deploy it for the world to see.

This guide walks you through a clean deployment checklist for Firebase Hosting and Vercel, covering HTTPS, custom domains, SEO, and performance tips.

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- All routes are tested and work properly
- Environment variables are correctly configured (use `.env`)
- The `404.html` page is ready for SPAs
- No console errors or warnings in production build

## 🔧 Build Your Project

Run the following command to generate the production-ready static files:

# bash
npm run build
This creates a dist/ folder (or build/) with minified, optimized files.

🌐 Firebase Hosting Setup
Install Firebase CLI

# bash
# Copy
# Edit
npm install -g firebase-tools
Login & Init Project

# bash
# Copy
# Edit
firebase login
firebase init
Configure Hosting

Select Hosting

Set dist or build as your public directory

Enable single-page app rewrite (for React routing)

Deploy to Firebase

# bash
# Copy
# Edit
firebase deploy
📝 Firebase Hosting Docs

⚡ Vercel Deployment (Alternative)
Install Vercel CLI

# bash
# Copy
# Edit
npm install -g vercel
Login & Deploy

# bash
# Copy
# Edit
vercel login
vercel
Set up project configuration

📝 Vercel Docs

🔐 Add Custom Domain + HTTPS
Firebase: firebase hosting:sites:create

Vercel: Use the dashboard to add domain (free SSL included)

Make sure DNS records are updated correctly.

📈 Monitor with Google Console
Add your site to Google Search Console

Submit your sitemap.xml and monitor indexing

📜 Bonus SEO Tips
Add a robots.txt to control crawler access

Use meaningful page titles and meta descriptions

Compress images and use lazy loading

📦 Extra Pro Tips
Use Lighthouse for performance analysis

Add .gitignore to avoid pushing sensitive build files

Automate deployment with GitHub Actions or CI tools

🧠 Final Thoughts
You didn’t just write code — you launched a product. Proper deployment ensures security, scalability, and visibility. Firebase and Vercel make it incredibly simple to deploy blazing-fast apps with custom domains and SSL by default.

Take pride in your deployment pipeline — it reflects your professionalism.

🚀 Happy deploying!
