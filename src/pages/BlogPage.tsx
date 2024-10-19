import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
export const blogPosts = [
  {
    title: "Random Variables? + Many Interactive Visualizations",
    slug: "random-variables",
    date: "October 19, 2024",
    excerpt:
      "Discover how fun it is to learn random variables with interactive visualizations! ✨🪄",
    component: lazy(() => import("../blogposts/blogpost1")),
  },
  {
    title: "Animating with CSS: A Cartoon Guide",
    slug: "animating-with-css",
    date: "July 2, 2023",
    excerpt:
      "Learn how to bring your web pages to life with CSS animations, cartoon-style! 🎭🖌️",
  },
  {
    title: "TypeScript: Strongly Typed Magic",
    slug: "typescript-strongly-typed-magic",
    date: "July 20, 2023",
    excerpt:
      "Explore the enchanted world of TypeScript and how it can make your JavaScript more powerful. 🧙‍♂️📜",
  },
];

export default function BlogPage() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      <Meteors number={30} />
      <main className="container max-w-screen-2xl mx-auto py-6 space-y-8">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center">
          Blog 🧙‍♂️📜
        </h1>
        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  <Link to={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
              <div className="p-6 pt-0">
                <p>{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
