import React from 'react';
import './AboutMe.css';
import { useDarkModeContext } from "../DarkModeContext";
import { IoPersonSharp } from "react-icons/io5";

const AboutMeDetail = () => {
    const { isDarkMode } = useDarkModeContext();
  return (
    <section id='about-me' className='pt-0' style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0', color: isDarkMode ? 'white' : 'black' }}>
        <div className={`py-4 ${isDarkMode ? 'bg-[#3d3d3d] text-white' : 'bg-white text-black'} border-2 ${isDarkMode ? 'border-zinc-600' : 'border-zinc-300'} rounded-xl hover:translate-y-1 transition-all duration-300`} style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
            <div className='px-8 py-2'>
                <h2 className={`text-xl md:text-2xl mb-2 font-bold flex items-center gap-2 py-2 px-4 rounded-xl ${isDarkMode ? 'bg-zinc-600' : 'bg-[#f0f0f0]'}`}>
                    <IoPersonSharp className='inline-block text-xl mr-2' />
                    <span>About Me</span>
                </h2>
                <p className="leading-relaxed text-justify flex-wrap" style={{ lineHeight: 2 }}>
                    I'm a <span className='text-sky-500 font-bold'>Amateur Frontend Developer</span> and  <span className='text-sky-500 font-bold'>UI/UX Designer</span>  in creating user-friendly and visually appealing websites and web applications. My passion for design and development drives me to continuously learn and improve my skills.
                    I specialize in front-end technologies such as HTML, CSS, JavaScript, and popular libraries and frameworks like ReactJS. I am also familiar with UI/UX design principles, which allows me to create intuitive and user-centered interfaces.
                    When I'm not coding, you can find me exploring new technologies, sketching interface designs, or enjoying a good cup of coffee while reading about the latest trends in web development.
                </p>
            </div>
        </div>
    </section>
  );
};

export default AboutMeDetail;
