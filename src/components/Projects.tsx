import vmFlazzBca from '../assets/vm-flazz-bca.jpg';
import vendingBag from '../assets/vending-bag.png';
import mrbrownDashboard from '../assets/mrbrown-dashboard.png';
import pwaOrsParkour from '../assets/pwa-ors-parkour.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VM Android Service',
      subtitle: 'Secure Payment Terminal Middleware',
      description: 'Develop backend with Go implementing secure communication between Android payment kiosks and backend systems with C.O.D.E encryption pattern.',
      tech: ['Go', 'MySQL', 'AES-256-GCM', 'JWT', 'PBKDF2'],
      highlights: [
        'C.O.D.E encrypted message structure',
        'Dual encryption model (Static & KSRVM)',
        'Terminal authentication & management',
        'Transaction processing & monitoring',
      ],
      color: 'from-cyan-500 to-blue-500',
      hasCaseStudy: true,
      image: null,
    },
    {
      id: 2,
      title: 'Go Dashboard Service',
      subtitle: 'Multi-tenant RBAC System',
      description: 'Backend service for dashboard applications featuring sophisticated role-based access control with multi-tenant support.',
      tech: ['Go', 'PostgreSQL', 'Gorilla Mux', 'JWT', 'Swagger'],
      highlights: [
        '5-level permission hierarchy',
        'User → Group → App Mode → Menu → Action',
        'Soft delete with audit trails',
        'bcrypt password hashing (cost 12)',
      ],
      color: 'from-purple-500 to-pink-500',
      hasCaseStudy: true,
      image: null,
    },
    {
      id: 3,
      title: 'VM Flazz BCA',
      subtitle: 'Card Testing & Dispenser System',
      description: 'Vending machine system for BCA Flazz card testing and dispenser operations with configurable operational scheduling.',
      tech: ['Python', 'QML', 'SQLite', 'Serial Comm'],
      highlights: [
        'BCA Flazz card validation',
        'Dispenser hardware control',
        'Configurable scheduling',
        'Transaction history',
      ],
      color: 'from-blue-500 to-indigo-500',
      hasCaseStudy: true,
      image: vmFlazzBca,
    },
    {
      id: 4,
      title: 'Vending Machine Ticketing (BAG)',
      subtitle: 'Dual Payment Ticket System',
      description: 'Next.js web application for ticket vending machines supporting cash and QRIS payments with real-time verification.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Redux', 'GraphQL'],
      highlights: [
        'Cash & QRIS payment support',
        'Real-time Socket.io updates',
        'QR code generation',
        'NextAuth authentication',
      ],
      color: 'from-green-500 to-teal-500',
      hasCaseStudy: true,
      image: vendingBag,
    },
    {
      id: 5,
      title: 'mrBrown Service',
      subtitle: 'Public Toilet Backend',
      description: 'Golang backend for public toilet operations including payment processing, usage tracking, and multi-bank settlement (DKI, Mandiri, BNI, BCA, BRI) with ACID compliance.',
      tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'JWT'],
      highlights: [
        'Multi-bank settlement (5 banks)',
        'Data aggregation engine',
        'ACID compliance',
        'Failure handling & retry',
      ],
      color: 'from-orange-500 to-red-500',
      hasCaseStudy: true,
      image: mrbrownDashboard,
    },
    {
      id: 6,
      title: 'PWA ORS Parkour',
      subtitle: 'Membership Renewal App',
      description: 'Progressive Web App for parkour membership renewal built with Next.js, focused on performance and mobile-first usability.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'PWA'],
      highlights: [
        'Installable on mobile',
        'Offline support',
        'Push notifications',
        'Fast loading',
      ],
      color: 'from-emerald-500 to-cyan-500',
      hasCaseStudy: true,
      image: pwaOrsParkour,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
            A selection of systems I've built, showcasing backend architecture, security patterns,
            and full-stack development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden card-hover group"
            >
              {/* Project Image */}
              {project.image && (
                <div className="bg-dark-900 p-3 sm:p-4 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-48 sm:max-h-64 md:max-h-80 w-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
              )}

              <div className="p-4 sm:p-5 md:p-6">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-go-cyan text-xs sm:text-sm">{project.subtitle}</p>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:py-1 bg-dark-700 border border-dark-600 rounded-full text-[10px] sm:text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {project.highlights.slice(0, 4).map((highlight, i) => (
                    <div key={i} className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs">
                      <span className="text-go-cyan flex-shrink-0">✓</span>
                      <span className="text-gray-400 truncate">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Project Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-dark-800 border border-dark-700 rounded-xl text-center sm:text-left">
            <span className="text-3xl sm:text-4xl">📁</span>
            <div>
              <h4 className="font-semibold text-white mb-1">Want to see the code?</h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">
                Check out the demo project showcasing patterns from VM Android Service & Go Dashboard
              </p>
              <a
                href="https://github.com/luckyDevK/demo-backend-starter/tree/develop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-go-cyan text-dark-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all text-xs sm:text-sm"
              >
                <span>View Go Backend Starter</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
