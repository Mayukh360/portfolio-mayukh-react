import React from "react";
import Project from "./Project";
import Project1 from "../assets/project-1.jpeg";
import Project2 from "../assets/project-2.jpeg";
// Import other project images

const Projects = () => {
  // Array of project data
  const projects = [
    {
      title: "Project 1",
      image: Project1,
      githubLink: "https://github.com/your-github-link",
      youtubeLink: "https://www.youtube.com/watch?v=your-youtube-link",
      chromeLink: "https://your-chrome-link",
    },
    {
      title: "Project 2",
      image: Project2,
      githubLink: "https://github.com/your-github-link",
      youtubeLink: "https://www.youtube.com/watch?v=your-youtube-link",
      chromeLink: "https://your-chrome-link",
    },
    // Add more project data objects
  ];

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      {/* ... */}
      
      {/* PROJECTS */}
      <div className="flex justify-center">
        <div className="sm:grid sm:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              youtubeLink={project.youtubeLink}
              chromeLink={project.chromeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
