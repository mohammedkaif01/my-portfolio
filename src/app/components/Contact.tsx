"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion';
import { resumeData,fadeIn } from '../lib';

function Contact() {

  return (
      <section id="contact" className="py-20 p-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-2">Get In Touch</h3>
        <p className="text-gray-400">Ready to collaborate on your next project or discuss opportunities? I&apos;d love to hear from you!</p>
      </div>

      <motion.div className="flex flex-col lg:flex-row gap-8 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="lg:w-1/2 space-y-6">
          <h4 className="text-xl font-bold text-white mb-4">Let&apos;s Connect</h4>
          <p className="text-gray-400">I&apos;m currently seeking opportunities for front-end or full-stack development roles. Whether you have a project in mind, want to discuss collaboration, or just want to connect, feel free to reach out!</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg text-white">{resumeData.contact.email}</p>
              </div>
            </div>
            {/* <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.5l1.5 4.5L8 10l-1.5 1.5L10 15l1.5-1.5L16 13l4.5 1.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg text-white">{resumeData.contact.phone}</p>
              </div>
            </div> */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg text-white">{resumeData.contact.location}</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.765 1.75-1.765 1.75.79 1.75 1.765-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.58 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href={resumeData.contact.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                <g><path d="M18.244 2.25h3.308l-7.227 8.261 8.502 11.239h-6.63l-5.22-6.873-4.108 6.873H2.072l7.55-10.364L2.242 2.25h6.161L12 8.351zm-1.815 17.615l1.64-2.164-5.632-7.46-1.64 2.165 5.632 7.459z"></path></g>
              </svg>
            </a>
          </div>
        </div>

        <motion.div className="lg:w-1/2" variants={fadeIn}>
          <h4 className="text-xl font-bold text-white mb-4">Send a Message</h4>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="text" placeholder="Last Name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <input type="text" placeholder="Subject" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
            <button type="submit" className="w-full px-6 py-3 font-bold rounded-full text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 to-indigo-600">
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.475-1.956 2.387 4.547a1 1 0 001.885.127l4.133-10.742a1 1 0 00-1.076-1.309z" />
                </svg>
                <span>Send Message</span>
              </div>
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              Prefer email? Reach out directly at <a href={`mailto:${resumeData.contact.email}`} className="text-white hover:underline">{resumeData.contact.email}</a>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  </section>
  )
}

export default Contact