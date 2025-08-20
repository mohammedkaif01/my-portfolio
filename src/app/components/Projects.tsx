import React from 'react'
import { motion, Variants } from 'framer-motion';

import { resumeData, SectionHeader, staggerContainer,fadeIn } from '../lib';
function Projects() {
  return (
    
  <section id="projects" className="py-20 p-4">
    <div className="container mx-auto">
      <SectionHeader title="Featured Projects" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>} />
      <motion.div className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {resumeData.projects.map((project, index) => (
          <motion.div key={index} className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800" variants={fadeIn}>
            <div className="flex items-center space-x-4 mb-4">
              <div className={`p-3 rounded-full text-white bg-gradient-to-br ${index % 2 === 0 ? 'from-green-500 to-lime-500' : 'from-blue-500 to-indigo-500'}`}>
                {index % 2 === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                )}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">{project.name}</h4>
                <p className="text-sm text-gray-400">{project.tagline}</p>
              </div>
            </div>
            <span className="inline-block bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full mb-4">{project.category}</span>
            <p className="text-md text-gray-300 mb-6">{project.description}</p>
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white mb-2">Key Features:</h5>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-2">Technologies:</h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 font-bold rounded-full text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 to-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span>Live Demo</span>
              </a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 font-bold rounded-full text-white transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  {/* Using a generic code icon as a placeholder */}
                  <path fillRule="evenodd" d="M6.293 3.293a1 1 0 011.414 0L12 7.586l4.293-4.293a1 1 0 111.414 1.414L13.414 9l4.293 4.293a1 1 0 01-1.414 1.414L12 10.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 9 6.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Code</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

}

export default Projects