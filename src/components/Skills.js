import React from 'react';
import './AboutMe.css';
import { useDarkModeContext } from "../DarkModeContext";
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { BsPersonFillGear } from 'react-icons/bs';

const Skills = () => {
    const { isDarkMode } = useDarkModeContext();
  return (
    <section id='about-me' className='pt-8' style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0', color: isDarkMode ? 'white' : 'black' }}>
        <div className={`py-4 ${isDarkMode ? 'bg-[#3d3d3d] text-white' : 'bg-white text-black'} rounded-xl`} style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
            <div className='px-8 py-2'>
                <h2 className="text-xl md:text-2xl mb-2 font-bold flex items-center gap-2">
                    <BsPersonFillGear className='inline-block text-xl mr-2' />
                    <span>Skills</span>
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>HTML</span>
                            <FaHtml5 className='text-[#f33f00] text-2xl'/>
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>CSS</span>
                            <FaCss3 className='text-[#0098d9] text-2xl'/>
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>JavaScript</span>
                            <IoLogoJavascript className='text-[#f0db4f] text-2xl'/>
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>TailwindCSS</span>
                            <img src="icon/tailwindcss.svg" alt="tailwindcss_icon" width={18} />
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>ReactJS</span>
                            <FaReact className='text-[#61dafb] text-2xl' />
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span className='bg-sky-500 animate-pulse px-3 text-white font-semibold rounded-full'>New</span>
                            <span>Flutter</span>
                            <img src="icon/logos_flutter.svg" alt="flutter_icon" width={18} />
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span className='bg-sky-500 animate-pulse px-3 text-white font-semibold rounded-full'>New</span>
                            <span>Kotlin</span>
                            <img src="icon/kotlin.png" alt="kotlin_icon" width={18} />
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>Figma</span>
                            <img src="icon/figma.png" alt="figma_icon" width={13} />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
