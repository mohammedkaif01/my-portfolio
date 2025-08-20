'use client'
import { motion, Variants } from 'framer-motion';
import { CodeBracketIcon, ServerStackIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { resumeData } from '../lib';
import React from 'react'

function Hero() {

  return (
    
     <section id="home" className="min-h-screen flex items-center justify-center text-center p-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500">
            MOHAMMED
          </h1>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-200">
            KAIF
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mt-4">{resumeData.role}</h2>
          <div className="flex justify-center items-center text-gray-400 space-x-4 mt-2">
            <span>{resumeData.contact.location}</span>
            {/* <span>•</span> */}
            {/* <span>{resumeData.contact.phone}</span> */}
          </div>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {resumeData.summary}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#projects" className="inline-block px-8 py-3 text-white font-bold rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
              View My Work
            </a>
            <a href={resumeData.resumeUrl} target="_blank" className="inline-block px-8 py-3 text-white font-bold rounded-full shadow-lg border-2 border-indigo-600 hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
              Download CV
            </a>
          </motion.div>
          <motion.div className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.765 1.75-1.765 1.75.79 1.75 1.765-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.58 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={resumeData.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.261 8.502 11.239h-6.63l-5.22-6.873-4.108 6.873H2.072l7.55-10.364L2.242 2.25h6.161L12 8.351zm-1.815 17.615l1.64-2.164-5.632-7.46-1.64 2.165 5.632 7.459z"></path>
                </g>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

 
   




