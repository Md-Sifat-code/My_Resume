import React from 'react';
import logo from "/rt.png"; // Your logo image
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Hero: React.FC = () => {
  return (
    <section className=" bg-black">
        <div className='min-h-[50vh] '>
            <div className='flex flex-col justify-center items-center'>
            <div className='mt-12'>
                <img src={logo} className='w-[250px] h-[250px] rounded-full ' alt="" />
            </div>
            <div className='mt-6'>
                <h1 className='text-white text-center'>Md Sifat Bin Jibon</h1>
                <h1 className='text-white '>Frontend Developer || <span className='text-amber-600 font-bold'>React Js</span></h1>
                <div className='flex flex-row justify-center items-center gap-6 text-amber-600 mt-4 font-bold text-xl'>
                    {/* find me */}
                    <Link to={"https://github.com/Md-Sifat-code"}><FaGithubAlt /></Link>
                    <Link to={"https://www.linkedin.com/in/md-sifat-follow/"}><FaLinkedin /></Link>
                    <Link to={"https://www.kaggle.com/codewithsifat"}><FaKaggle /></Link>
                    <Link to={"https://agiles.site/"}><FaCode /></Link>
                    <Link to={"https://leetcode.com/u/HEX_Sifat/"}><SiLeetcode /></Link>
                </div>
            </div>
            </div>

        </div>
      
        
        
    </section>
  );
};

export default Hero;
