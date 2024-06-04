import React, { useState, useEffect } from 'react';
import './Footer.css';
import { useDarkModeContext } from "../DarkModeContext";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    const { isDarkMode } = useDarkModeContext();
    const [lastCommit, setLastCommit] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/repos/rigelra15/my-portofolio-website/commits/master')
        .then((response) => response.json())
        .then((data) => {
            const commitDate = new Date(data.commit.author.date);
            setLastCommit(`Last Updated: ${commitDate.toLocaleString()}`);
        })
        .catch((error) => {
            console.error('Error fetching last commit:', error);
        });
    }, []);

    return (
        <>
            <section className={`md:flex md:justify-between ${isDarkMode ? 'bg-[#212121]' : 'bg-white'}`}>
                <div className='footer-content md:text-left text-center'>
                    <a href="/" className={`md:text-[33px] text-[30px] ${isDarkMode ? 'text-white' : 'text-black'} font-bold`} >
                        <span className='text-sky-500'>Rigel</span> Ramadhani W.
                    </a>
                    <div className='icon pt-5'>
                    <a href="https://www.tiktok.com/@rigelra_"><FaTiktok className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300' /></a>
                    <a href="https://www.instagram.com/rigelra15/"><FaInstagram className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300' /></a>
                    <a href="mailto:rigel8911bsnss@gmail.com"><FaRegEnvelope className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300' /></a>
                    <a href="https://github.com/rigelra15"><FaGithub className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300' /></a>
                    <a href="https://www.linkedin.com/in/rigelra/"><FaLinkedin className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300' /></a>
                    <a href="https://www.behance.net/rigelramadhani/"><FaBehance className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300' /></a>
                </div>
            </div>
            <div className={`md:border-none border-dotted ${isDarkMode ? 'border-white' : 'border-black'} border-[1px] opacity-10 mt-5`}></div>
            <div className='footer-content md:pt-0 pt-5 md:text-left text-center' style={{ color: isDarkMode ? 'white' : 'black' }}>
                <li><a href="#home" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Home</a></li>
                <li><a href="#about" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>About Me</a></li>
                <li><a href="#portfolio" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Portofolio</a></li>
                <li><a href="#contact" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Contact</a></li>
                <li><a href="#blog" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Blog</a></li>
            </div>
        </section>
        <footer style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0' }} className='text-center text-[15px] py-4'>
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} mb-1`}>Copyright &copy; {new Date().getFullYear()} Rigel Ramadhani Waloni.</p>
            <span className={`text-xs ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} px-3 py-1 rounded-full`}>{lastCommit}</span>
        </footer>
    </>
  );
}
