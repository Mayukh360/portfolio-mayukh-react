import React from "react";

import { FaGithub, FaYoutube, FaChrome } from 'react-icons/fa';

const Project = ({ title, image, githubLink, youtubeLink, chromeLink }) => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <img src={image} alt={title} className="rounded-lg shadow-lg" />
      <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-4">
        <h3 className="text-xl text-gray-800 font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
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
    </div>
  );
};

export default Project;
