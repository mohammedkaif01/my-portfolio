"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  ServerStackIcon,
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

// You will need to install these dependencies:
// npm install tailwindcss framer-motion @heroicons/react

// --- Data based on your resume and the new design ---
const resumeData = {
  name: "Mohammed Kaif",
  role: "Full-Stack Developer & Problem Solver",
  summary:
    "Motivated Computer Applications student with hands-on experience in responsive, full-stack web applications. Skilled in modern technologies and passionate about creating scalable, impactful web solutions.",
  contact: {
    email: "kaifofficial67@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammedkaif67",
    github: "https://github.com/mohammedkaif01",
    twitter: "https://x.com/your_username_here",
    location: "Hyderabad, Telangana",
    phone: "+91 9676136481",
  },
  resumeUrl: "/path-to-your-resume.pdf", // Placeholder for your resume file
  skills: [
    {
      category: "Programming Languages",
      items: ["C++", "JavaScript", "PHP"],
      icon: <CodeBracketIcon className="h-6 w-6 text-purple-400" />,
    },
    {
      category: "Frontend Technologies",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-400" />,
    },
    {
      category: "Backend Technologies",
      items: ["Node.js", "PHP", "SQL", "MongoDB"],
      icon: <ServerStackIcon className="h-6 w-6 text-green-400" />,
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6 text-red-400" />,
    },
    {
      category: "Development Concepts",
      items: ["REST APIs", "CRUD", "MVC", "Agile", "Responsive Design"],
      icon: <LightBulbIcon className="h-6 w-6 text-yellow-400" />,
    },
    {
      category: "Mobile & Responsive Design",
      items: ["Mobile-First", "Flexbox", "Tailwind CSS"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ],
  experience: [
    {
      title: "Software Development Intern",
      company: "Deloitte Virtual Simulation (Forage)",
      dates: "Jun 2025",
      location: "Virtual",
      description: [
        "Completed certified job simulation in full-stack dev, testing, Agile, and debugging.",
        "Conducted mock code reviews, identified issues in simulated production code.",
        "Built scalable, modular solutions based on simulated stakeholder requirements.",
        "Strengthened analytical thinking by translating specs into functional modules.",
      ],
    },
    {
      title: "Web Developer",
      company: "Frost Hackathon by MLH",
      dates: "Jan 2024",
      location: "Hyderabad",
      description: [
        "Developed a civic reporting web app with image upload and geolocation features.",
        "Integrated RESTful APIs to auto-forward reports to municipal systems.",
        "Built responsive UI using HTML5, CSS3, JavaScript; ensured mobile/desktop compatibility.",
        "Used SQL for structured data handling and secure storage.",
        "Applied Agile workflow, collaborated via Git version control.",
      ],
    },
  ],
  projects: [
    {
      name: "Eco-Alert",
      tagline: "Civic Issue Reporting Platform",
      category: "Hackathon Project",
      description:
        "A comprehensive real-time civic issue reporting web application that enables citizens to report environmental issues, pollution, disasters, and hazard alerts with geolocation integration.",
      features: [
        "Real-time civic issue reporting with image upload functionality",
        "Geolocation API integration for precise location tagging",
        "Mobile-first responsive UI built with Flexbox and Tailwind CSS",
        "Secure input validation and data handling",
        "RESTful API integration with PHP MySQL backend",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "MySQL",
        "Geolocation API",
        "Tailwind CSS",
      ],
      liveDemoUrl: "#",
      codeUrl: "#",
    },
    {
      name: "Tic Tac Toe Game",
      tagline: "Interactive Web Game",
      category: "Web Application",
      description:
        "A modern, responsive 2-player Tic Tac Toe game featuring real-time updates, win/draw detection, and smooth animations with mobile-optimized design.",
      features: [
        "Interactive 2-player game with turn-based logic",
        "Real-time win/draw detection algorithms",
        "Dynamic DOM manipulation for game state updates",
        "Mobile-first responsive design with CSS Grid",
        "Smooth animations and visual feedback",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "DOM Manipulation",
        "Event Listeners",
      ],
      liveDemoUrl: "#",
      codeUrl: "#",
    },
  ],
  education: {
    degree: "Bachelor of Computer Applications",
    university: "Osmania University, Hyderabad",
    dates: "Jul 2025",
    relevantCoursework: [
      "Data Structures and Algorithms",
      "DBMS",
      "Software Engineering",
      "OS",
      "Web Development",
      "OOP",
      "Computer Networks",
      "System Analysis",
    ],
  },
};

// --- Framer Motion variants for animations ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

const SectionHeader = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => (
  <motion.div
    className="flex items-center space-x-4 mb-8"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="bg-white/10 p-2 rounded-full text-white">{icon}</div>
    <h3 className="text-3xl font-bold text-white">{title}</h3>
  </motion.div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          onClick={handleSmoothScroll}
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          MK
        </motion.a>
        <div className="hidden md:flex space-x-6 items-center">
          <motion.a
            href="#home"
            onClick={handleSmoothScroll}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            variants={fadeIn}
          >
            Home
          </motion.a>
          <motion.a
            href="#skills"
            onClick={handleSmoothScroll}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            variants={fadeIn}
          >
            Skills
          </motion.a>
          <motion.a
            href="#experience"
            onClick={handleSmoothScroll}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            variants={fadeIn}
          >
            Experience
          </motion.a>
          <motion.a
            href="#projects"
            onClick={handleSmoothScroll}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            variants={fadeIn}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={handleSmoothScroll}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            variants={fadeIn}
          >
            Contact
          </motion.a>
          <a
            href={resumeData.resumeUrl}
            download
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Resume</span>
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/90 backdrop-blur-sm"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-4 space-y-2">
            <a
              href="#about"
              onClick={handleSmoothScroll}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={handleSmoothScroll}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={handleSmoothScroll}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={handleSmoothScroll}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href={resumeData.resumeUrl}
              download
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              onClick={handleSmoothScroll}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center text-center p-4"
  >
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          MOHAMMED
        </h1>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-200">
          KAIF
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mt-4">
          {resumeData.role}
        </h2>
        <div className="flex justify-center items-center text-gray-400 space-x-4 mt-2">
          <span>{resumeData.contact.location}</span>
          <span>•</span>
          <span>{resumeData.contact.phone}</span>
        </div>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {resumeData.summary}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-3 text-white font-bold rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={resumeData.resumeUrl}
            download
            className="inline-block px-8 py-3 text-white font-bold rounded-full shadow-lg border-2 border-indigo-600 hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.765 1.75-1.765 1.75.79 1.75 1.765-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.58 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={resumeData.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-8 w-8 fill-current"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.261 8.502 11.239h-6.63l-5.22-6.873-4.108 6.873H2.072l7.55-10.364L2.242 2.25h6.161L12 8.351zm-1.815 17.615l1.64-2.164-5.632-7.46-1.64 2.165 5.632 7.459z"></path>
              </g>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 p-4">
    <div className="container mx-auto">
      <SectionHeader
        title="About Me"
        icon={<AcademicCapIcon className="h-6 w-6 text-pink-400" />}
      />
      <motion.div
        className="flex flex-col lg:flex-row items-start gap-8 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="lg:w-2/3 text-gray-300" variants={fadeIn}>
          <p className="text-lg mb-4">
            I am a passionate and detail-oriented professional with a recently
            completed Bachelor of Computer Applications from Osmania University,
            Hyderabad. I have cultivated a strong foundation in core computer
            science principles through coursework in Data Structures,
            Algorithms, and Software Engineering. My hands-on experience in
            building responsive, full-stack web applications has equipped me
            with a robust skill set in modern technologies like React.js,
            Node.js, and Tailwind CSS. I am proficient in developing RESTful
            APIs, utilizing version control with Git, and working within Agile
            methodologies. I am eager to apply my skills and problem-solving
            abilities to contribute to impactful web solutions as I seek a
            professional role in the industry.
          </p>
        </motion.div>
        <motion.div className="lg:w-1/3 w-full" variants={fadeIn}>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
            <div className="text-gray-400">
              <p className="font-bold text-cyan-400 text-lg">
                {resumeData.education.degree}
              </p>
              <p className="text-md">{resumeData.education.university}</p>
              <p className="text-sm">{resumeData.education.dates}</p>
            </div>
            <h5 className="text-white font-semibold mt-4 mb-2">
              Relevant Coursework:
            </h5>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              {resumeData.education.relevantCoursework.map((course, index) => (
                <span
                  key={index}
                  className="bg-gray-700 px-3 py-1 rounded-full text-center"
                >
                  {course}
                </span>
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
      <SectionHeader
        title="Technical Skills"
        icon={<CodeBracketIcon className="h-6 w-6 text-purple-400" />}
      />
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {resumeData.skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 transform hover:scale-105 transition-transform duration-300"
            variants={fadeIn}
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h4 className="text-xl font-semibold text-white ml-3">
                {skill.category}
              </h4>
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
      <SectionHeader
        title="Professional Experience"
        icon={<BriefcaseIcon className="h-6 w-6 text-teal-400" />}
      />
      <div className="space-y-8">
        {resumeData.experience.map((job, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-2xl font-bold text-cyan-400">{job.title}</h4>
              <span className="text-gray-500 text-sm">{job.dates}</span>
            </div>
            <p className="text-md font-semibold text-gray-300">
              {job.company} - {job.location}
            </p>
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
      <SectionHeader
        title="Featured Projects"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-lime-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        }
      />
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
            variants={fadeIn}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`p-3 rounded-full text-white bg-gradient-to-br ${
                  index % 2 === 0
                    ? "from-green-500 to-lime-500"
                    : "from-blue-500 to-indigo-500"
                }`}
              >
                {index % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">
                  {project.name}
                </h4>
                <p className="text-sm text-gray-400">{project.tagline}</p>
              </div>
            </div>
            <span className="inline-block bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full mb-4">
              {project.category}
            </span>
            <p className="text-md text-gray-300 mb-6">{project.description}</p>
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white mb-2">
                Key Features:
              </h5>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-2">
                Technologies:
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 font-bold rounded-full text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 to-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Live Demo</span>
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 font-bold rounded-full text-white transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 border border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.632 1.554l-1.474 2.148a1 1 0 01-1.632-1.128l1.474-2.148a1 1 0 011.002-.574zM16.994 6.945a1 1 0 01.31 1.777l-2.072 1.13a1 1 0 01-1.383-1.13l2.072-1.13a1 1 0 011.002-.577zM7.006 17.055a1 1 0 01-.31-1.777l2.072-1.13a1 1 0 011.383 1.13l-2.072 1.13a1 1 0 01-1.003.577zM4.022 13.567a1 1 0 01-.632-1.554l1.474-2.148a1 1 0 111.632 1.128l-1.474 2.148a1 1 0 01-1.003.574z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zM10 2a1 1 0 011 1v1H9V3a1 1 0 011-1zM8 2a1 1 0 011 1v1H7V3a1 1 0 011-1zM6 2a1 1 0 011 1v1H5V3a1 1 0 011-1zM4 2a1 1 0 011 1v1H3V3a1 1 0 011-1zM2 2a1 1 0 011 1v1H1V3a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M18 2h-2v1h2V2zM16 2h-2v1h2V2zM14 2h-2v1h2V2zM20 2h-2v1h2V2zM22 2h-2v1h2V2zM24 2h-2v1h2V2z"
                    clipRule="evenodd"
                  />
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
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

const ContactSection = () => (
  <section id="contact" className="py-20 p-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-2">Get In Touch</h3>
        <p className="text-gray-400">
          Ready to collaborate on your next project or discuss opportunities?
          I'd love to hear from you!
        </p>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row gap-8 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="lg:w-1/2 space-y-6">
          <h4 className="text-xl font-bold text-white mb-4">Let's Connect</h4>
          <p className="text-gray-400">
            I'm currently seeking opportunities for front-end or full-stack
            development roles. Whether you have a project in mind, want to
            discuss collaboration, or just want to connect, feel free to reach
            out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg text-white">{resumeData.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.5l1.5 4.5L8 10l-1.5 1.5L10 15l1.5-1.5L16 13l4.5 1.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg text-white">{resumeData.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg text-white">
                  {resumeData.contact.location}
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.765 1.75-1.765 1.75.79 1.75 1.765-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.58 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={resumeData.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-current"
              >
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.261 8.502 11.239h-6.63l-5.22-6.873-4.108 6.873H2.072l7.55-10.364L2.242 2.25h6.161L12 8.351zm-1.815 17.615l1.64-2.164-5.632-7.46-1.64 2.165 5.632 7.459z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <motion.div className="lg:w-1/2" variants={fadeIn}>
          <h4 className="text-xl font-bold text-white mb-4">Send a Message</h4>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 font-bold rounded-full text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 to-indigo-600"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.475-1.956 2.387 4.547a1 1 0 001.885.127l4.133-10.742a1 1 0 00-1.076-1.309z" />
                </svg>
                <span>Send Message</span>
              </div>
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              Prefer email? Reach out directly at{" "}
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="text-cyan-400 hover:underline"
              >
                {resumeData.contact.email}
              </a>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-500 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {resumeData.name}. All Rights
        Reserved.
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
