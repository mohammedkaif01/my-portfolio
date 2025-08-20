'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, ServerStackIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { resumeData,fadeIn,SectionHeader,slideInRight,slideInLeft } from '../lib';


function Experience() {

return(
    <section id="experience" className="py-20 p-4">
        <div className="container mx-auto">
          <SectionHeader title="Professional Experience" icon={<BriefcaseIcon className="h-6 w-6 text-teal-400" />} />
          <div className="space-y-8">
            {resumeData.experience.map((job, index) => (
              <motion.div key={index} className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold text-white">{job.title}</h4>
                  <span className="text-gray-500 text-sm">{job.dates}</span>
                </div>
                <p className="text-md font-semibold text-gray-300">{job.company} - {job.location}</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )
};
export default Experience