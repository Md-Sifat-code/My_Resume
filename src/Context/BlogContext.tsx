import React, { createContext, useContext, useState, useEffect } from 'react';

interface Blog {
  id: number;
  title: string;
  picture: string;
  description: string;
  publishedDate: string;
  image_1?: string;  // Optional additional image 1
  image_2?: string;  // Optional additional image 2
  readmore?: string; // URL to the full blog post
}

interface BlogContextType {
  blogs: Blog[];
}

const BlogContext = createContext<BlogContextType>({ blogs: [] });

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state
  const [error, setError] = useState<string | null>(null); // Added error state

  useEffect(() => {
    // Fetch blog data from the public folder
    fetch('/blogs.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Validate data to ensure it's an array of blogs
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          throw new Error('Invalid data format');
        }
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setError('Failed to load blog data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>
      {loading ? (
        <div className="loading">Loading blogs...</div> // Loading state UI
      ) : error ? (
        <div className="error">{error}</div> // Error state UI
      ) : (
        children
      )}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);
