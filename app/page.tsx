'use client'

import { useState, useEffect } from 'react'
import { Download, Star, Code, Briefcase, User, Mail, Phone, MapPin, SquareChartGantt } from 'lucide-react'

interface Language {
  hero: {
    name: string
    title: string
    description: string
    technologies: string
    imageUrl: string
  }
  about: {
    title: string
    content: string
    downloadCV: string
    downloadCVHardvard?: string 
  }
  experience: {
    title: string
    jobs: {
      title: string
      company: string
      period: string
      description: string
      technologies: string
    }[]
  }
  projects: {
    title: string
    items: {
      name: string
      description: string
      technologies: string[]
    }[]
  }
  skills: {
    title: string
    categories: {
      name: string
      items: string[]
    }[]
  }
  contact: {
    title: string
    email: string
    phone: string
    location: string
  }
}

const translations: { [key: string]: Language } = {
  es: {
    hero: {
      name: "Alexis Davis",
      title: "Desarrollador de Software",
      description: "Desarrollador Full Stack apasionado por crear soluciones innovadoras",
      technologies: "C# • PostgreSQL • Angular • Next.js • AWS • Java • Go",
      imageUrl: "/FotoMia.jpg"
    },
    about: {
      title: "Sobre Mí",
      content: "Soy un desarrollador full stack con experiencia en el desarrollo de aplicaciones web y móviles. Me especializo en crear soluciones eficientes y escalables utilizando las últimas tecnologías.",
      downloadCV: "Descargar CV",
      downloadCVHardvard: "Descargar CV Harvard"
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          title: "Desarrollador Full Stack",
          company: "Compania : Baup",
          period: "Enero 2025 - Presente",
          description: "Desarrollo de aplicaciones web utilizando frameworks modernos y bases de datos relacionales y no relacionales.",
          technologies: "C# • PostgreSQL • Angular • Next.js • AWS • Terraform"
        },
          {
            title: "Fullstack Freelance",
            company: "",
            period: "Enero 2023 - Presente",
            description: "Desarrollo de aplicaciones web, integración de APIs y optimización de bases de datos, ademas de la implementación de soluciones en la nube y mantenimiento de sistemas existentes.",
            technologies: "C# • PostgreSQL • Angular • Next.js • JAVA"
          }
      ]
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          name: "Sistema de Gestión de Turnos Médicos",
          description: "Aplicación web para la gestión integral de citas médicas, pacientes y profesionales de la salud. Incluye sistema de notificaciones, reportes y panel administrativo.",
          technologies: ["React", "Node.js", "PostgreSQL", "Java - Springboot"]
        },
        {
          name: "Software de Gestión de Barrio Privado",
          description: "Sistema completo para la administración de un barrio privado, incluyendo control de acceso, gestión de expensas, reserva de amenities y comunicación entre residentes.",
          technologies: ["Angular", "TypeScript", "Java - Springboot", "MySQL"]
        }
      ]
    },
    skills: {
      title: "Habilidades",
      categories: [
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"]
        },
        {
          name: "Backend",
          items: ["Node.js", "C#", "Python", "PostgreSQL", "Microsoft SQL Server", "Java", "Go"]
        },
        {
          name: "Herramientas",
          items: ["Git", "Docker", "AWS", "Vercel"]
        }
      ]
    },
    contact: {
      title: "Contacto",
      email: "alexisfede09@gmail.com",
      phone: "+54 351 6816919",
      location: "Córdoba, Argentina"
    }
  },
  en: {
    hero: {
      name: "Alexis Davis",
      title: "Software Developer",
      description: "Full Stack Developer passionate about creating innovative solutions",
      technologies: "C# • PostgreSQL • Angular • Next.js • AWS • Java • Go",
      imageUrl: "/FotoMia.jpg"
    },
    about: {
      title: "About Me",
      content: "I'm a full stack developer with experience in web and mobile application development. I specialize in creating efficient and scalable solutions using the latest technologies.",
      downloadCV: "Download CV",
      downloadCVHardvard: "Download Harvard CV"
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          title: "FullStack Developer",
          company: "Company : Baup",
          period: "January 2025 - Present",
          description: "Web application development using modern frameworks and relational and non-relational databases.",
          technologies: "C# • PostgreSQL • Angular • Next.js • AWS • Terraform"
        },
        {
          title: "Fullstack Freelance",
          company: "",
          period: "January 2023 - Present",
          description: "Web application development, API integration, and database optimization, as well as cloud solutions implementation and existing system maintenance.",
          technologies: "C# • PostgreSQL • Angular • Next.js • Java"
        }
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Medical Appointment Management System",
          description: "Web application for comprehensive management of medical appointments, patients and healthcare professionals. Includes notification system, reports and administrative panel.",
          technologies: ["React", "Node.js", "PostgreSQL", "Java - Springboot"]
        },
        {
          name: "Private Neighborhood Management Software",
          description: "Complete system for managing a private neighborhood, including access control, expense management, amenity booking and resident communication.",
          technologies: ["Angular", "TypeScript", "Java - Springboot", "MySQL"]
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"]
        },
        {
          name: "Backend",
          items: ["Node.js", "C#", "Python", "PostgreSQL", "Microsoft SQL Server", "Java", "Go"]
        },
        {
          name: "Tools",
          items: ["Git", "Docker", "AWS", "Vercel"]
        }
      ]
    },
    contact: {
      title: "Contact",
      email: "alexisfede09@gmail.com",
      phone: "+54 351 6816919",
      location: "Córdoba, Argentina"
    }
  }
}

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<'es' | 'en'>('es')
  const [visibleSections, setVisibleSections] = useState<string[]>([])
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const t = translations[currentLanguage]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => 
              prev.includes(entry.target.id) 
                ? prev 
                : [...prev, entry.target.id]
            )
          } else {
            setVisibleSections(prev => 
              prev.filter(id => id !== entry.target.id)
            )
          }
        })
      },
      { threshold: 0.2, rootMargin: '-50px' }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'es' ? 'en' : 'es')
  }
  
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Alexis Federico Davis - CV - 2025.pdf'
    link.download = 'Alexis_Davis_CV.pdf'
    link.click()
  }

  const downloadCVHardvard = () => {
    const link = document.createElement('a')
    link.href = '/Alexis_Federico_Davis_CV.pdf'
    link.download = 'Alexis_Federico_Davis_CV.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes geometric-float {
          0%, 100% { 
            transform: translate(0px, 0px) rotate(0deg); 
          }
          25% { 
            transform: translate(15px, -10px) rotate(90deg); 
          }
          50% { 
            transform: translate(-8px, -20px) rotate(180deg); 
          }
          75% { 
            transform: translate(-15px, 5px) rotate(270deg); 
          }
        }
        
        @keyframes drift-horizontal {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(40px); }
        }
        
        @keyframes drift-vertical {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        
        @keyframes triangle-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes hexagon-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.3) rotate(60deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-geometric-float {
          animation: geometric-float 12s ease-in-out infinite;
        }
        
        .animate-drift-horizontal {
          animation: drift-horizontal 16s ease-in-out infinite;
        }
        
        .animate-drift-vertical {
          animation: drift-vertical 14s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        
        .animate-triangle-spin {
          animation: triangle-spin 18s ease-in-out infinite;
        }
        
        .animate-hexagon-pulse {
          animation: hexagon-pulse 10s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
        }
        
        .glass-card-enhanced {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        }
        
        .glass-card-hero {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          box-shadow: 0 50px 80px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950"></div>
        
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"
            style={{ 
              top: '10%', 
              left: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
            }}
          ></div>
          <div 
            className="absolute w-72 h-72 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl animate-float-delayed"
            style={{ 
              top: '60%', 
              right: '15%',
              transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)` 
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-xl animate-pulse-slow"
            style={{ 
              bottom: '20%', 
              left: '20%',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` 
            }}
          ></div>
          
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-purple-400/10 rotate-12 animate-pulse"></div>
          
          <div 
            className="absolute top-[15%] left-[70%] w-0 h-0 animate-triangle-spin"
            style={{ 
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent', 
              borderBottom: '20px solid rgba(59, 130, 246, 0.2)',
              transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
              animationDelay: '0s'
            }}
          ></div>
          <div 
            className="absolute top-[65%] left-[8%] w-0 h-0 animate-triangle-spin"
            style={{ 
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent', 
              borderBottom: '26px solid rgba(236, 72, 153, 0.2)',
              transform: `translate(${mousePosition.x * 0.006}px, ${mousePosition.y * 0.006}px)`,
              animationDelay: '3s'
            }}
          ></div>
          <div 
            className="absolute top-[85%] right-[25%] w-0 h-0 animate-triangle-spin"
            style={{ 
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent', 
              borderBottom: '17px solid rgba(34, 197, 94, 0.2)',
              transform: `translate(${mousePosition.x * 0.007}px, ${mousePosition.y * 0.007}px)`,
              animationDelay: '6s'
            }}
          ></div>
          
          <div 
            className="absolute top-[35%] right-[5%] w-8 h-8 border-2 border-cyan-400/20 animate-hexagon-pulse"
            style={{ 
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute top-[75%] left-[60%] w-12 h-12 border-2 border-violet-400/20 animate-hexagon-pulse"
            style={{ 
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              transform: `translate(${mousePosition.x * 0.009}px, ${mousePosition.y * 0.009}px)`,
              animationDelay: '5s'
            }}
          ></div>
          <div 
            className="absolute top-[45%] left-[35%] w-6 h-6 border-2 border-orange-400/20 animate-hexagon-pulse"
            style={{ 
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              transform: `translate(${mousePosition.x * 0.011}px, ${mousePosition.y * 0.011}px)`,
              animationDelay: '8s'
            }}
          ></div>
          
          <div 
            className="absolute top-[20%] left-[45%] w-6 h-6 border border-rose-400/20 rotate-45 animate-geometric-float"
            style={{ 
              transform: `rotate(45deg) translate(${mousePosition.x * 0.010}px, ${mousePosition.y * 0.010}px)`,
              animationDelay: '1s'
            }}
          ></div>
          <div 
            className="absolute top-[70%] right-[45%] w-8 h-8 border border-emerald-400/20 rotate-45 animate-geometric-float"
            style={{ 
              transform: `rotate(45deg) translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
              animationDelay: '4s'
            }}
          ></div>
          <div 
            className="absolute top-[55%] left-[75%] w-10 h-10 border border-amber-400/20 rotate-45 animate-geometric-float"
            style={{ 
              transform: `rotate(45deg) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
              animationDelay: '7s'
            }}
          ></div>
          
          <div 
            className="absolute top-[25%] left-[25%] w-16 h-16 border border-indigo-400/15 rounded-full animate-drift-horizontal"
            style={{ 
              transform: `translate(${mousePosition.x * 0.013}px, ${mousePosition.y * 0.013}px)`,
              animationDelay: '2.5s'
            }}
          ></div>
          <div 
            className="absolute top-[80%] right-[60%] w-12 h-12 border border-teal-400/15 rounded-full animate-drift-vertical"
            style={{ 
              transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
              animationDelay: '5.5s'
            }}
          ></div>
          <div 
            className="absolute top-[40%] right-[80%] w-14 h-14 border border-pink-400/15 rounded-full animate-orbit"
            style={{ 
              transform: `translate(${mousePosition.x * 0.007}px, ${mousePosition.y * 0.007}px)`,
              animationDelay: '8.5s'
            }}
          ></div>
          
          <div 
            className="absolute top-[60%] left-[50%] w-5 h-5 border border-lime-400/20 animate-drift-horizontal"
            style={{ 
              transform: `translate(${mousePosition.x * 0.014}px, ${mousePosition.y * 0.014}px)`,
              animationDelay: '1.5s'
            }}
          ></div>
          <div 
            className="absolute top-[30%] right-[30%] w-7 h-7 border border-sky-400/20 animate-drift-vertical"
            style={{ 
              transform: `translate(${mousePosition.x * 0.009}px, ${mousePosition.y * 0.009}px)`,
              animationDelay: '4.5s'
            }}
          ></div>
          <div 
            className="absolute top-[85%] left-[40%] w-9 h-9 border border-fuchsia-400/20 animate-geometric-float"
            style={{ 
              transform: `translate(${mousePosition.x * 0.011}px, ${mousePosition.y * 0.011}px)`,
              animationDelay: '7.5s'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                transform: `translateY(${scrollY * 0.01 * Math.random()}px)`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="glass-card-enhanced px-6 py-3 text-white font-medium hover:scale-105 transition-all duration-300 group"
        >
          <span className="group-hover:text-purple-300 transition-colors">
            {currentLanguage === 'es' ? '🇺🇸 EN' : '🇦🇷 ES'}
          </span>
        </button>
      </div>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3 space-x-3">
        {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-3 h-3 rounded-full transition-all duration-500 block ${
              visibleSections.includes(section)              
                ? 'bg-purple-400 scale-175 shadow-lg shadow-purple-400/50' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      <section 
        id="hero" 
        data-section 
        className={`min-h-screen flex items-center justify-center px-6 transition-all duration-1000 transform ${
          visibleSections.includes('hero') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <div className="glass-card-hero text-center max-w-4xlmx-auto p-12 relative ">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 animate-gradient-shift"></div>
          <div className="relative z-10">
            <div className="mb-8 inline-block">
              <div className="w-64 h-64 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-3 bg-gray-900 rounded-full flex items-center justify-center">
                  <img
                    src={t.hero.imageUrl}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 animate-fade-in-up">
              {t.hero.name}
            </h1>
            <h2 className="text-3xl md:text-4xl text-blue-200 mb-6 animate-fade-in-up-delay font-light">
              {t.hero.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in-up-delay-2 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {t.hero.technologies.split(' • ').map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-400/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        data-section 
        className={`py-20 px-6 transition-all duration-1000 transform ${
          visibleSections.includes('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-enhanced p-8 md:p-12 relative  group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                  <Star className="w-8 h-8 text-purple-300" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {t.about.title}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {t.about.content}
              </p>
              
              <button 
                onClick={downloadCV}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                {t.about.downloadCV}
              </button>
              <button 
                onClick={downloadCVHardvard} style={{ marginLeft: '2%' }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                {t.about.downloadCVHardvard}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="experience" 
        data-section 
        className={`py-20 px-6 transition-all duration-1000 transform ${
          visibleSections.includes('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-enhanced p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                <Briefcase className="w-8 h-8 text-blue-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {t.experience.title}
              </h2>
            </div>
            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <div key={index} className="">
                  <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <span className="text-blue-200 font-medium text-lg">{job.company}</span>
                      <span className="text-gray-400 text-sm bg-white/10 px-3 py-1 rounded-full">{job.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                    <div className="text-purple-300 text-sm font-medium">
                      {job.technologies}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        id="projects" 
        data-section 
        className={`py-20 px-6 transition-all duration-1000 transform ${
          visibleSections.includes('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                <Code className="w-8 h-8 text-green-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {t.projects.title}
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <div 
                key={index} 
                className="glass-card-enhanced p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/20 hover:scale-110 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="skills" 
        data-section 
        className={`py-20 px-6 transition-all duration-1000 transform ${
          visibleSections.includes('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-12">
              <div className="p-3 bg-gradient-to-r from-red-500/20 to-pink-400/20 rounded-xl">
                <SquareChartGantt className="w-8 h-8 text-violet-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {t.skills.title}
              </h2>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.skills.categories.map((category, index) => (
              <div 
                key={index} 
                className="glass-card-enhanced p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gradient-to-r from-white/10 to-white/5 text-center py-3 px-4 rounded-lg text-gray-200 hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10 hover:border-purple-400/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        data-section 
        className={`py-20 px-6 transition-all duration-1000 transform relative z-10 ${
          visibleSections.includes('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-enhanced p-8 md:p-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl">
                  <Mail className="w-8 h-8 text-pink-300" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {t.contact.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-lg">
                <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group">
                  <Mail className="w-8 h-8 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300">
                    <span className="text-blue-200 font-medium block mb-2">Email</span>
                    <a href={`mailto:${t.contact.email}`} className="hover:text-blue-300 transition-colors">
                      {t.contact.email}
                    </a>
                  </p>
                </div>
                <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-8 h-8 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300">
                    <span className="text-green-200 font-medium block mb-2">Teléfono</span>
                    <a href={`tel:${t.contact.phone}`} className="hover:text-green-300 transition-colors">
                      {t.contact.phone}
                    </a>
                  </p>
                </div>
                <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group">
                  <MapPin className="w-8 h-8 text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300">
                    <span className="text-purple-200 font-medium block mb-2">Ubicación</span>
                    {t.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}