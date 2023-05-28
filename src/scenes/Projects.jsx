import React from "react";
import LineGradient from "../components/LineGradient";
import Project from "./Project";
import Project1 from "../assets/Resturant.png";
import Project2 from "../assets/Ecom.png";
import Expense from '../assets/expense.png';

// Import other project images

const Projects = () => {
  // Array of project data
  const projects = [
    {
      title: "Ecommerce Website",
      image: Project2,
      githubLink: "https://github.com/your-github-link",
      youtubeLink: "https://www.youtube.com/watch?v=your-youtube-link",
      chromeLink: "https://your-chrome-link",
    },
    {
      title: "Expense Tracker",
      image: Expense,
      githubLink: "https://github.com/your-github-link",
      youtubeLink: "https://www.youtube.com/watch?v=your-youtube-link",
      chromeLink: "https://your-chrome-link",
    },
    {
      title: "Resturant App",
      image: Project1,
      githubLink: "https://github.com/your-github-link",
      youtubeLink: "https://www.youtube.com/watch?v=your-youtube-link",
      chromeLink: "https://your-chrome-link",
    },
    // Add more project data objects
  ];

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <p className="font-playfair font-semibold text-4xl">
        <span className="text-red">PRO</span>JECTS
      </p>
      <div className="flex mt-5 mb-5">
        <LineGradient width="w-2/3" />
      </div>

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
