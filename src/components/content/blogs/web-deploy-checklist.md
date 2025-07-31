---
title: "Web App Deployment Checklist: React, Vite, Firebase Hosting"
description: "Follow this step-by-step deployment checklist to get your modern React app live using Vite and Firebase Hosting or Vercel."
author: "Chaudhary Irfan"
date: "2025-07-22"
tags: [Web Dev, Deployment, Firebase, Vercel, Hosting]
---

## Table of Contents

This blog post will automatically generate a table of contents based on the headings below.

---

## 🚀 Introduction

You've built your React app with Vite — lightning-fast and optimized for development. Now, it's time to deploy it for the world to see.

This guide walks you through a clean deployment checklist for Firebase Hosting and Vercel, covering HTTPS, custom domains, SEO, and performance tips.

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

| Category | Items to Check |
|----------|---------------|
| **Functionality** | ✓ All routes are tested and work properly<br>✓ Forms submit correctly<br>✓ API endpoints are configured for production |
| **Configuration** | ✓ Environment variables are correctly set up<br>✓ API keys are secured<br>✓ Backend URLs point to production |
| **Performance** | ✓ Images are optimized<br>✓ Bundle size is minimized<br>✓ Lazy loading is implemented for routes |
| **SEO** | ✓ Meta tags are in place<br>✓ robots.txt is configured<br>✓ sitemap.xml is generated |

### Environment Variables Setup

```bash
# bash
# copy
# edit
# .env.production
VITE_API_URL=https://api.yourproduction.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX
```

Make sure to add `.env.local` to your `.gitignore` file to prevent exposing sensitive information.

---

## 🔧 Build Configuration

### Vite Configuration

Optimize your Vite build with these settings:

```javascript
# javascript
# copy
# edit
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Your App Name',
        short_name: 'AppName',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add more manual chunks as needed
        }
      }
    }
  }
});
```

### Build Command

Run the production build:

```bash
# bash
# copy
# edit
npm run build

# Output will be in the dist/ directory
```

---

## 🔥 Deploying to Firebase Hosting

### 1. Setup Firebase

```bash
# bash
# copy
# edit
# Install Firebase CLI if you haven't already
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init
```

During initialization:
- Select "Hosting"
- Choose your Firebase project
- Set "dist" as your public directory
- Configure as a single-page app
- Set up GitHub Actions (optional)

### 2. Firebase Configuration

Create a `firebase.json` file:

```json
# json
# copy
# edit
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, s-maxage=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(css|js)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
}
```

### 3. Deploy to Firebase

```bash
# bash
# copy
# edit
# Deploy to Firebase
firebase deploy --only hosting
```

---

## ⚡ Deploying to Vercel

### 1. Setup Vercel

```bash
# bash
# copy
# edit
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login
```

### 2. Vercel Configuration

Create a `vercel.json` file:

```json
# json
# copy
# edit
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "github": {
    "silent": true
  }
}
```

### 3. Deploy to Vercel

```bash
# bash
# copy
# edit
# Deploy to Vercel
vercel --prod
```

Alternatively, connect your GitHub repository to Vercel for automatic deployments.

---

## 🔍 Post-Deployment Checks

After deploying, verify:

1. **Functionality**: Test all critical user flows
2. **Performance**: Run Lighthouse audits
3. **SEO**: Check meta tags and indexability
4. **Analytics**: Ensure tracking is working
5. **Security**: Verify HTTPS is enabled

### Lighthouse Performance Check

```bash
# bash
# copy
# edit
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://your-deployed-app.com --view
```

---

## 🌐 Custom Domain Setup

### Firebase Custom Domain

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the verification steps
4. Update DNS records at your domain registrar

### Vercel Custom Domain

1. Go to Vercel Dashboard > Project Settings
2. Click "Domains"
3. Add your domain
4. Follow the verification steps

---

## 🚀 Continuous Deployment

### GitHub Actions for Firebase

```yaml
# yaml
# copy
# edit
# .github/workflows/firebase-deploy.yml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-firebase-project-id
```

---

## 📈 Monitoring & Analytics

### Setup Google Analytics

```javascript
# javascript
# copy
# edit
// src/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_ANALYTICS_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
```

### Error Monitoring with Sentry

```javascript
# javascript
# copy
# edit
// src/sentry.js
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 0.5,
  environment: import.meta.env.MODE
});
```

---

## 🏁 Conclusion

Deploying a React app built with Vite to Firebase or Vercel is straightforward when you follow this checklist. Remember that deployment is not the end but the beginning of your app's journey. Monitor performance, gather user feedback, and continuously improve.

Happy deploying!

---

*Written by Chaudhary Irfan*

*Full-stack & Mobile Developer | React & .NET Specialist*