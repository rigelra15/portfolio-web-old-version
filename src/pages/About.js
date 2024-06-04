import React from "react";
import './About.css';
import { FaMoon, FaSun, FaEye } from 'react-icons/fa';
import { BsEyeSlashFill } from 'react-icons/bs';
import useDarkMode from "../useDarkMode";
import Switch from 'react-switch';

const lightTheme = {
  background: '#f2f2f2',
  color: '#333',
};

const darkTheme = {
  background: '#232436',
  color: '#f2f2f2',
};

const About = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <></>
  );
}

export default About;