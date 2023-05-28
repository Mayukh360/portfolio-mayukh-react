import React from "react";
import { FaGithub, FaChrome, FaYoutube } from "react-icons/fa";

const Project = ({ title, image, githubLink, youtubeLink, chromeLink }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-4 hover:scale-105 transition duration-300">
      <h3 className="text-xl text-gray-100 font-bold mb-2">{title}</h3>
      <img src={image} alt={title} className="mb-4" />
      <div className="flex justify-between">
        <div className="flex">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mr-4 flex items-center"
          >
            <FaGithub className="w-5 h-5 mr-1" />
            GitHub
          </a>
          <a
            href={chromeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mr-4 flex items-center"
          >
            <FaChrome className="w-5 h-5 mr-1" />
            Chrome
          </a>
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center"
          >
            <FaYoutube className="w-5 h-5 mr-1" />
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
