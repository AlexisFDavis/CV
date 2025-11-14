'use client'

import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { Download, Star, Code, Briefcase, User, Mail, Phone, MapPin, SquareChartGantt, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from 'lucide-react'

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
      extendedDescription?: string
      technologies: string
      images?: {
        category: string
        images: string[]
      }[]
    }[]
  }
  projects: {
    title: string
    items: {
      name: string
      description: string
      extendedDescription?: string
      technologies: string[]
      images?: {
        category: string
        images: string[]
      }[]
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
      technologies: "C# • PostgreSQL • Angular • Next.js • AWS • Java • Go • Node.JS",
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
          period: "Enero 2024 - Presente",
          description: "Desarrollo de aplicaciones web utilizando frameworks modernos y bases de datos relacionales y no relacionales.",
          extendedDescription: "Backend desarrollado en .NET Core que implementa API REST para la gestión integral de contratos inmobiliarios. El sistema incluye un mecanismo de autenticación y autorización por agencia, garantizando el acceso seguro y segmentado de los usuarios. Se implementó logging estructurado con AWS CloudWatch para el monitoreo y trazabilidad de eventos. Además, se incorporó la exportación de datos en formatos CSV y Excel para la generación de reportes financieros personalizados.\n\nFrontend desarrollado con Angular y Next.js que incluye un dashboard de reportes con gráficos interactivos para análisis financiero en tiempo real. El sistema permite la gestión completa de contabilidad, propiedades y morosidad, junto con un portal de clientes que ofrece acceso 24/7 para inquilinos y propietarios. Se implementó un backoffice administrativo completo para la configuración y administración del sistema.\n\nInfraestructura en AWS que utiliza Lambdas serverless para el procesamiento de datos y la integración con servicios de terceros. Se desarrollaron funciones específicas para la generación automática de reportes y se implementó un sistema de monitoreo y alertas en tiempo real para garantizar la estabilidad del sistema.\n\nMódulo de análisis y reportes que proporciona KPIs financieros en tiempo real, análisis de rentabilidad por metro cuadrado, seguimiento de morosidad y vencimientos, y proyecciones automáticas basadas en datos históricos. El sistema permite la visualización de tendencias y la generación de reportes personalizados.\n\nLanding page desarrollada con Astro y Tailwind CSS, optimizada para SEO y conversión. La página incluye performance excelente con Core Web Vitals optimizados, analytics integrado y diseño completamente responsive para todos los dispositivos.",
          technologies: "C# • PostgreSQL • Angular • Next.js • AWS • Terraform • .NET Core • TypeScript • AWS Lambda • SQL Server • Tailwind CSS • Chart.js • GraphQL • Node"
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
          name: "TravelMate",
          description: "TravelMate es una plataforma digital de gestión colaborativa de viajes que permite planificar, organizar y compartir aventuras de forma integral.",
          extendedDescription: "TravelMate es una plataforma digital de gestión colaborativa de viajes que permite planificar, organizar y compartir aventuras de forma integral. Ofrece un dashboard intuitivo con vista galería/lista para visualizar viajes con estados (planificando, en curso, completado), participantes, fechas y códigos de invitación únicos.\n\nFuncionalidades principales: creación de viajes con Google Maps (origen/destino con autocompletado), visualización de rutas en tiempo real, navegación GPS con instrucciones paso a paso y seguimiento de ubicación. Gestión de participantes mediante códigos compartibles, roles (administradores/miembros) y perfiles.\n\nSistema financiero avanzado: registro de compras generales e individuales por participante, control de gastos compartidos/personales, y billeteras virtuales para fondos comunes e individuales.\n\nInteligencia artificial con Google Gemini: recomendaciones contextuales, chat conversacional sobre destinos, y sugerencias inteligentes de restaurantes, hoteles, atracciones y gasolineras basadas en ubicación. Búsqueda con Google Places API.\n\nOtras características: calendario interactivo con navegación semanal, reloj digital con clima actual (geolocalización), estadísticas con métricas de viajes, gestión de destinos múltiples, y autenticación segura con perfiles personalizables. Interfaz responsive, soporte multi-moneda (Pesos/Dólares/Euros), modos de transporte (auto/avión/caminando), y secciones FAQ/términos.",
          technologies: ["Next.js", "TypeScript", "React", "Google Maps API", "Google Gemini AI", "Google Places API", "Tailwind CSS", "Node.js"],
          images: [
            {
              category: "Dashboard",
              images: [
                "/travelmate/dashboard/Dashboard.jpg"
              ]
            },
            {
              category: "Viajes",
              images: [
                "/travelmate/viajes/Viajes 1.jpg",
                "/travelmate/viajes/Viajes 2.jpg",
                "/travelmate/viajes/Viajes 3.jpg",
                "/travelmate/viajes/Viajes 4.jpg"
              ]
            },
            {
              category: "Creación de Viajes",
              images: [
                "/travelmate/creacion/Creacion Viaje.jpg",
                "/travelmate/creacion/Creacion Viaje 2.jpg",
                "/travelmate/creacion/Creacion viaje 4.jpg"
              ]
            }
          ]
        },
        {
          name: "Analytics IA",
          description: "Plataforma de análisis para e-commerce que convierte consultas en lenguaje natural a queries GraphQL o MongoDB, ejecutándolas automáticamente y presentando resultados con gráficos interactivos.",
          extendedDescription: "Plataforma de análisis para e-commerce que convierte consultas en lenguaje natural a queries GraphQL o MongoDB, ejecutándolas automáticamente y presentando resultados con gráficos interactivos. Utiliza inteligencia artificial (Groq, Ollama, OpenAI o Claude) para interpretar preguntas en español, detectar visualizaciones gráficas necesarias, y generar consultas apropiadas.\n\nBackend con Fastify y GraphQL (Mercurius), con fallback a MongoDB directo cuando GraphQL no es suficiente. Frontend en React con Vite, shadcn/ui y Recharts. Maneja seis colecciones: usuarios, productos, reseñas, órdenes, envíos y analytics, permitiendo filtrar, ordenar y buscar usando lenguaje natural.\n\nDetecta automáticamente cuando se necesitan gráficos (barras, líneas, torta) y genera visualizaciones comparativas en cuadrícula. El flujo es simple: usuario escribe en español, sistema procesa con IA, ejecuta query en MongoDB, y presenta resultados con gráficos interactivos. Arquitectura modular y extensible, soporta múltiples proveedores de IA mediante variables de entorno, accesible para usuarios técnicos y no técnicos.\n\nCasos de Uso:\n\nAnálisis de Productos: Consultar productos por categoría, precio o stock. Ejemplo: \"Productos de electrónica ordenados por los más valiosos\" genera un gráfico comparativo automático.\n\nAnálisis de Ventas: Visualizar órdenes recientes en gráficos de barras o líneas. Ejemplo: \"Muéstrame las órdenes en un gráfico de líneas por fecha\" agrupa y visualiza tendencias temporales.\n\nAnálisis de Ratings: Identificar productos mejor valorados y distribuir ratings. Ejemplo: \"Productos más valorados de electrónica\" calcula promedios y ordena por rating automáticamente.",
          technologies: ["React", "Vite", "Fastify", "GraphQL", "MongoDB", "Groq", "Ollama", "OpenAI", "Claude", "shadcn/ui", "Recharts", "TypeScript"],
          images: [
            {
              category: "Analytics",
              images: [
                "/AnalyuticsIA/ECommerce Analytics 1RST.png",
                "/AnalyuticsIA/ECommerce Analytics 2nd.png",
                "/AnalyuticsIA/ECommerce Analytics 3RTH.png"
              ]
            }
          ]
        },
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
          extendedDescription: "Backend developed in .NET Core implementing REST API for comprehensive real estate contract management. The system includes agency-based authentication and authorization, ensuring secure and segmented user access. Structured logging with AWS CloudWatch was implemented for event monitoring and traceability. Additionally, data export in CSV and Excel formats was incorporated for customized financial report generation.\n\nFrontend developed with Angular and Next.js including an interactive reports dashboard with real-time financial analysis charts. The system enables complete management of accounting, properties, and delinquency, along with a 24/7 client portal for tenants and property owners. A complete administrative backoffice was implemented for system configuration and administration.\n\nAWS infrastructure using serverless Lambdas for data processing and third-party service integration. Specific functions were developed for automatic report generation and a real-time monitoring and alerting system was implemented to ensure system stability.\n\nAnalysis and reporting module providing real-time financial KPIs, profitability analysis per square meter, delinquency and due date tracking, and automatic projections based on historical data. The system enables trend visualization and customized report generation.\n\nLanding page developed with Astro and Tailwind CSS, optimized for SEO and conversion. The page includes excellent performance with optimized Core Web Vitals, integrated analytics, and fully responsive design for all devices.",
          technologies: "C# • PostgreSQL • Angular • Next.js • AWS • Terraform • .NET Core • TypeScript • AWS Lambda • SQL Server • Tailwind CSS • Chart.js • GraphQL • Node"
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
          name: "TravelMate",
          description: "TravelMate is a digital collaborative travel management platform that allows planning, organizing, and sharing adventures comprehensively.",
          extendedDescription: "TravelMate is a digital collaborative travel management platform that allows planning, organizing, and sharing adventures comprehensively. It offers an intuitive dashboard with gallery/list view to visualize trips with states (planning, in progress, completed), participants, dates, and unique invitation codes.\n\nMain features: trip creation with Google Maps (origin/destination with autocomplete), real-time route visualization, GPS navigation with step-by-step instructions and location tracking. Participant management through shareable codes, roles (administrators/members), and profiles.\n\nAdvanced financial system: registration of general and individual purchases per participant, control of shared/personal expenses, and virtual wallets for common and individual funds.\n\nArtificial intelligence with Google Gemini: contextual recommendations, conversational chat about destinations, and intelligent suggestions for restaurants, hotels, attractions, and gas stations based on location. Search with Google Places API.\n\nOther features: interactive calendar with weekly navigation, digital clock with current weather (geolocation), statistics with trip metrics, multiple destination management, and secure authentication with customizable profiles. Responsive interface, multi-currency support (Pesos/Dollars/Euros), transportation modes (car/plane/walking), and FAQ/terms sections.",
          technologies: ["Next.js", "TypeScript", "React", "Google Maps API", "Google Gemini AI", "Google Places API", "Tailwind CSS", "Node.js"],
          images: [
            {
              category: "Dashboard",
              images: [
                "/travelmate/dashboard/Dashboard.jpg"
              ]
            },
            {
              category: "Trips",
              images: [
                "/travelmate/viajes/Viajes 1.jpg",
                "/travelmate/viajes/Viajes 2.jpg",
                "/travelmate/viajes/Viajes 3.jpg",
                "/travelmate/viajes/Viajes 4.jpg"
              ]
            },
            {
              category: "Trip Creation",
              images: [
                "/travelmate/creacion/Creacion Viaje.jpg",
                "/travelmate/creacion/Creacion Viaje 2.jpg",
                "/travelmate/creacion/Creacion viaje 4.jpg"
              ]
            }
          ]
        },
        {
          name: "Analytics IA",
          description: "E-commerce analytics platform that converts natural language queries to GraphQL or MongoDB queries, executing them automatically and presenting results with interactive charts.",
          extendedDescription: "E-commerce analytics platform that converts natural language queries to GraphQL or MongoDB queries, executing them automatically and presenting results with interactive charts. Uses artificial intelligence (Groq, Ollama, OpenAI or Claude) to interpret questions in Spanish, detect needed graphical visualizations, and generate appropriate queries.\n\nBackend with Fastify and GraphQL (Mercurius), with fallback to direct MongoDB when GraphQL is not sufficient. Frontend in React with Vite, shadcn/ui and Recharts. Handles six collections: users, products, reviews, orders, shipments and analytics, allowing filtering, sorting and searching using natural language.\n\nAutomatically detects when charts are needed (bars, lines, pie) and generates comparative visualizations in grid. The flow is simple: user writes in Spanish, system processes with AI, executes query in MongoDB, and presents results with interactive charts. Modular and extensible architecture, supports multiple AI providers through environment variables, accessible for technical and non-technical users.\n\nUse Cases:\n\nProduct Analysis: Query products by category, price or stock. Example: \"Electronics products ordered by most valuable\" generates an automatic comparative chart.\n\nSales Analysis: Visualize recent orders in bar or line charts. Example: \"Show me orders in a line chart by date\" groups and visualizes temporal trends.\n\nRating Analysis: Identify best-rated products and distribute ratings. Example: \"Best-rated electronics products\" calculates averages and orders by rating automatically.",
          technologies: ["React", "Vite", "Fastify", "GraphQL", "MongoDB", "Groq", "Ollama", "OpenAI", "Claude", "shadcn/ui", "Recharts", "TypeScript"],
          images: [
            {
              category: "Analytics",
              images: [
                "/AnalyuticsIA/ECommerce Analytics 1RST.png",
                "/AnalyuticsIA/ECommerce Analytics 2nd.png",
                "/AnalyuticsIA/ECommerce Analytics 3RTH.png"
              ]
            }
          ]
        },
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
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [scrollY, setScrollY] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [carouselStates, setCarouselStates] = useState<{
    [key: number]: { categoryIndex: number; imageIndex: number }
  }>({})
  const [projectCarouselStates, setProjectCarouselStates] = useState<{
    [key: number]: { categoryIndex: number; imageIndex: number }
  }>({})
  const [imageModal, setImageModal] = useState<{
    isOpen: boolean
    type: 'experience' | 'project' | null
    index: number | null
    categoryIndex: number
    imageIndex: number
  }>({
    isOpen: false,
    type: null,
    index: null,
    categoryIndex: 0,
    imageIndex: 0
  })
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const t = translations[currentLanguage]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    // Usar un debounce para evitar parpadeo
    let visibilityTimeouts: { [key: string]: NodeJS.Timeout } = {}
    let lastIntersectionState: { [key: string]: boolean } = {}
    
    // Calcular rootMargin basado en el tamaño de la ventana
    const getRootMargin = () => {
      if (window.innerWidth <= 768) {
        return '0px' // Sin margen negativo en móviles
      }
      return '-30px' // Margen pequeño en desktop
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id
          const wasIntersecting = lastIntersectionState[sectionId] || false
          const isIntersecting = entry.isIntersecting
          
          // Actualizar estado
          lastIntersectionState[sectionId] = isIntersecting
          
          // Limpiar timeout anterior si existe
          if (visibilityTimeouts[sectionId]) {
            clearTimeout(visibilityTimeouts[sectionId])
            delete visibilityTimeouts[sectionId]
          }
          
          if (isIntersecting) {
            // Agregar sección inmediatamente cuando entra al viewport
            setVisibleSections(prev => 
              prev.includes(sectionId) 
                ? prev 
                : [...prev, sectionId]
            )
          } else {
            // Verificar si hay contenido expandido
            const sectionElement = entry.target as HTMLElement
            const hasExpandedContent = sectionElement.querySelector('.expanded-content') !== null
            
            // Si tiene contenido expandido, mantener visible siempre
            // Incluso si sale un poco del viewport, mantener visible
            if (hasExpandedContent) {
              setVisibleSections(prev => 
                prev.includes(sectionId) 
                  ? prev 
                  : [...prev, sectionId]
              )
              // No ocultar nunca si tiene contenido expandido
              return
            }
            
            // Solo remover si realmente salió del viewport
            const rect = entry.boundingClientRect
            const viewportHeight = window.innerHeight
            // Umbral más generoso para evitar parpadeo
            // En móvil, ser aún más generoso
            const threshold = window.innerWidth <= 768 ? 200 : 100
            const isReallyOut = rect.bottom < -threshold || rect.top > viewportHeight + threshold
            
            // Si no está realmente fuera, mantener visible
            if (!isReallyOut) {
              return
            }
            
            // Solo ocultar después de un delay y si cambió de estado
            if (wasIntersecting) {
              visibilityTimeouts[sectionId] = setTimeout(() => {
                // Verificar nuevamente antes de ocultar
                const currentRect = sectionElement.getBoundingClientRect()
                const currentThreshold = window.innerWidth <= 768 ? 200 : 100
                const stillOut = currentRect.bottom < -currentThreshold || currentRect.top > viewportHeight + currentThreshold
                const stillHasExpanded = sectionElement.querySelector('.expanded-content') !== null
                
                // Solo ocultar si realmente está fuera y no tiene contenido expandido
                if (stillOut && !stillHasExpanded) {
                  setVisibleSections(prev => 
                    prev.filter(id => id !== sectionId)
                  )
                }
                delete visibilityTimeouts[sectionId]
              }, 800) // Delay aún más largo para evitar parpadeo, especialmente en móvil
            }
          }
        })
      },
      { 
        threshold: [0, 0.1, 0.2], // Thresholds más simples
        rootMargin: getRootMargin()
      }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => observer.observe(section))

    // Función para determinar la sección más visible y si está entre dos
    const updateActiveSection = () => {
      const sectionElements = Array.from(document.querySelectorAll('[data-section]')) as HTMLElement[]
      const viewportMiddle = window.scrollY + window.innerHeight / 2
      
      let mostVisibleSection = 'hero'
      let maxVisibility = 0
      let secondSection: string | null = null
      let secondVisibility = 0
      
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = window.scrollY + rect.top
        const sectionBottom = sectionTop + rect.height
        const sectionCenter = sectionTop + rect.height / 2
        
        // Calcular cuánto de la sección está visible en el viewport
        const visibleTop = Math.max(sectionTop, window.scrollY)
        const visibleBottom = Math.min(sectionBottom, window.scrollY + window.innerHeight)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const visibilityRatio = visibleHeight / window.innerHeight
        
        // Calcular distancia del centro del viewport al centro de la sección
        const distanceFromCenter = Math.abs(viewportMiddle - sectionCenter)
        const normalizedDistance = Math.min(distanceFromCenter / window.innerHeight, 1)
        // Score más alto si está más cerca del centro y más visible
        const proximityScore = visibilityRatio * (1 - normalizedDistance * 0.7)
        
        if (proximityScore > maxVisibility) {
          // Mover la sección actual a segunda posición
          secondSection = mostVisibleSection
          secondVisibility = maxVisibility
          // Nueva sección más visible
          mostVisibleSection = section.id
          maxVisibility = proximityScore
        } else if (proximityScore > secondVisibility) {
          secondSection = section.id
          secondVisibility = proximityScore
        }
      })
      
      // Si hay dos secciones con visibilidad similar (está entre ellas)
      const visibilityDifference = maxVisibility - secondVisibility
      // Ajustar el umbral para detectar mejor cuando está entre dos secciones
      if (secondSection && visibilityDifference < 0.25 && maxVisibility > 0.15 && secondVisibility > 0.1) {
        // Ordenar las secciones para mantener consistencia
        const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']
        const firstIndex = sections.indexOf(mostVisibleSection)
        const secondIndex = sections.indexOf(secondSection)
        
        if (firstIndex < secondIndex) {
          setActiveSection(`${mostVisibleSection}-${secondSection}`)
        } else {
          setActiveSection(`${secondSection}-${mostVisibleSection}`)
        }
      } else {
        setActiveSection(mostVisibleSection)
      }
    }

    // Actualizar sección activa en scroll - usar requestAnimationFrame para mejor performance
    let rafId: number | null = null
    let isUpdating = false
    
    const handleScrollForActive = () => {
      if (!isUpdating) {
        isUpdating = true
        rafId = requestAnimationFrame(() => {
          updateActiveSection()
          isUpdating = false
        })
      }
    }

    window.addEventListener('scroll', handleScrollForActive, { passive: true })
    
    // Actualizar al cargar y después de un pequeño delay
    setTimeout(updateActiveSection, 100)
    setTimeout(updateActiveSection, 500)

    return () => {
      observer.disconnect()
      // Limpiar todos los timeouts
      Object.values(visibilityTimeouts).forEach(timeout => clearTimeout(timeout))
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScrollForActive)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface GeometricShape {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      rotation: number
      rotationSpeed: number
      type: 'circle' | 'triangle' | 'square' | 'hexagon'
      color: string
    }

    const shapes: GeometricShape[] = []
    const mouse = { x: 0, y: 0 }
    const repulsionRadius = 150

    // Crear figuras geométricas
    for (let i = 0; i < 30; i++) {
      const types: ('circle' | 'triangle' | 'square' | 'hexagon')[] = ['circle', 'triangle', 'square', 'hexagon']
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 40,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: types[Math.floor(Math.random() * types.length)],
        color: `rgba(${139 + Math.random() * 50}, ${92 + Math.random() * 50}, ${246 + Math.random() * 50}, ${0.3 + Math.random() * 0.3})`
      })
    }

    const updateMouse = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', updateMouse)

    const drawShape = (shape: GeometricShape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.fillStyle = shape.color
      ctx.strokeStyle = shape.color
      ctx.lineWidth = 2

      switch (shape.type) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.fill()
          break
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(-shape.size / 2, shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.closePath()
          ctx.fill()
          break
        case 'square':
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          break
        case 'hexagon':
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i
            const x = Math.cos(angle) * shape.size / 2
            const y = Math.sin(angle) * shape.size / 2
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.fill()
          break
      }
      ctx.restore()
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach(shape => {
        // Movimiento constante
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Rebote en los bordes
        if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1
        if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1

        // Mantener dentro del canvas
        shape.x = Math.max(0, Math.min(canvas.width, shape.x))
        shape.y = Math.max(0, Math.min(canvas.height, shape.y))

        // Repulsión del mouse
        const dx = shape.x - mouse.x
        const dy = shape.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < repulsionRadius) {
          const force = (repulsionRadius - distance) / repulsionRadius
          const angle = Math.atan2(dy, dx)
          shape.vx += Math.cos(angle) * force * 0.1
          shape.vy += Math.sin(angle) * force * 0.1
        }

        // Limitar velocidad
        shape.vx = Math.max(-2, Math.min(2, shape.vx))
        shape.vy = Math.max(-2, Math.min(2, shape.vy))

        drawShape(shape)
      })

      animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('mousemove', updateMouse)
      window.removeEventListener('resize', handleResize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  // Auto-avance de imágenes en experiencia
  useEffect(() => {
    if (expandedJob === null) return
    
    const job = t.experience.jobs[expandedJob]
    if (!job.images || job.images.length === 0) return
    
    const interval = setInterval(() => {
      setCarouselStates(prev => {
        const current = prev[expandedJob] || { categoryIndex: 0, imageIndex: 0 }
        const currentCategory = job.images![current.categoryIndex]
        
        // Avanzar a la siguiente imagen
        if (current.imageIndex < currentCategory.images.length - 1) {
          return {
            ...prev,
            [expandedJob]: {
              ...current,
              imageIndex: current.imageIndex + 1
            }
          }
        } else {
          // Si es la última imagen de la categoría, pasar a la siguiente categoría
          if (current.categoryIndex < job.images!.length - 1) {
            return {
              ...prev,
              [expandedJob]: {
                categoryIndex: current.categoryIndex + 1,
                imageIndex: 0
              }
            }
          } else {
            // Si es la última categoría, volver a la primera
            return {
              ...prev,
              [expandedJob]: {
                categoryIndex: 0,
                imageIndex: 0
              }
            }
          }
        }
      })
    }, 3000) // Cambiar cada 3 segundos
    
    return () => {
      clearInterval(interval)
    }
  }, [expandedJob, t.experience.jobs])

  // Auto-avance de imágenes en proyectos
  useEffect(() => {
    if (expandedProject === null) return
    
    const project = t.projects.items[expandedProject]
    if (!project.images || project.images.length === 0) return
    
    const interval = setInterval(() => {
      setProjectCarouselStates(prev => {
        const current = prev[expandedProject] || { categoryIndex: 0, imageIndex: 0 }
        const currentCategory = project.images![current.categoryIndex]
        
        // Avanzar a la siguiente imagen
        if (current.imageIndex < currentCategory.images.length - 1) {
          return {
            ...prev,
            [expandedProject]: {
              ...current,
              imageIndex: current.imageIndex + 1
            }
          }
        } else {
          // Si es la última imagen de la categoría, pasar a la siguiente categoría
          if (current.categoryIndex < project.images!.length - 1) {
            return {
              ...prev,
              [expandedProject]: {
                categoryIndex: current.categoryIndex + 1,
                imageIndex: 0
              }
            }
          } else {
            // Si es la última categoría, volver a la primera
            return {
              ...prev,
              [expandedProject]: {
                categoryIndex: 0,
                imageIndex: 0
              }
            }
          }
        }
      })
    }, 3000) // Cambiar cada 3 segundos
    
    return () => {
      clearInterval(interval)
    }
  }, [expandedProject, t.projects.items])

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'es' ? 'en' : 'es')
  }
  
  const downloadCV = React.useCallback(() => {
    const link = document.createElement('a')
    // Usar el idioma actual para determinar qué CV descargar
    const isEnglish = currentLanguage === 'en'
    if (isEnglish) {
      link.href = '/Alexis Federico Davis - CV - ENG.pdf'
      link.download = 'Alexis_Davis_CV_ENG.pdf'
    } else {
      link.href = '/Alexis Federico Davis - CV.pdf'
      link.download = 'Alexis_Davis_CV.pdf'
    }
    link.click()
  }, [currentLanguage])

  const downloadCVHardvard = React.useCallback(() => {
    const link = document.createElement('a')
    // Descargar el CV en el idioma alternativo
    const isEnglish = currentLanguage === 'en'
    if (isEnglish) {
      // Si está en inglés, descargar CV en español
      link.href = '/Alexis Federico Davis - CV.pdf'
      link.download = 'Alexis_Davis_CV.pdf'
    } else {
      // Si está en español, descargar CV en inglés
      link.href = '/Alexis Federico Davis - CV - ENG.pdf'
      link.download = 'Alexis_Davis_CV_ENG.pdf'
    }
    link.click()
  }, [currentLanguage])

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
        
        @keyframes text-morph {
          0% {
            opacity: 1;
            transform: scaleY(1);
          }
          50% {
            opacity: 0.3;
            transform: scaleY(0.95);
          }
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        
        @keyframes background-drift {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        
        @keyframes background-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(50px, -50px) scale(1.1);
          }
        }
        
        @keyframes background-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        
        .cursor-dot {
          position: fixed;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: 
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%);
          backdrop-filter: blur(0.5px) brightness(1.15) contrast(1.05);
          -webkit-backdrop-filter: blur(0.5px) brightness(1.15) contrast(1.05);
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%) scale(1.3);
          transition: transform 0.15s cubic-bezier(0.2, 0, 0.2, 1);
          box-shadow: 
            inset 0 0 20px rgba(255, 255, 255, 0.2),
            inset 0 2px 8px rgba(255, 255, 255, 0.25),
            inset -1px -1px 5px rgba(0, 0, 0, 0.05),
            0 0 20px rgba(139, 92, 246, 0.3),
            0 0 40px rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.15);
          overflow: hidden;
        }
        
        .cursor-dot::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 20%;
          width: 20%;
          height: 20%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
          filter: blur(1px);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }
        
        .cursor-dot::after {
          content: '';
          position: absolute;
          top: 12%;
          left: 12%;
          width: 12%;
          height: 12%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          filter: blur(0.3px);
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
        }
        
        @keyframes water-drip {
          0%, 100% {
            opacity: 0.6;
            transform: translateX(-50%) scaleY(1);
          }
          50% {
            opacity: 0.9;
            transform: translateX(-50%) scaleY(1.2);
          }
        }
        
        @keyframes water-merge-top {
          0%, 100% {
            transform: translateX(-50%) translateY(-50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-50%) translateY(-30%) scale(1.3);
            opacity: 1;
          }
        }
        
        @keyframes water-merge-bottom {
          0%, 100% {
            transform: translateX(-50%) translateY(50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-50%) translateY(30%) scale(1.3);
            opacity: 1;
          }
        }
        
        @keyframes water-merge-flow {
          0%, 100% {
            opacity: 0.7;
            transform: translateX(-50%) scaleY(1);
          }
          25% {
            opacity: 0.9;
            transform: translateX(-50%) scaleY(1.1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scaleY(1.2);
          }
          75% {
            opacity: 0.9;
            transform: translateX(-50%) scaleY(1.1);
          }
        }
        
        .carousel-image {
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        
        .carousel-image.fade-out {
          opacity: 0;
          transform: scale(0.95);
        }
        
        .carousel-image.fade-in {
          opacity: 1;
          transform: scale(1);
        }
        
        .modal-image {
          transition: opacity 0.3s ease-in-out;
        }
        
        .modal-image.fade-in {
          opacity: 1;
        }
        
        * {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
          
          .cursor-dot {
            display: none !important;
          }
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

      {/* Cursor personalizado pequeño y redondeado */}
          <div 
        className="cursor-dot"
            style={{ 
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950"></div>
        
        {/* Canvas con figuras geométricas animadas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: 'screen' }}
        />
      </div>

      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="glass-card-enhanced px-4 py-2 md:px-6 md:py-3 text-white font-medium hover:scale-105 active:scale-95 transition-all duration-300 group text-sm md:text-base touch-manipulation"
        >
          <span className="group-hover:text-purple-300 transition-colors">
            {currentLanguage === 'es' ? '🇺🇸 EN' : '🇦🇷 ES'}
          </span>
        </button>
      </div>

      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="relative space-y-3">
          {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section, index) => {
            const nextSection = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'][index + 1]
            
            // Verificar si esta sección está activa
            const isActive = activeSection === section || activeSection.startsWith(section + '-')
            // Verificar si la siguiente está activa
            const isNextActive = nextSection ? (activeSection === nextSection || activeSection.endsWith('-' + nextSection)) : false
            // Está entre dos secciones si ambas están activas o si activeSection contiene ambas
            const isBetween = isActive && isNextActive || 
                             (activeSection.includes(section) && nextSection && activeSection.includes(nextSection))
            
            return (
              <div key={section} className="relative">
          <button
                  onClick={() => {
                    const element = document.getElementById(section)
                    if (element) {
                      if (section === 'hero') {
                        // Para hero, ir completamente arriba
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      } else {
                        // Para otras secciones, usar scrollIntoView con offset
                        const yOffset = -20
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                        window.scrollTo({ top: y, behavior: 'smooth' })
                      }
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-500 block relative z-10 touch-manipulation ${
                    isActive              
                ? 'bg-purple-400 scale-175 shadow-lg shadow-purple-400/50' 
                : 'bg-white/30 hover:bg-white/50 active:bg-white/70'
            }`}
          />
                {/* Conexión entre botones cuando están activos - efecto de gotas de agua juntándose */}
                {isBetween && (
                  <>
                    {/* Gota superior expandiéndose */}
                    <div 
                      className="absolute left-1/2 top-0 w-3 h-3 rounded-full transition-all duration-300"
                      style={{
                        transform: 'translateX(-50%) translateY(-50%)',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(139, 92, 246, 0.5) 50%, transparent 100%)',
                        boxShadow: '0 0 15px rgba(139, 92, 246, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.4)',
                        animation: 'water-merge-top 1.5s ease-in-out infinite',
                      }}
                    />
                    {/* Conexión fluida entre gotas */}
                    <div 
                      className="absolute left-1/2 top-3 w-1.5 rounded-full transition-all duration-300"
                      style={{
                        height: '12px',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.9) 0%, rgba(236, 72, 153, 0.8) 30%, rgba(139, 92, 246, 0.7) 60%, rgba(236, 72, 153, 0.6) 100%)',
                        boxShadow: '0 0 12px rgba(139, 92, 246, 0.6), inset 0 0 6px rgba(255, 255, 255, 0.3)',
                        animation: 'water-merge-flow 2s ease-in-out infinite',
                        filter: 'blur(0.5px)'
                      }}
                    />
                    {/* Gota inferior expandiéndose */}
                    <div 
                      className="absolute left-1/2 top-3 w-3 h-3 rounded-full transition-all duration-300"
                      style={{
                        transform: 'translateX(-50%) translateY(50%)',
                        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.9) 0%, rgba(236, 72, 153, 0.5) 50%, transparent 100%)',
                        boxShadow: '0 0 15px rgba(236, 72, 153, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.4)',
                        animation: 'water-merge-bottom 1.5s ease-in-out infinite',
                      }}
                    />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <section 
        id="hero" 
        data-section 
        className={`min-h-screen flex items-center justify-center px-6 transition-all duration-1000 transform ${
          visibleSections.includes('hero') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <div className="glass-card-hero text-center max-w-4xl mx-auto p-6 md:p-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 animate-gradient-shift"></div>
          <div className="relative z-10">
            <div className="mb-6 md:mb-8 inline-block">
              <div className="w-32 h-32 md:w-64 md:h-64 mx-auto mb-4 md:mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-3 bg-gray-900 rounded-full flex items-center justify-center">
                  <img
                    src={t.hero.imageUrl}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-3 md:mb-4 animate-fade-in-up leading-tight">
              {t.hero.name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-200 mb-4 md:mb-6 animate-fade-in-up-delay font-light">
              {t.hero.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 animate-fade-in-up-delay-2 max-w-2xl mx-auto px-4">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8 px-4">
              {t.hero.technologies.split(' • ').map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full text-xs md:text-sm font-medium border border-purple-400/20 backdrop-blur-sm hover:scale-105 active:scale-95 transition-transform duration-300"
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
        className={`py-12 md:py-20 px-4 md:px-6 transition-all duration-1000 transform ${
          visibleSections.includes('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-enhanced p-6 md:p-8 lg:p-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                  <Star className="w-8 h-8 text-purple-300" />
                </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.about.title}
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                {t.about.content}
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                <button 
                  onClick={downloadCV}
                  className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 group text-xs sm:text-sm md:text-base touch-manipulation flex-1 sm:flex-none"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                  {t.about.downloadCV}
                </button>
                <button 
                  onClick={downloadCVHardvard}
                  className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 group text-xs sm:text-sm md:text-base touch-manipulation flex-1 sm:flex-none"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                  {t.about.downloadCVHardvard}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="experience" 
        data-section 
        className={`py-12 md:py-20 px-4 md:px-6 transition-all duration-1000 transform ${
          visibleSections.includes('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-enhanced p-6 md:p-8 lg:p-12">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.experience.title}
              </h2>
            </div>
            <div className="space-y-6 md:space-y-8">
              {t.experience.jobs.map((job, index) => {
                const isExpanded = expandedJob === index
                const hasExtendedDescription = !!job.extendedDescription
                const hasImages = !!job.images && job.images.length > 0
                
                return (
                  <div key={index} className="relative">
                    <div 
                      className={`bg-white/5 rounded-xl p-4 md:p-6 transition-all duration-500 ${
                        isExpanded ? 'bg-white/10' : 'hover:bg-white/10 active:bg-white/10'
                      } hover:transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer touch-manipulation`}
                      onClick={() => {
                        if (hasExtendedDescription || hasImages) {
                          setExpandedJob(isExpanded ? null : index)
                          if (!isExpanded && hasImages) {
                            setCarouselStates(prev => ({
                              ...prev,
                              [index]: { categoryIndex: 0, imageIndex: 0 }
                            }))
                          }
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4 gap-2 md:gap-0">
                      <span className="text-blue-200 font-medium text-base md:text-lg">{job.company}</span>
                      <span className="text-gray-400 text-xs md:text-sm bg-white/10 px-2 py-1 md:px-3 rounded-full inline-block w-fit">{job.period}</span>
                    </div>
                          
                          {/* Texto que se transforma */}
                          <div className="relative mb-4 overflow-hidden">
                            {!isExpanded || !hasExtendedDescription ? (
                              <div 
                                className="transition-all duration-700 ease-in-out opacity-100"
                                style={{
                                  transform: isExpanded && hasExtendedDescription ? 'scaleY(0) translateY(-20px)' : 'scaleY(1) translateY(0)',
                                  maxHeight: isExpanded && hasExtendedDescription ? '0' : 'none',
                                  opacity: isExpanded && hasExtendedDescription ? 0 : 1
                                }}
                              >
                                <p className="text-gray-300 leading-relaxed">
                                  {job.description}
                                </p>
                              </div>
                            ) : null}
                            {hasExtendedDescription && (
                              <div 
                                className="transition-all duration-700 ease-in-out"
                                style={{
                                  transform: isExpanded ? 'scaleY(1) translateY(0)' : 'scaleY(0) translateY(20px)',
                                  maxHeight: isExpanded ? '3000px' : '0',
                                  opacity: isExpanded ? 1 : 0,
                                  overflow: isExpanded ? 'visible' : 'hidden'
                                }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                                  {job.extendedDescription}
                                </p>
                              </div>
                            )}
                          </div>
                          
                    <div className="text-purple-300 text-xs md:text-sm font-medium">
                      {job.technologies}
                    </div>
                  </div>
                        {(hasExtendedDescription || hasImages) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setExpandedJob(isExpanded ? null : index)
                              if (!isExpanded && hasImages) {
                                setCarouselStates(prev => ({
                                  ...prev,
                                  [index]: { categoryIndex: 0, imageIndex: 0 }
                                }))
                              }
                            }}
                            className="ml-4 p-2 text-purple-300 hover:text-purple-200 transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-6 h-6" />
                            ) : (
                              <ChevronDown className="w-6 h-6" />
                            )}
                          </button>
                        )}
                </div>
                      
                      {isExpanded && (
                        <div 
                          className="expanded-content mt-6 pt-6 border-t border-white/10 animate-fade-in-up"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {hasImages && (
                            <div className="mt-8">
                              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                                {currentLanguage === 'es' ? 'Galería de Imágenes' : 'Image Gallery'}
                              </h4>
                              
                              {/* Categorías */}
                              {(() => {
                                const currentCarousel = carouselStates[index] || { categoryIndex: 0, imageIndex: 0 }
                                return (
                                  <>
                                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                      {job.images!.map((category, catIndex) => (
                                        <button
                                          key={catIndex}
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            setCarouselStates(prev => ({
                                              ...prev,
                                              [index]: { categoryIndex: catIndex, imageIndex: 0 }
                                            }))
                                          }}
                                          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 touch-manipulation active:scale-95 ${
                                            currentCarousel.categoryIndex === catIndex
                                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                              : 'bg-white/10 text-gray-300 hover:bg-white/20 active:bg-white/30'
                                          }`}
                                        >
                                          {category.category}
                                        </button>
              ))}
            </div>
                                    
                                    {/* Carrusel */}
                                    {job.images![currentCarousel.categoryIndex] && (
                                      <div className="relative">
                                        <div 
                                          className="relative w-full h-64 md:h-96 bg-black/20 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            setImageModal({
                                              isOpen: true,
                                              type: 'experience',
                                              index: index,
                                              categoryIndex: currentCarousel.categoryIndex,
                                              imageIndex: currentCarousel.imageIndex
                                            })
                                          }}
                                        >
                                          <img
                                            key={`${currentCarousel.categoryIndex}-${currentCarousel.imageIndex}`}
                                            src={encodeURI(job.images![currentCarousel.categoryIndex].images[currentCarousel.imageIndex])}
                                            alt={`${job.images![currentCarousel.categoryIndex].category} - ${currentCarousel.imageIndex + 1}`}
                                            className="carousel-image fade-in w-full h-full object-contain"
                                            onError={(e) => {
                                              const target = e.target as HTMLImageElement
                                              target.style.display = 'none'
                                              const parent = target.parentElement
                                              if (parent && !parent.querySelector('.placeholder')) {
                                                const placeholder = document.createElement('div')
                                                placeholder.className = 'placeholder w-full h-full flex items-center justify-center text-gray-400'
                                                placeholder.textContent = currentLanguage === 'es' ? 'Imagen no disponible' : 'Image not available'
                                                parent.appendChild(placeholder)
                                              }
                                            }}
                                          />
                                          
                                          {/* Controles del carrusel */}
                                          {job.images![currentCarousel.categoryIndex].images.length > 1 && (
                                            <>
                                              <button
                                                onClick={(e) => {
                                                  e.stopPropagation()
                                                  setCarouselStates(prev => {
                                                    const current = prev[index] || { categoryIndex: 0, imageIndex: 0 }
                                                    return {
                                                      ...prev,
                                                      [index]: {
                                                        ...current,
                                                        imageIndex: current.imageIndex > 0 
                                                          ? current.imageIndex - 1 
                                                          : job.images![current.categoryIndex].images.length - 1
                                                      }
                                                    }
                                                  })
                                                }}
                                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-black/70 active:bg-black/90 rounded-full text-white transition-all duration-300 z-10 touch-manipulation"
                                              >
                                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                              </button>
                                              <button
                                                onClick={(e) => {
                                                  e.stopPropagation()
                                                  setCarouselStates(prev => {
                                                    const current = prev[index] || { categoryIndex: 0, imageIndex: 0 }
                                                    return {
                                                      ...prev,
                                                      [index]: {
                                                        ...current,
                                                        imageIndex: current.imageIndex < job.images![current.categoryIndex].images.length - 1
                                                          ? current.imageIndex + 1
                                                          : 0
                                                      }
                                                    }
                                                  })
                                                }}
                                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-black/70 active:bg-black/90 rounded-full text-white transition-all duration-300 z-10 touch-manipulation"
                                              >
                                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                              </button>
                                              
                                              {/* Indicadores */}
                                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                {job.images![currentCarousel.categoryIndex].images.map((_, imgIndex) => (
                                                  <button
                                                    key={imgIndex}
                                                    onClick={(e) => {
                                                      e.stopPropagation()
                                                      setCarouselStates(prev => ({
                                                        ...prev,
                                                        [index]: {
                                                          ...(prev[index] || { categoryIndex: 0, imageIndex: 0 }),
                                                          imageIndex: imgIndex
                                                        }
                                                      }))
                                                    }}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                      currentCarousel.imageIndex === imgIndex
                                                        ? 'bg-purple-400 w-8'
                                                        : 'bg-white/50 hover:bg-white/70'
                                                    }`}
                                                  />
                                                ))}
                                              </div>
                                              
                                              {/* Contador */}
                                              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm z-10">
                                                {currentCarousel.imageIndex + 1} / {job.images![currentCarousel.categoryIndex].images.length}
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )
                              })()}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section 
        id="projects" 
        data-section 
        className={`py-12 md:py-20 px-4 md:px-6 transition-all duration-1000 transform ${
          visibleSections.includes('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 md:gap-4 mb-4">
              <div className="p-2 md:p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                <Code className="w-6 h-6 md:w-8 md:h-8 text-green-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.projects.title}
              </h2>
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            {t.projects.items.map((project, index) => {
              const isExpanded = expandedProject === index
              const hasExtendedDescription = !!project.extendedDescription
              const hasImages = !!project.images && project.images.length > 0
              
              return (
                <div key={index} className="relative">
                  <div 
                    className={`glass-card-enhanced p-4 md:p-6 lg:p-8 transition-all duration-500 ${
                      isExpanded ? 'bg-white/10' : 'hover:bg-white/10 active:bg-white/10'
                    } hover:transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer touch-manipulation`}
                    onClick={() => {
                      if (hasExtendedDescription || hasImages) {
                        setExpandedProject(isExpanded ? null : index)
                        if (!isExpanded && hasImages) {
                          setProjectCarouselStates(prev => ({
                            ...prev,
                            [index]: { categoryIndex: 0, imageIndex: 0 }
                          }))
                        }
                      }
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                    {project.name}
                  </h3>
                        
                        {/* Texto que se transforma */}
                        <div className="relative mb-4 overflow-hidden">
                          {!isExpanded || !hasExtendedDescription ? (
                            <div 
                              className="transition-all duration-700 ease-in-out opacity-100"
                              style={{
                                transform: isExpanded && hasExtendedDescription ? 'scaleY(0) translateY(-20px)' : 'scaleY(1) translateY(0)',
                                maxHeight: isExpanded && hasExtendedDescription ? '0' : 'none',
                                opacity: isExpanded && hasExtendedDescription ? 0 : 1
                              }}
                            >
                                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                                  {project.description}
                                </p>
                            </div>
                          ) : null}
                          {hasExtendedDescription && (
                            <div 
                              className="transition-all duration-700 ease-in-out"
                              style={{
                                transform: isExpanded ? 'scaleY(1) translateY(0)' : 'scaleY(0) translateY(20px)',
                                maxHeight: isExpanded ? '3000px' : '0',
                                opacity: isExpanded ? 1 : 0,
                                overflow: isExpanded ? 'visible' : 'hidden'
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                                  {project.extendedDescription}
                                </p>
                            </div>
                          )}
                        </div>
                        
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
                      {(hasExtendedDescription || hasImages) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedProject(isExpanded ? null : index)
                            if (!isExpanded && hasImages) {
                              setProjectCarouselStates(prev => ({
                                ...prev,
                                [index]: { categoryIndex: 0, imageIndex: 0 }
                              }))
                            }
                          }}
                          className="ml-4 p-2 text-purple-300 hover:text-purple-200 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </button>
                      )}
              </div>
                    
                    {isExpanded && (
                      <div 
                        className="expanded-content mt-6 pt-6 border-t border-white/10 animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {hasImages && (
                          <div className="mt-8">
                            <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                              {currentLanguage === 'es' ? 'Galería de Imágenes' : 'Image Gallery'}
                            </h4>
                            
                            {/* Categorías */}
                            {(() => {
                              const currentCarousel = projectCarouselStates[index] || { categoryIndex: 0, imageIndex: 0 }
                              return (
                                <>
                                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                    {project.images!.map((category, catIndex) => (
                                      <button
                                        key={catIndex}
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setProjectCarouselStates(prev => ({
                                            ...prev,
                                            [index]: { categoryIndex: catIndex, imageIndex: 0 }
                                          }))
                                        }}
                                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 touch-manipulation active:scale-95 ${
                                          currentCarousel.categoryIndex === catIndex
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20 active:bg-white/30'
                                        }`}
                                      >
                                        {category.category}
                                      </button>
                                    ))}
                                  </div>
                                  
                                  {/* Carrusel */}
                                  {project.images![currentCarousel.categoryIndex] && (
                                    <div className="relative">
                                      <div 
                                        className="relative w-full h-64 md:h-96 bg-black/20 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setImageModal({
                                            isOpen: true,
                                            type: 'project',
                                            index: index,
                                            categoryIndex: currentCarousel.categoryIndex,
                                            imageIndex: currentCarousel.imageIndex
                                          })
                                        }}
                                      >
                                        <img
                                          key={`${currentCarousel.categoryIndex}-${currentCarousel.imageIndex}`}
                                          src={encodeURI(project.images![currentCarousel.categoryIndex].images[currentCarousel.imageIndex])}
                                          alt={`${project.images![currentCarousel.categoryIndex].category} - ${currentCarousel.imageIndex + 1}`}
                                          className="carousel-image fade-in w-full h-full object-contain"
                                          onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                            const parent = target.parentElement
                                            if (parent && !parent.querySelector('.placeholder')) {
                                              const placeholder = document.createElement('div')
                                              placeholder.className = 'placeholder w-full h-full flex items-center justify-center text-gray-400'
                                              placeholder.textContent = currentLanguage === 'es' ? 'Imagen no disponible' : 'Image not available'
                                              parent.appendChild(placeholder)
                                            }
                                          }}
                                        />
                                        
                                        {/* Controles del carrusel */}
                                        {project.images![currentCarousel.categoryIndex].images.length > 1 && (
                                          <>
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                setProjectCarouselStates(prev => {
                                                  const current = prev[index] || { categoryIndex: 0, imageIndex: 0 }
                                                  return {
                                                    ...prev,
                                                    [index]: {
                                                      ...current,
                                                      imageIndex: current.imageIndex > 0 
                                                        ? current.imageIndex - 1 
                                                        : project.images![current.categoryIndex].images.length - 1
                                                    }
                                                  }
                                                })
                                              }}
                                              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-black/70 active:bg-black/90 rounded-full text-white transition-all duration-300 z-10 touch-manipulation"
                                            >
                                              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                            </button>
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                setProjectCarouselStates(prev => {
                                                  const current = prev[index] || { categoryIndex: 0, imageIndex: 0 }
                                                  return {
                                                    ...prev,
                                                    [index]: {
                                                      ...current,
                                                      imageIndex: current.imageIndex < project.images![current.categoryIndex].images.length - 1
                                                        ? current.imageIndex + 1
                                                        : 0
                                                    }
                                                  }
                                                })
                                              }}
                                              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-black/70 active:bg-black/90 rounded-full text-white transition-all duration-300 z-10 touch-manipulation"
                                            >
                                              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                            </button>
                                            
                                            {/* Indicadores */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                              {project.images![currentCarousel.categoryIndex].images.map((_, imgIndex) => (
                                                <button
                                                  key={imgIndex}
                                                  onClick={(e) => {
                                                    e.stopPropagation()
                                                    setProjectCarouselStates(prev => ({
                                                      ...prev,
                                                      [index]: {
                                                        ...(prev[index] || { categoryIndex: 0, imageIndex: 0 }),
                                                        imageIndex: imgIndex
                                                      }
                                                    }))
                                                  }}
                                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                    currentCarousel.imageIndex === imgIndex
                                                      ? 'bg-purple-400 w-8'
                                                      : 'bg-white/50 hover:bg-white/70'
                                                  }`}
                                                />
                                              ))}
                                            </div>
                                            
                                            {/* Contador */}
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm z-10">
                                              {currentCarousel.imageIndex + 1} / {project.images![currentCarousel.categoryIndex].images.length}
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </>
                              )
                            })()}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section 
        id="skills" 
        data-section 
        className={`py-12 md:py-20 px-4 md:px-6 transition-all duration-1000 transform ${
          visibleSections.includes('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
              <div className="p-2 md:p-3 bg-gradient-to-r from-red-500/20 to-pink-400/20 rounded-xl">
                <SquareChartGantt className="w-6 h-6 md:w-8 md:h-8 text-violet-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.skills.title}
              </h2>
            </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {t.skills.categories.map((category, index) => (
              <div 
                key={index} 
                className="glass-card-enhanced p-4 md:p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 text-center">
                  {category.name}
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gradient-to-r from-white/10 to-white/5 text-center py-2 px-3 md:py-3 md:px-4 rounded-lg text-sm md:text-base text-gray-200 hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10 hover:border-purple-400/30 touch-manipulation"
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
        className={`py-12 md:py-20 px-4 md:px-6 transition-all duration-1000 transform relative z-10 ${
          visibleSections.includes('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-enhanced p-6 md:p-8 lg:p-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="p-2 md:p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-pink-300" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {t.contact.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-base md:text-lg">
                <div className="glass-card p-4 md:p-6 hover:bg-white/10 active:bg-white/10 transition-all duration-300 group touch-manipulation">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-300 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="text-blue-200 font-medium block mb-2">Email</span>
                    <a href={`mailto:${t.contact.email}`} className="hover:text-blue-300 transition-colors break-all">
                      {t.contact.email}
                    </a>
                  </p>
                </div>
                <div className="glass-card p-4 md:p-6 hover:bg-white/10 active:bg-white/10 transition-all duration-300 group touch-manipulation">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-green-300 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="text-green-200 font-medium block mb-2">Teléfono</span>
                    <a 
                      href={`https://wa.me/${t.contact.phone.replace(/\s+/g, '').replace(/-/g, '').replace(/\+/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-green-300 transition-colors"
                    >
                      {t.contact.phone}
                    </a>
                  </p>
                </div>
                <div className="glass-card p-4 md:p-6 hover:bg-white/10 active:bg-white/10 transition-all duration-300 group touch-manipulation">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-purple-300 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="text-purple-200 font-medium block mb-2">Ubicación</span>
                    {t.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Imágenes Ampliadas */}
      {imageModal.isOpen && imageModal.type && imageModal.index !== null && (() => {
        const items = imageModal.type === 'experience' ? t.experience.jobs : t.projects.items
        const item = items[imageModal.index]
        
        if (!item.images) return null

        // Obtener todas las imágenes en secuencia (todas las categorías)
        const allImages: { category: string; image: string; categoryIndex: number; imageIndex: number }[] = []
        item.images.forEach((category: { category: string; images: string[] }, catIndex: number) => {
          category.images.forEach((image: string, imgIndex: number) => {
            allImages.push({
              category: category.category,
              image: image,
              categoryIndex: catIndex,
              imageIndex: imgIndex
            })
          })
        })

        // Encontrar el índice actual en la lista completa
        const currentGlobalIndex = allImages.findIndex(
          img => img.categoryIndex === imageModal.categoryIndex && img.imageIndex === imageModal.imageIndex
        )
        const initialIndex = currentGlobalIndex >= 0 ? currentGlobalIndex : 0
        
        return <ImageModalContent 
          allImages={allImages}
          initialIndex={initialIndex}
          onClose={() => setImageModal({ isOpen: false, type: null, index: null, categoryIndex: 0, imageIndex: 0 })}
        />
      })()}
    </div>
  )
}

// Componente separado para el contenido del modal
function ImageModalContent({ 
  allImages, 
  initialIndex, 
  onClose 
}: { 
  allImages: { category: string; image: string; categoryIndex: number; imageIndex: number }[]
  initialIndex: number
  onClose: () => void 
}) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex)
  const currentImage = allImages[currentIndex]

  // Actualizar índice cuando cambia initialIndex
  React.useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : allImages.length - 1)
  }, [allImages.length])

  const goToNext = React.useCallback(() => {
    setCurrentIndex(prev => prev < allImages.length - 1 ? prev + 1 : 0)
  }, [allImages.length])

  // Manejar teclado
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext, onClose])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-4 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all duration-300 z-50 touch-manipulation"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Contenedor de imagen */}
      <div 
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón anterior */}
        {allImages.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/70 hover:bg-black/90 active:bg-black/95 rounded-full text-white transition-all duration-300 z-40 touch-manipulation"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        )}

        {/* Imagen */}
        <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center">
          <img
            key={currentIndex}
            src={encodeURI(currentImage.image)}
            alt={`${currentImage.category} - ${currentImage.imageIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl modal-image fade-in"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </div>

        {/* Botón siguiente */}
        {allImages.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/70 hover:bg-black/90 active:bg-black/95 rounded-full text-white transition-all duration-300 z-40 touch-manipulation"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        )}

        {/* Información de la imagen */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg px-4 md:px-6 py-2 md:py-3 text-white text-center z-40">
          <p className="text-sm md:text-base font-medium">{currentImage.category}</p>
          <p className="text-xs md:text-sm text-gray-300 mt-1">
            {currentIndex + 1} / {allImages.length}
          </p>
        </div>
      </div>
    </div>
  )
}
