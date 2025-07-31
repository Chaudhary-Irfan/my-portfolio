---
title: "Mobile App Deployment Checklist: React Native & Expo"
description: "A comprehensive pre-launch checklist for deploying React Native and Expo apps to the App Store and Google Play Store."
author: "Chaudhary Irfan"
date: "2025-07-22"
tags: [React Native, Expo, Mobile Development, App Store, Google Play, Deployment]
---

## Table of Contents

This blog post will automatically generate a table of contents based on the headings below.

---

## 🚀 Introduction

Deploying a mobile app is the culmination of your development journey, but it's also where many teams encounter unexpected hurdles. This comprehensive checklist will help you navigate the deployment process for React Native and Expo apps, ensuring a smooth launch on both the App Store and Google Play.

---

## 📋 Pre-Deployment Checklist

Before submitting your app to the stores, ensure you've covered these essential bases:

### 1. App Functionality

| Category | Items to Check |
|----------|---------------|
| **Core Features** | ✓ All features work as expected<br>✓ Edge cases are handled<br>✓ No critical bugs remain |
| **User Flows** | ✓ Onboarding process is smooth<br>✓ Authentication works properly<br>✓ Main user journeys are tested |
| **Offline Support** | ✓ App handles network loss gracefully<br>✓ Critical features work offline<br>✓ Data syncs when connection returns |
| **Permissions** | ✓ Only necessary permissions are requested<br>✓ Permission requests are explained to users<br>✓ App works with denied permissions |

### 2. Performance Optimization

```jsx
# jsx
# copy
# edit
// Example: Optimized list rendering
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  initialNumToRender={10}
  maxToRenderPerBatch={5}
  windowSize={5}
  removeClippedSubviews={true}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>
```

### 3. App Configuration

```json
# json
# copy
# edit
// app.json for Expo
{
  "expo": {
    "name": "My App",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.yourcompany.yourappname",
      "versionCode": 1,
      "permissions": []
    }
  }
}
```

---

## 🍎 iOS App Store Preparation

### 1. Apple Developer Account Setup

- Register for an [Apple Developer Account](https://developer.apple.com/) ($99/year)
- Create an App ID in the Apple Developer Portal
- Generate and configure certificates and provisioning profiles

### 2. App Store Connect Configuration

```bash
# bash
# copy
# edit
# For Expo projects
eas build:configure

# For React Native CLI projects
cd ios && bundle exec fastlane init
```

### 3. App Store Listing Assets

| Asset | Specifications |
|-------|----------------|
| **App Icon** | 1024x1024px PNG with no alpha channel |
| **Screenshots** | 6.5" iPhone (1284x2778px)<br>5.5" iPhone (1242x2208px)<br>12.9" iPad Pro (2048x2732px) |
| **App Preview** | 15-30 second video demonstrating key features |
| **App Description** | Compelling, keyword-rich description (4000 char max) |
| **Keywords** | Relevant search terms (100 char max) |

### 4. Building for iOS

```bash
# bash
# copy
# edit
# For Expo projects
eas build -p ios --profile production

# For React Native CLI projects
cd ios && bundle exec fastlane beta
```

---

## 🤖 Google Play Store Preparation

### 1. Google Play Developer Account Setup

- Register for a [Google Play Developer Account](https://play.google.com/console/signup) ($25 one-time fee)
- Create an app in the Google Play Console
- Set up app signing with Google Play App Signing

### 2. Play Store Listing Assets

| Asset | Specifications |
|-------|----------------|
| **App Icon** | 512x512px PNG |
| **Feature Graphic** | 1024x500px JPG or PNG |
| **Screenshots** | Phone: 16:9 aspect ratio (min 320px wide)<br>Tablet: 16:9 aspect ratio (min 1080px wide) |
| **Promo Video** | YouTube URL showcasing app functionality |
| **App Description** | Compelling, keyword-rich description (4000 char max) |
| **Short Description** | Brief app summary (80 char max) |

### 3. Building for Android

```bash
# bash
# copy
# edit
# For Expo projects
eas build -p android --profile production

# For React Native CLI projects
cd android && ./gradlew bundleRelease
```

---

## 🔒 Security & Compliance

### 1. Data Privacy

- Implement secure data storage
- Use HTTPS for all network requests
- Handle sensitive information properly

```jsx
# jsx
# copy
# edit
// Example: Secure storage implementation
import * as SecureStore from 'expo-secure-store';

// Save secure data
async function saveSecureData(key, value) {
  await SecureStore.setItemAsync(key, value);
}

// Get secure data
async function getSecureData(key) {
  return await SecureStore.getItemAsync(key);
}
```

### 2. Privacy Policy

Create a comprehensive privacy policy covering:
- What data you collect
- How you use the data
- Third-party services
- User rights
- Contact information

### 3. Terms of Service

Draft terms of service that include:
- User responsibilities
- Intellectual property rights
- Limitation of liability
- Governing law

---

## 📱 Testing Before Submission

### 1. Device Testing Matrix

| Platform | Devices to Test |
|----------|----------------|
| **iOS** | Latest iPhone Pro<br>Older iPhone model<br>iPad (if supported) |
| **Android** | Flagship Samsung<br>Budget Android device<br>Tablet (if supported) |

### 2. TestFlight for iOS

```bash
# bash
# copy
# edit
# Upload build to TestFlight
eas submit -p ios
```

### 3. Internal Testing for Android

```bash
# bash
# copy
# edit
# Create an internal testing track
eas submit -p android
```

---

## 🚀 Submission Process

### 1. App Store Submission

1. Log in to App Store Connect
2. Select your app
3. Prepare for Submission
4. Submit for Review

**Review Time**: Typically 1-3 business days

### 2. Google Play Submission

1. Log in to Google Play Console
2. Select your app
3. Prepare release
4. Review and roll out

**Review Time**: Typically 1-7 days

---

## 📊 Post-Launch Monitoring

### 1. Crash Reporting

```jsx
# jsx
# copy
# edit
// Example: Sentry integration
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'YOUR_DSN_HERE',
  enableInExpoDevelopment: false,
  debug: __DEV__,
});
```

### 2. Analytics Implementation

```jsx
# jsx
# copy
# edit
// Example: Firebase Analytics
import analytics from '@react-native-firebase/analytics';

// Log a custom event
await analytics().logEvent('button_click', {
  button_id: 'login',
  screen: 'welcome'
});
```

### 3. User Feedback Collection

```jsx
# jsx
# copy
# edit
// Example: In-app feedback component
function FeedbackButton() {
  const handleFeedback = () => {
    // Open feedback form or email
    Linking.openURL('mailto:feedback@yourapp.com?subject=App Feedback');
  };
  
  return (
    <TouchableOpacity onPress={handleFeedback} style={styles.feedbackButton}>
      <Text>Send Feedback</Text>
    </TouchableOpacity>
  );
}
```

---

## 🔄 Continuous Deployment

### 1. CI/CD Pipeline Setup

```yaml
# yaml
# copy
# edit
# Example: GitHub Actions workflow for Expo
name: Expo Publish
on:
  push:
    branches:
      - main
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: 🏗 Setup repo
        uses: actions/checkout@v3

      - name: 🏗 Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: npm

      - name: 🏗 Setup Expo
        uses: expo/expo-github-action@v7
        with:
          expo-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: 📦 Install dependencies
        run: npm install

      - name: 🚀 Publish app
        run: expo publish --non-interactive
```

### 2. OTA Updates Strategy

```jsx
# jsx
# copy
# edit
// Example: Expo Updates implementation
import * as Updates from 'expo-updates';

async function checkForUpdates() {
  try {
    const update = await Updates.checkForUpdateAsync();
    
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  } catch (error) {
    console.log('Error checking for updates:', error);
  }
}
```

---

## 🏁 Conclusion

Deploying a mobile app requires careful planning and attention to detail. By following this checklist, you'll minimize the risk of rejection and ensure a smoother launch experience.

Remember that app deployment is not the end of your journey—it's the beginning of your relationship with users. Continue to gather feedback, monitor performance, and release updates to keep your app relevant and valuable.

Happy launching!

---

*Written by Chaudhary Irfan*

*Full-stack & Mobile Developer | React Native Specialist*