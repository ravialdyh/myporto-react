"use client";

import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  BookOpen,
  User,
  FileText,
  Moon,
  Sun,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { Meteors } from "./components/ui/meteors";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🦄" },
  { name: "Node.js", icon: "🚀" },
  { name: "Python", icon: "🐍" },
  { name: "Docker", icon: "🐳" },
];

const experiences = [
  {
    company: "TechToons Inc.",
    role: "Cartoon Developer",
    period: "Jan 2023 - Present",
    description: "Drawing smiles with code! 😄",
  },
  {
    company: "Animated Systems",
    role: "Junior Doodle Engineer",
    period: "Jun 2021 - Dec 2022",
    description: "Turned bugs into features, literally! 🐞➡️🦋",
  },
];

const data = [
  { name: "Jan", total: 186 },
  { name: "Feb", total: 305 },
  { name: "Mar", total: 237 },
  { name: "Apr", total: 73 },
  { name: "May", total: 209 },
  { name: "Jun", total: 214 },
];

const LazyChart = lazy(() => import("./components/LazyChart"));

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
        <Meteors number={30} />
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center space-x-2">
                <motion.div
                  className="text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  🎨
                </motion.div>
              </a>
              <nav className="flex items-center space-x-4">
                {["Blog", "Projects"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="flex h-9 w-full md:w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 px-0"
              >
                {darkMode ? (
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </button>
            </div>
          </div>
        </header>

        <main className="container max-w-screen-2xl mx-auto py-6 space-y-8">
          <div className="relative overflow-hidden">
            <section className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                  Hi, I'm Ravialdy!
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Welcome to my magical coding wonderland! ✨🦄
                </p>
              </motion.div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                <Mail className="mr-2 h-4 w-4" /> Say Hi!
              </button>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-lg font-semibold">
                    My Magical Toolbox 🧰✨
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The magical tools I use to create wonders
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <motion.span
                        key={tech.name}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech.icon} {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-lg font-semibold">
                    My Cartoon Career 📚🎬
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    My journey through the cartoon coding world
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="text-base font-medium">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                        <p className="text-sm mt-1">{exp.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Visitor Statistics</h3>
                <p className="text-sm text-muted-foreground">
                  January - June 2024
                </p>
              </div>
              <div className="p-6 pt-0">
                <Suspense fallback={<div>Loading chart...</div>}>
                  <LazyChart data={data} />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t">
          <div className="container max-w-screen-2xl mx-auto py-6">
            <div className="flex justify-center space-x-4">
              {[Github, Linkedin, Code, BookOpen, User, FileText].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ),
              )}
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              © 2023 Cartoony Coder. All rights reserved. 🌈
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
