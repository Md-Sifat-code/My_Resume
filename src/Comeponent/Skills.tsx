import React from 'react';
import { GiEnergyArrow } from "react-icons/gi";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiJavascript, SiTypescript,  SiRedux, SiFirebase, SiPython, SiTailwindcss, SiPostman, SiFigma } from "react-icons/si";

const Skills: React.FC = () => {
  const skills = [
    { name: 'React JS', icon: <FaReact size={40} /> },
    { name: 'Node JS', icon: <FaNodeJs size={40} /> },
    { name: 'Express', icon: <SiExpress size={40} /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} /> },
    
    { name: 'Redux', icon: <SiRedux size={40} /> },
    { name: 'Firebase', icon: <SiFirebase size={40} /> },
    { name: 'Python', icon: <SiPython size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
    { name: 'Postman', icon: <SiPostman size={40} /> },
    { name: 'GitHub', icon: <FaGithub size={40} /> },
    { name: 'Figma', icon: <SiFigma size={40} /> }
  ];

  return (
    <section className='py-12 bg-black'>
      <div className='container mx-auto'>
        <div>
          <h1 className='font-bold text-3xl text-amber-600 uppercase flex flex-row gap-2 items-center'>
            Skill Stack<GiEnergyArrow />
          </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center p-4 bg-transparent text-white rounded-lg'>
              <div className="mb-4 text-amber-600">
                {skill.icon}
              </div>
              <h3 className="text-center text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
