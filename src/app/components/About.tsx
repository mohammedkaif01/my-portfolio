'use client';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, ServerStackIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { resumeData,staggerContainer,fadeIn,SectionHeader} from '../lib';
import React from 'react'



function About() {
  
return (
      <section id="about" className="py-20 p-4">
        <div className="container mx-auto">
          <SectionHeader title="About Me" icon={<AcademicCapIcon className="h-6 w-6 text-pink-400" />} />
          <motion.div className="flex flex-col lg:flex-row items-start gap-8 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="lg:w-2/3 text-gray-300" variants={fadeIn}>
              <p className="text-lg mb-4">I am a passionate and detail-oriented professional with a recently completed Bachelor of Computer Applications from Osmania University, Hyderabad. I have cultivated a strong foundation in core computer science principles through coursework in Data Structures, Algorithms, and Software Engineering. My hands-on experience in building responsive, full-stack web applications has equipped me with a robust skill set in modern technologies like React.js, Node.js, and Tailwind CSS. I am proficient in developing RESTful APIs, utilizing version control with Git, and working within Agile methodologies. I am eager to apply my skills and problem-solving abilities to contribute to impactful web solutions as I seek a professional role in the industry.</p>
            </motion.div>
            <motion.div className="lg:w-1/3 w-full" variants={fadeIn}>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
                <div className="text-gray-400">
                  <p className="font-bold text-white text-lg">{resumeData.education.degree}</p>
                  <p className="text-md">{resumeData.education.university}</p>
                  <p className="text-sm">{resumeData.education.dates}</p>
                </div>
                <h5 className="text-white font-semibold mt-4 mb-2">Relevant Coursework:</h5>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                    {resumeData.education.relevantCoursework.map((course, index) => (
                        <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-center">{course}</span>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default About