import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { GiEnergyArrow } from "react-icons/gi";
interface Project {
  title: string
  description: string
  githubLink: string
  liveLink: string
  image: string // Optional: add an image for the project card
}

const projects: Project[] = [
  {
    title: 'Agiles',
    description: 'An Software Solution Company Website. Who work with Passion and ensure quality software for their users.',
    githubLink: 'https://github.com/Md-Sifat-code',
    liveLink: 'https://agiles.site/',
    image: '/p-1.png',
  },
  {
    title: 'বাড়ির বাজার',
    description: 'This is a House rent and selling website where user can rent a house and can sell their house also',
    githubLink: 'https://github.com/Md-Sifat-code',
    liveLink: 'https://yourwebsite.com/project-two',
    image: '/p-2.png',
  },
  {
    title: 'Quiz-Dao',
    description: 'This is a web application where Students can attend Quiz and can see their resulkts as well as leaderboards',
    githubLink: 'https://github.com/Md-Sifat-code',
    liveLink: 'https://quizdaoo.web.app/',
    image: '/p-3.png',
  },
  {
    title: 'Daily-Tech',
    description: 'This is a web application where user can post can check user profile same as X',
    githubLink: 'https://github.com/Md-Sifat-code',
    liveLink: 'https://daily-tech-2d3b5.web.app/',
    image: '/p-4.png',
  },
  {
    title: 'Fund Rise',
    description: 'This is a web application where people can ask for fund rising. People can donate for the problems',
    githubLink: 'https://github.com/Md-Sifat-code',
    liveLink: 'https://assignment-9-7b073.web.app/',
    image: '/p-5.png',
  },
  {
    title: 'Artifact Atlas',
    description: 'This is a web application in where people can see artifacts, locate them, know their history',
    githubLink: 'https://github.com/Md-Sifat-code',
    liveLink: 'https://artifact-atlas-ba495.web.app/',
    image: '/p-6.png',
  },
  // Add more projects as needed
]

const Projects: React.FC = () => {
  return (
    <section className=' py-8 bg-black'>
        <div className="container  mx-auto ">
      <h1 className='uppercase text-amber-600 mb-12  font-bold text-3xl flex flex-row gap-2 items-center'>
                  Projects<GiEnergyArrow />
                </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black border border-amber-600 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-white text-sm mt-2 ">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-amber-700"
                >
                  <FaGithub className="text-2xl text-amber-600" />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-amber-700"
                >
                  <FaExternalLinkAlt className="text-2xl text-amber-600" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Projects
