import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: "Smart Analytics",
    subtitle: "Data-driven Business Intelligence Platform",
    description: "Advanced analytics dashboard that processes large datasets to provide actionable business insights with real-time visualization and predictive modeling capabilities.",
    image: "📊"
  },
  {
    id: 2,
    title: "CloudSync Pro",
    subtitle: "Enterprise Cloud Management Solution", 
    description: "Comprehensive cloud infrastructure management tool that automates deployment, monitoring, and scaling of applications across multiple cloud providers.",
    image: "☁️"
  },
  {
    id: 3,
    title: "T.I.T.A.N",
    subtitle: "Tech-based Interactive Task & Assistant Network",
    description: "TITAN is a voice assistant that can perform various tasks such as answering questions, providing weather updates, fetching news, and more. It utilizes speech recognition, NLP, and API integrations to enhance user interactions.",
    image: "🤖"
  },
  {
    id: 4,
    title: "SecureVault",
    subtitle: "Blockchain-based Security Platform",
    description: "Next-generation security platform utilizing blockchain technology for secure data storage, identity verification, and encrypted communication channels.",
    image: "🔒"
  },
  {
    id: 5,
    title: "EcoTracker",
    subtitle: "Environmental Impact Monitoring System",
    description: "IoT-enabled environmental monitoring solution that tracks carbon footprint, energy consumption, and sustainability metrics for organizations and individuals.",
    image: "🌱"
  }
]

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(2) // T.I.T.A.N is active (index 2)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentProject((prev) => (prev + 1) % projectsData.length)
      setTimeout(() => setIsTransitioning(false), 800)
    }
  }

  const prevProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
      setTimeout(() => setIsTransitioning(false), 800)
    }
  }

  const goToProject = (index: number) => {
    if (!isTransitioning && index !== currentProject) {
      setIsTransitioning(true)
      setCurrentProject(index)
      setTimeout(() => setIsTransitioning(false), 800)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevProject()
      } else if (e.key === 'ArrowRight') {
        nextProject()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isTransitioning])

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.p 
          className="projects-description"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore a showcase of innovative projects blending technology, creativity, and real-world impact.<br />
          Each project reflects a journey of problem-solving and continuous learning.
        </motion.p>
        
        <div className="carousel-container">
          <motion.div 
            className="projects-carousel"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${index === currentProject ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: index === currentProject ? 1 : 0.4,
                  scale: index === currentProject ? 1 : 0.85,
                  x: (index - currentProject) * (window.innerWidth < 768 ? 120 : 180),
                  rotateY: (index - currentProject) * 15,
                  zIndex: index === currentProject ? 10 : Math.abs(index - currentProject),
                  filter: index === currentProject ? "blur(0px)" : "blur(3px)"
                }}
                whileHover={{ 
                  y: index === currentProject ? -10 : -5,
                  scale: index === currentProject ? 1.02 : 0.87,
                  boxShadow: index === currentProject ? 
                    "0 30px 60px rgba(249, 178, 52, 0.3)" : 
                    "0 15px 30px rgba(0, 0, 0, 0.4)"
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                onClick={() => goToProject(index)}
              >
                <div className="project-image">
                  <div className="robot-icon">
                    {project.image === "🤖" ? (
                      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Robot Head */}
                        <circle cx="60" cy="45" r="30" fill="#E8E8E8" stroke="#B0B0B0" strokeWidth="2"/>
                        
                        {/* Eyes */}
                        <circle cx="50" cy="38" r="4" fill="#4A90E2"/>
                        <circle cx="70" cy="38" r="4" fill="#4A90E2"/>
                        
                        {/* Mouth */}
                        <path d="M52 50 Q60 58 68 50" stroke="#B0B0B0" strokeWidth="2" fill="none"/>
                        
                        {/* Body */}
                        <rect x="40" y="70" width="40" height="40" rx="6" fill="#F0F0F0" stroke="#B0B0B0" strokeWidth="2"/>
                        
                        {/* Chest Circle */}
                        <circle cx="60" cy="85" r="10" fill="#4A90E2" opacity="0.3"/>
                        <circle cx="60" cy="85" r="6" fill="#4A90E2"/>
                        
                        {/* Arms */}
                        <rect x="25" y="75" width="10" height="25" rx="5" fill="#E8E8E8" stroke="#B0B0B0" strokeWidth="2"/>
                        <rect x="85" y="75" width="10" height="25" rx="5" fill="#E8E8E8" stroke="#B0B0B0" strokeWidth="2"/>
                      </svg>
                    ) : (
                      <span className="emoji-icon">{project.image}</span>
                    )}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-name">{project.title}</h3>
                  <h4 className="project-subtitle">
                    {project.subtitle.includes('<br>') ? 
                      project.subtitle.split('<br>').map((line, i) => (
                        <span key={i}>{line}<br/></span>
                      )) : 
                      project.subtitle
                    }
                  </h4>
                  
                  <p className="project-text">
                    {project.description}
                  </p>
                  
                  <motion.a 
                    href="#" 
                    className="project-link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Project <motion.span 
                      className="arrow"
                      whileHover={{ x: 3 }}
                    >&gt;</motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="carousel-navigation"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="carousel-dots">
            {projectsData.map((_, index) => (
              <motion.div
                key={index}
                className={`dot ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects