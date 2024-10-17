import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import { Navigation } from '@/components/Navigation';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string; 
  codeLink?: string; 
  date: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          <Link to={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, i: number) => ( // Specify type for tech
            <Badge key={i} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            {project.demoLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.codeLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  View Code <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
          <span className="text-sm text-muted-foreground">{project.date}</span>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function ProjectsPage() {
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
        <main className="container max-w-screen-2xl mx-auto py-6 space-y-8">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center">
            My Magical Projects ✨🚀
          </h1>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Cartoon Code Editor",
    description: "A whimsical code editor that brings your code to life with animated characters and sound effects.",
    technologies: ["React", "TypeScript", "Web Audio API"],
    demoLink: "https://cartoon-code-editor.example.com",
    codeLink: "https://github.com/ravialdy/cartoon-code-editor",
    date: "August 2023"
  },
  {
    title: "Magic Spell Checker",
    description: "An enchanted spell checker that not only corrects your spelling but also adds a touch of magic to your writing.",
    technologies: ["Python", "Natural Language Processing", "Flask"],
    demoLink: "https://magic-spell-checker.example.com",
    codeLink: "https://github.com/ravialdy/magic-spell-checker",
    date: "June 2023"
  },
  {
    title: "Animated Portfolio Generator",
    description: "Create stunning, animated portfolios with just a few clicks. Bring your projects to life!",
    technologies: ["Vue.js", "GreenSock Animation Platform", "Node.js"],
    demoLink: "https://animated-portfolio.example.com",
    codeLink: "https://github.com/ravialdy/animated-portfolio-generator",
    date: "April 2023"
  }
]