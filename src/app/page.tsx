'use client';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Bars3Icon, XMarkIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, ServerStackIcon, AdjustmentsHorizontalIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';

// You will need to install these dependencies:
// npm install tailwindcss framer-motion @heroicons/react

// --- Data based on your resume and the new design ---
const resumeData = {
  name: 'Mohammed Kaif',
  role: 'Full Stack Developer',
  summary: 'Motivated and detail-oriented Computer Applications student with hands-on experience in responsive, full-stack web applications using modern technologies. Passionate about creating scalable, impactful solutions in a collaborative team.',
  contact: {
    email: 'kaifofficial67@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohammedkaif67',
    github: 'https://github.com/mohammedkaif01',
    phone: '+91 9676136481',
    location: 'Hyderabad, Telangana'
  },
  skills: [
    { category: 'Programming Languages', items: ['C++', 'JavaScript', 'PHP'], icon: <CodeBracketIcon className="h-6 w-6 text-purple-400" /> },
    { category: 'Frontend Technologies', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'], icon: <GlobeAltIcon className="h-6 w-6 text-blue-400" /> },
    { category: 'Backend Technologies', items: ['Node.js', 'PHP', 'SQL', 'MongoDB'], icon: <ServerStackIcon className="h-6 w-6 text-green-400" /> },
    { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman'], icon: <AdjustmentsHorizontalIcon className="h-6 w-6 text-red-400" /> },
    { category: 'Development Concepts', items: ['REST APIs', 'CRUD', 'MVC', 'Agile', 'Responsive Design'], icon: <LightBulbIcon className="h-6 w-6 text-yellow-400" /> },
    { category: 'Mobile & Responsive Design', items: ['Mobile-First', 'Flexbox', 'Tailwind CSS'], icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
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
      name: 'Eco-Alert (Hackathon Project)',
      description: 'A real-time civic issue reporting web app for pollution, disaster, and hazard alerts.',
      details: [
        'Built frontend with HTML, CSS, JavaScript; backend in PHP MySQL.',
        'Integrated geolocation API for user location tagging with issues.',
        'Mobile-first UI with Flexbox and Tailwind CSS; validated inputs for secure submissions.',
      ],
    },
    {
      name: 'Tic Tac Toe Game (Web App)',
      description: 'A 2-player web game with HTML, CSS, JavaScript, Tailwind CSS, and PHP backend.',
      details: [
        'Implemented logic for turns, win/draw detection, and real-time updates using DOM.',
        'Mobile-first design, modular JS, and dynamic interactivity with event listeners.',
      ],
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

// --- Framer Motion variants for animations ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <motion.div className="flex items-center space-x-4 mb-8"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="bg-white/10 p-2 rounded-full text-white">
      {icon}
    </div>
    <h3 className="text-3xl font-bold text-white">{title}</h3>
  </motion.div>
);

const Header = () => {
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
        <motion.a href="#" onClick={handleSmoothScroll} className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          MK
        </motion.a>
        <div className="hidden md:flex space-x-6">
          <motion.a href="#about" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors" variants={fadeIn}>About</motion.a>
          <motion.a href="#skills" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors" variants={fadeIn}>Skills</motion.a>
          <motion.a href="#experience" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors" variants={fadeIn}>Experience</motion.a>
          <motion.a href="#projects" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors" variants={fadeIn}>Projects</motion.a>
          <motion.a href="#contact" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors" variants={fadeIn}>Contact</motion.a>
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
            <a href="#about" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" onClick={handleSmoothScroll} className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center text-center p-4">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          MOHAMMED <br /> <span className="text-cyan-400">KAIF</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mt-4">{resumeData.role}</h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {resumeData.summary}
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
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
          <p className="text-lg mb-4">{resumeData.summary}</p>
          <p className="text-md leading-relaxed">
            I am a final year Computer Applications student at Osmania University, Hyderabad. With a strong academic background and hands-on experience in full-stack development, I am eager to apply my skills in a professional setting. My coursework includes Data Structures, Algorithms, and Software Engineering, which provides a solid foundation for building robust and efficient applications. I am passionate about clean code, responsive design, and collaborative problem-solving.
          </p>
        </motion.div>
        <motion.div className="lg:w-1/3 w-full" variants={fadeIn}>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
            <div className="text-gray-400">
              <p className="font-bold text-cyan-400 text-lg">{resumeData.education.degree}</p>
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
);

const SkillsSection = () => (
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
);

const ExperienceSection = () => (
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
              <h4 className="text-2xl font-bold text-cyan-400">{job.title}</h4>
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
);

const ProjectsSection = () => (
  <section id="projects" className="py-20 p-4">
    <div className="container mx-auto">
      <SectionHeader title="Featured Projects" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>} />
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {resumeData.projects.map((project, index) => (
          <motion.div key={index} className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 transform hover:scale-105 transition-all duration-300" variants={fadeIn}>
            <h4 className="text-2xl font-bold text-white mb-2">{project.name}</h4>
            <p className="text-md text-gray-400 mb-4">{project.description}</p>
            <ul className="text-sm text-gray-500 space-y-2">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20 p-4">
    <div className="container mx-auto">
      <SectionHeader title="Let's Connect" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V8a2 2 0 012-2h6a2 2 0 012 2z" /></svg>} />
      <motion.div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-center text-lg text-gray-300 mb-6">
          I&apos;m currently seeking a front-end or full-stack internship. Feel free to reach out to me!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
          <a href={`mailto:${resumeData.contact.email}`} className="flex items-center space-x-4 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
            </svg>
            <span>Email</span>
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.765 1.75-1.765 1.75.79 1.75 1.765-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.58 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a href={`tel:${resumeData.contact.phone}`} className="flex items-center space-x-4 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.5l1.5 4.5L8 10l-1.5 1.5L10 15l1.5-1.5L16 13l4.5 1.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            <span>{resumeData.contact.phone}</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-500 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {resumeData.name}. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased bg-gray-950 text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
