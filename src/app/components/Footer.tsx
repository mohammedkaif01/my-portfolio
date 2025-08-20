'use client';
import { useState, useEffect } from 'react';
// import { motion, Variants } from 'framer-motion';
import { CodeBracketIcon, ServerStackIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';

import React from 'react'

function Footer() {
const resumeData = {
  name: 'Mohammed Kaif',
  role: 'Full-Stack Developer & Problem Solver',
  summary: 'Motivated Computer Applications student with hands-on experience in responsive, full-stack web applications. Skilled in modern technologies and passionate about creating scalable, impactful web solutions.',
  contact: {
    email: 'kaifofficial67@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohammedkaif67',
    github: 'https://github.com/mohammedkaif01',
    twitter: 'https://x.com/your_username_here',
    location: 'Hyderabad, Telangana',
    phone: '+91 9676136481',
  },

  resumeUrl: 'https://drive.google.com/file/d/1zqu5xwFU4EPC70p4A3D3NTH21eHqE0XS/view?usp=sharing', // Placeholder for your resume file

  skills: [
    { category: 'Programming Languages', items: ['C++', 'JavaScript', 'PHP'], icon: <CodeBracketIcon className="h-6 w-6 text-purple-400" /> },
    { category: 'Frontend Technologies', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'], icon: <GlobeAltIcon className="h-6 w-6 text-blue-400" /> },
    { category: 'Backend Technologies', items: ['Node.js', 'PHP', 'SQL', 'MongoDB'], icon: <ServerStackIcon className="h-6 w-6 text-green-400" /> },
    { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman'], icon: <AdjustmentsHorizontalIcon className="h-6 w-6 text-red-400" /> },
    { category: 'Development Concepts', items: ['REST APIs', 'CRUD', 'MVC', 'Agile', 'Responsive Design'], icon: <LightBulbIcon className="h-6 w-6 text-yellow-400" /> },
    { category: 'Mobile & Responsive Design', items: ['Mobile-First', 'Flexbox', 'Tailwind CSS'], icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
  ],
  experience: [
    {
      title: 'Software Development Intern',
      company: 'Deloitte Virtual Simulation (Forage)',
      dates: 'Jun 2025',
      location: 'Virtual',
      description: [
        'Completed certified job simulation in full-stack dev, testing, Agile, and debugging.',
        'Conducted mock code reviews, identified issues in simulated production code.',
        'Built scalable, modular solutions based on simulated stakeholder requirements.',
        'Strengthened analytical thinking by translating specs into functional modules.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Frost Hackathon by MLH',
      dates: 'Jan 2024',
      location: 'Online',
      description: [
        'Developed a civic reporting web app with image upload and geolocation features.',
        'Integrated RESTful APIs to auto-forward reports to municipal systems.',
        'Built responsive UI using HTML5, CSS3, JavaScript; ensured mobile/desktop compatibility.',
        'Used SQL for structured data handling and secure storage.',
        'Applied Agile workflow, collaborated via Git version control.',
      ],
    },
  ],
  projects: [
    {
      name: 'Eco-Alert',
      tagline: 'Civic Issue Reporting Platform',
      category: 'Hackathon Project',
      description: 'A comprehensive real-time civic issue reporting web application that enables citizens to report environmental issues, pollution, disasters, and hazard alerts with geolocation integration.',
      features: [
        'Real-time civic issue reporting with image upload functionality',
        'Geolocation API integration for precise location tagging',
        'Mobile-first responsive UI built with Flexbox and Tailwind CSS',
        'Secure input validation and data handling',
        'RESTful API integration with PHP MySQL backend',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Geolocation API', 'Tailwind CSS'],
      liveDemoUrl: '#',
      codeUrl: '#',
    },
    {
      name: 'Tic Tac Toe Game',
      tagline: 'Interactive Web Game',
      category: 'Web Application',
      description: 'A modern, responsive 2-player Tic Tac Toe game featuring real-time updates, win/draw detection, and smooth animations with mobile-optimized design.',
      features: [
        'Interactive 2-player game with turn-based logic',
        'Real-time win/draw detection algorithms',
        'Dynamic DOM manipulation for game state updates',
        'Mobile-first responsive design with CSS Grid',
        'Smooth animations and visual feedback',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'DOM Manipulation', 'Event Listeners'],
      liveDemoUrl: '#',
      codeUrl: '#',
    },
  ],
  education: {
    degree: 'Bachelor of Computer Applications',
    university: 'Osmania University, Hyderabad',
    dates: 'Jul 2025',
    relevantCoursework: [
        'Data Structures and Algorithms', 'DBMS', 'Software Engineering',
        'OS', 'Web Development', 'OOP', 'Computer Networks', 'System Analysis'
    ]
  }
};
const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

return (
 <footer className="bg-gray-900 text-gray-500 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} {resumeData.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
);

}
export default Footer