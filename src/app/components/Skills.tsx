'use client'
import { motion, Variants } from 'framer-motion';
import { CodeBracketIcon, ServerStackIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { resumeData,staggerContainer,SectionHeader,fadeIn } from '../lib';
import React from 'react'


function Skills (){
  
      return(

            <section id="skills" className="py-20 p-4">
                <div className="container mx-auto">
                  <SectionHeader title="Technical Skills" icon={<CodeBracketIcon className="h-6 w-6 text-purple-400" />} />
                  <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                  >
                    {resumeData.skills.map((skill, index) => (
                      <motion.div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 transform hover:scale-105 transition-transform duration-300" variants={fadeIn}>
                        <div className="flex items-center mb-4">
                          {skill.icon}
                          <h4 className="text-xl font-semibold text-white ml-3">{skill.category}</h4>
                        </div>
                        <ul className="space-y-2">
                          {skill.items.map((item, i) => (
                            <li key={i} className="text-gray-400 flex items-center">
                              <span className="h-2 w-2 bg-cyan-400 rounded-full mr-3"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>
        )

}
  export default Skills