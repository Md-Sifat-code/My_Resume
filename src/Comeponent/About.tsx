import React from 'react';
import { GiEnergyArrow } from "react-icons/gi";
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className='bg-black py-12 px-4 md:px-0'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Left Side - Title and Icon */}
        <div className='flex col-span-3 flex-col items-start'>
          <h1 className='uppercase text-amber-600 font-bold text-3xl flex flex-row gap-2 items-center'>
            About Me <GiEnergyArrow />
          </h1>
        </div>

        {/* Right Side - About Content */}
        <div className='col-span-3 md:col-span-2 flex flex-col text-white md:border-r-2 md:border-amber-600'>
          <h2 className='text-3xl font-semibold uppercase '>Md Sifat</h2>
          <p className='text-lg  font-medium'>BS in Computer Science</p>
          <p className='text-lg text-start mb-8 font-medium'>United International University</p>

          <p className='text-lg robo md:w-[70%]'>
            🚀 Passionate React.js Frontend Developer | 🎨 Skilled UI/UX Designer
          </p>
          
          <p className=' text-white text-start robo md:w-[70%] text-lg'>
            Hi there! 👋 I specialize in creating visually appealing and highly functional web applications. 
            With a strong command of React.js, TypeScript, and Tailwind CSS, I bring designs to life while ensuring seamless user experiences.
          </p>
        </div>
        <div className='col-span-3 md:col-span-1 mt-6 md:mt-0'>
            {/* exprience */}
            <h1 className=' uppercase text-amber-600 font-bold'> Experience</h1>
            <div className='flex flex-col items-start justify-start mt-4 text-start text-white'>
                <h1 className='text-white font-bold'>Senior Developer</h1>
                <p>2024 To current</p>
                <Link to={"https://www.facebook.com/uiudevelopershub"} className='text-amber-600 font-bold underline'>UIU Developers HUB</Link>
                <p className='text-gray-500'>Working as a Frontend developer in Many exciting projects. Guding People for Frontend development, 2 Projects Running Currently </p>
            </div>
            <hr className=' border-2 border-amber-600 mt-4' />
            <div className='flex flex-col items-start justify-start mt-4 text-start text-white'>
                <h1 className='text-white font-bold'>Frontend Developer || Co-Founder</h1>
                <p>2024 To current</p>
                <Link to={"https://agiles.site/"} className='text-amber-600 font-bold underline'>Agiles</Link>
                <p className='text-gray-500'>Working as a Frontend developer in Many exciting projects. As well as working on a Web 3js Project based on Blockchain Guding People for Frontend development, 7 Projects Running Currently </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
