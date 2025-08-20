import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion';
import { resumeData } from '../lib';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, ServerStackIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { fadeIn } from '../lib';
function Header() {
    const [isOpen, setIsOpen] = useState(false);

     const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a href="#home" onClick={handleSmoothScroll} className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          MK
        </motion.a>
        <div className="hidden md:flex space-x-6 items-center">
          <motion.a href="#home" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors" variants={fadeIn}>Home</motion.a>
          <motion.a href="#skills" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors" variants={fadeIn}>Skills</motion.a>
          <motion.a href="#experience" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors" variants={fadeIn}>Experience</motion.a>
          <motion.a href="#projects" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors" variants={fadeIn}>Projects</motion.a>
          <motion.a href="#contact" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors" variants={fadeIn}>Contact</motion.a>
          <a href={resumeData.resumeUrl} target="_blank" className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors">
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Resume</span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div className="md:hidden bg-black/90 backdrop-blur-sm"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-4 space-y-2">
            <a href="#about" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#experience" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#projects" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href={resumeData.resumeUrl} download className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors">
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Resume</span>
            </a>
            <a href="#contact" onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header