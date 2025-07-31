---
title: "Enhanced Blog Features: Professional Code Blocks & More"
description: "Discover the new professional features in our blog including enhanced code blocks with copy/edit functionality, table of contents, search, and improved Markdown rendering."
author: "Chaudhary Irfan"
date: "2025-01-20"
tags: [Blog, Features, Code Blocks, Markdown, UI/UX, Web Development]
---

## Table of Contents

This blog post will automatically generate a table of contents based on the headings below.

---

## 🚀 Introduction

Welcome to our enhanced blog experience! We've completely redesigned the blog system to provide a more professional and interactive reading experience. This post showcases all the new features including enhanced code blocks, search functionality, and improved Markdown rendering.

---

## 💻 Enhanced Code Blocks

### JavaScript Example with Copy & Edit

Here's a React component example that demonstrates our enhanced code block features:

```javascript
# javascript
# copy
# edit
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default UserProfile;
```

### Python Example with Copy Only

Here's a Python script that only has copy functionality enabled:

```python
# python
# copy
import requests
import json
from datetime import datetime

class APIClient:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.api_key = api_key
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        })
    
    def get_user(self, user_id):
        """Fetch user data by ID"""
        try:
            response = self.session.get(f'{self.base_url}/users/{user_id}')
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching user {user_id}: {e}")
            return None
    
    def create_user(self, user_data):
        """Create a new user"""
        try:
            response = self.session.post(
                f'{self.base_url}/users',
                data=json.dumps(user_data)
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error creating user: {e}")
            return None

# Usage example
if __name__ == "__main__":
    client = APIClient("https://api.example.com", "your-api-key")
    
    # Fetch user
    user = client.get_user(123)
    if user:
        print(f"User: {user['name']} ({user['email']})")
    
    # Create new user
    new_user = {
        "name": "John Doe",
        "email": "john@example.com",
        "created_at": datetime.now().isoformat()
    }
    
    result = client.create_user(new_user)
    if result:
        print(f"Created user with ID: {result['id']}")
```

### CSS Example with Edit Only

This CSS example only has edit functionality:

```css
# css
# edit
/* Modern CSS Grid Layout */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas: 
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
  gap: 1rem;
}

.header {
  grid-area: header;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sidebar {
  grid-area: sidebar;
  background: #2c3e50;
  color: white;
  padding: 1rem;
  overflow-y: auto;
}

.main-content {
  grid-area: main;
  padding: 2rem;
  background: #f8f9fa;
  overflow-y: auto;
}

.footer {
  grid-area: footer;
  background: #34495e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 1fr 40px;
    grid-template-areas: 
      "header"
      "sidebar"
      "main"
      "footer";
  }
  
  .sidebar {
    max-height: 200px;
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .main-content {
    background: #1a1a1a;
    color: #e0e0e0;
  }
  
  .header {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  }
}
```

### SQL Example with No Special Actions

This SQL example has no special copy/edit buttons (default behavior):

```sql
-- Complex SQL Query Example
WITH user_stats AS (
  SELECT 
    u.id,
    u.name,
    u.email,
    COUNT(DISTINCT o.id) as total_orders,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.created_at) as last_order_date
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.created_at >= '2024-01-01'
    AND u.status = 'active'
  GROUP BY u.id, u.name, u.email
),
user_categories AS (
  SELECT 
    id,
    name,
    email,
    total_orders,
    total_spent,
    avg_order_value,
    last_order_date,
    CASE 
      WHEN total_spent > 1000 THEN 'Premium'
      WHEN total_spent > 500 THEN 'Gold'
      WHEN total_spent > 100 THEN 'Silver'
      ELSE 'Bronze'
    END as customer_tier,
    CASE 
      WHEN last_order_date > CURRENT_DATE - INTERVAL '30 days' THEN 'Active'
      WHEN last_order_date > CURRENT_DATE - INTERVAL '90 days' THEN 'Recent'
      ELSE 'Inactive'
    END as activity_status
  FROM user_stats
)
SELECT 
  customer_tier,
  activity_status,
  COUNT(*) as user_count,
  AVG(total_spent) as avg_spent_per_tier,
  SUM(total_spent) as total_revenue_per_tier
FROM user_categories
GROUP BY customer_tier, activity_status
ORDER BY 
  CASE customer_tier 
    WHEN 'Premium' THEN 1
    WHEN 'Gold' THEN 2
    WHEN 'Silver' THEN 3
    WHEN 'Bronze' THEN 4
  END,
  activity_status DESC;
```

---

## 🔍 Search Functionality

Our blog now includes a powerful search feature that allows you to:

- **Search by title**: Find blogs by their titles
- **Search by content**: Search within blog excerpts and content
- **Search by tags**: Find blogs with specific tags
- **Search by author**: Filter by author name

The search is **real-time** and works seamlessly with category filters.

---

## 📋 Table of Contents

Every blog post automatically generates a **table of contents** based on the headings in the content. The TOC includes:

- **Clickable navigation**: Jump to any section instantly
- **Hierarchical structure**: Shows heading levels (H1-H6)
- **Smooth scrolling**: Animated scroll to sections
- **Responsive design**: Works on all devices

---

## 🎨 Enhanced Markdown Support

Our blog now supports advanced Markdown features:

### Tables

| Feature | Status | Description |
|---------|--------|-------------|
| Code Blocks | ✅ Enhanced | Copy, edit, download functionality |
| Tables | ✅ New | Responsive tables with styling |
| Search | ✅ New | Real-time search across content |
| TOC | ✅ New | Auto-generated table of contents |
| Dark Mode | ✅ Enhanced | Improved dark mode support |

### Blockquotes

> "The best way to predict the future is to create it." - Peter Drucker

This enhanced blockquote styling includes better visual hierarchy and dark mode support.

### Lists and Typography

**Unordered Lists:**
- Enhanced code blocks with syntax highlighting
- Copy and edit functionality for code
- Download code as files
- Real-time search across all blog content
- Automatic table of contents generation

**Ordered Lists:**
1. **Search**: Use the search bar to find specific content
2. **Filter**: Select categories to narrow down results
3. **Navigate**: Use the table of contents for quick navigation
4. **Interact**: Copy, edit, or download code examples
5. **Share**: Use social sharing buttons

---

## 🚀 Performance Optimizations

### Code Splitting
We've implemented lazy loading for better performance:

```javascript
# javascript
# copy
# edit
import React, { lazy, Suspense } from 'react';

// Lazy load blog components
const BlogPost = lazy(() => import('./BlogPost'));
const BlogList = lazy(() => import('./BlogList'));

const BlogRouter = () => {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Suspense>
  );
};
```

### Optimized Rendering
- **Intersection Observer**: For fade-in animations
- **Memoization**: Prevents unnecessary re-renders
- **Virtual Scrolling**: For large blog lists (coming soon)

---

## 🎯 Future Enhancements

We're continuously improving the blog experience. Upcoming features include:

- **Comments System**: Interactive discussions
- **Reading Progress**: Visual progress indicator
- **Related Posts**: AI-powered recommendations
- **Bookmarks**: Save posts for later reading
- **Print Optimization**: Better print layouts
- **Offline Reading**: PWA capabilities

---

## 📱 Mobile Experience

The blog is fully responsive and optimized for mobile devices:

- **Touch-friendly**: Large tap targets for mobile
- **Swipe Navigation**: Swipe between blog posts
- **Optimized Typography**: Perfect reading experience on small screens
- **Fast Loading**: Optimized images and lazy loading

---

## 🔧 Technical Implementation

### Architecture Overview

```typescript
# typescript
# copy
# edit
interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
  coverImage: string;
  excerpt: string;
  readTime: string;
  category: string;
  filePath: string;
}

interface CodeBlockProps {
  className?: string;
  children: React.ReactNode;
  showCopy?: boolean;
  showEdit?: boolean;
}

interface SearchFilters {
  searchTerm: string;
  selectedCategory: string;
  sortBy: 'date' | 'title' | 'readTime';
  sortOrder: 'asc' | 'desc';
}

class BlogService {
  static async searchBlogs(filters: SearchFilters): Promise<BlogPost[]> {
    // Implementation for searching and filtering blogs
    return [];
  }
  
  static async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    // Implementation for fetching individual blog posts
    return null;
  }
  
  static generateTableOfContents(content: string): TOCItem[] {
    // Implementation for generating table of contents
    return [];
  }
}
```

---

## 🎉 Conclusion

These enhancements make our blog a more professional and user-friendly platform for sharing technical content. The combination of enhanced code blocks, search functionality, table of contents, and improved Markdown rendering creates an exceptional reading experience.

**Key Benefits:**
- ✅ **Professional Code Display**: Syntax highlighting with copy/edit features
- ✅ **Better Navigation**: Search and table of contents
- ✅ **Enhanced Readability**: Improved typography and spacing
- ✅ **Mobile Optimized**: Perfect experience on all devices
- ✅ **Developer Friendly**: Easy to write and maintain content

Try out all these features as you explore our blog content!

---

*Happy reading and coding! 🚀*