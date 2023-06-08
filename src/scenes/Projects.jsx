import React from "react";
import LineGradient from "../components/LineGradient";
import Project from "./Project";
import Project1 from "../assets/Resturant.png";
import Project2 from "../assets/Ecom.png";
import Expense from "../assets/expense.png";
import mailbox from "../assets/mailbox.png";
import dashboard from "../assets/admin.png";
import groupchat from "../assets/Group-Chat.png";

// Import other project images

const Projects = () => {
  // Array of project data
  const projects = [
    {
      title: "Ecommerce Website",
      image: Project2,
      githubLink: "https://github.com/Mayukh360/Ecommerce-Website-using-React",
      youtubeLink: "https://www.youtube.com/watch?v=dIlMJccFr-E",
      chromeLink: "https://mayukh360.github.io/Ecommerce-Website-using-React/",
    },
    {
      title: "Expense Tracker",
      image: Expense,
      githubLink: "https://github.com/Mayukh360/Expensetracker-using-React",
      youtubeLink: "https://www.youtube.com/watch?v=YhTgGHmcEF4",
      chromeLink: "https://mayukh360.github.io/Expensetracker-using-React/",
    },
    {
      title: "MailBox",
      image: mailbox,
      githubLink: "https://github.com/Mayukh360/mailbox",
      youtubeLink: "https://www.youtube.com/watch?v=fcy_WC36B8I",
      chromeLink: "https://mayukh360.github.io/mailbox/",
    },
    {
      title: "Resturant App",
      image: Project1,
      githubLink: "https://github.com/Mayukh360/Restaurant-App-Using-React",
      // youtubeLink: "https://www.youtube.com/watch?v=fcy_WC36B8I",
      chromeLink: "https://mayukh360.github.io/Restaurant-App-Using-React/",
    },
    {
      title: "Group Chat App",
      image: groupchat,
      githubLink: "https://github.com/Mayukh360/Group-Chat-App",
      // youtubeLink: "https://www.youtube.com/watch?v=your-youtube-link",
      chromeLink: "https://group-chat-app-by-mayukh.netlify.app",
    },

    {
      title: "Admin Dashboard",
      image: dashboard,
      githubLink: "https://github.com/Mayukh360/mailbox",
      // youtubeLink: "https://www.youtube.com/watch?v=your-youtube-link",
      // chromeLink: "https://mayukh360.github.io/mailbox/",
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
