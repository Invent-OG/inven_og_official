"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { blogData } from "@/data/blogData";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  authorImage: string;
  tags: string[];
  views: string;
  likes: string;
};

export default function HeroBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeBlog, setActiveBlog] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const blogItemsRef = useRef<HTMLDivElement[]>([]);

  const popularPosts = [
    {
      id: 1,
      title: "Getting Started with TypeScript",
      views: "25.4K",
      date: "Mar 20, 2024",
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      views: "18.7K",
      date: "Mar 18, 2024",
    },
    {
      id: 3,
      title: "Node.js Performance Tips",
      views: "16.2K",
      date: "Mar 16, 2024",
    },
    {
      id: 4,
      title: "React State Management 2024",
      views: "14.9K",
      date: "Mar 14, 2024",
    },
  ];

  const categories = [
    { name: "Web Development", count: 24 },
    { name: "JavaScript", count: 18 },
    { name: "React", count: 15 },
    { name: "CSS", count: 12 },
    { name: "Backend", count: 9 },
    { name: "AI/ML", count: 7 },
  ];

  // Simulate loading blogs
  useEffect(() => {
    const timer = setTimeout(() => {
      setBlogs(blogData);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Animate entry when blogs load
  useEffect(() => {
    if (!isLoading && blogs.length > 0) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" }
        );
        gsap.fromTo(
          mainContentRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, delay: 0.2 }
        );
        gsap.fromTo(
          sidebarRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, delay: 0.4 }
        );
      });
      return () => ctx.revert();
    }
  }, [isLoading, blogs]);

  const handleBlogClick = (index: number) => {
    if (!mainContentRef.current) return;
    gsap.to(mainContentRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        setActiveBlog(index);
        gsap.fromTo(
          mainContentRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4 }
        );
      },
    });
  };

  const addToBlogItemsRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !blogItemsRef.current.includes(el)) {
      blogItemsRef.current[index] = el;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 md:py-24 py-10 grid xl:grid-cols-4 gap-8">
        {/* LEFT: Recent Blogs */}
        <div
          ref={sidebarRef}
          className="xl:col-span-1 sticky top-10 self-start  flex flex-col"
        >
          <h2 className="text-xl font-semibold mb-5 text-gray-800 border-b pb-2 text-center">
            Recent Blogs
          </h2>
          <div className="space-y-3 overflow-y-auto max-h-[85vh] pr-2">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                ref={(el) => addToBlogItemsRef(el, index)}
                onClick={() => handleBlogClick(index)}
                className={`group flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  index === activeBlog
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 text-sm leading-snug mb-1 line-clamp-2 group-hover:text-blue-600">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER: Blog Details */}
        <div ref={mainContentRef} className="xl:col-span-2">
          {blogs[activeBlog] && (
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={blogs[activeBlog].image}
                  alt={blogs[activeBlog].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                    {blogs[activeBlog].category}
                  </span>
                </div>
              </div>

              <div className="p-8 max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={blogs[activeBlog].authorImage}
                    alt={blogs[activeBlog].author}
                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {blogs[activeBlog].author}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {blogs[activeBlog].date} · {blogs[activeBlog].readTime}
                    </p>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogs[activeBlog].title}
                </h1>

                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:font-semibold prose-p:my-4 prose-img:rounded-xl">
                  {blogs[activeBlog].content.split("\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </article>

                <div className="flex flex-wrap gap-2 mt-8">
                  {blogs[activeBlog].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Related Blogs Section */}
                <div className="mt-16 pt-10 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Related Articles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {blogs
                      .filter(
                        (blog) =>
                          blog.category === blogs[activeBlog].category &&
                          blog.id !== blogs[activeBlog].id
                      )
                      .slice(0, 2)
                      .map((relatedBlog) => (
                        <div
                          key={relatedBlog.id}
                          onClick={() => {
                            const index = blogs.findIndex(
                              (b) => b.id === relatedBlog.id
                            );
                            if (index !== -1) handleBlogClick(index);
                          }}
                          className="group cursor-pointer"
                        >
                          <div className="h-48 rounded-xl overflow-hidden mb-4">
                            <img
                              src={relatedBlog.image}
                              alt={relatedBlog.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {relatedBlog.title}
                          </h4>
                          <p className="text-gray-500 text-sm line-clamp-2">
                            {relatedBlog.excerpt}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Sidebar */}
        <div
          ref={sidebarRef}
          className="xl:col-span-1 space-y-8 md:sticky top-10 self-start"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Popular Posts
            </h3>
            {popularPosts.map((post) => (
              <div key={post.id} className="mb-4">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-xs">
                  {post.views} views · {post.date}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
            {categories.map((c, i) => (
              <div key={i} className="flex justify-between text-gray-700 mb-2">
                <span>{c.name}</span>
                <span>{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
