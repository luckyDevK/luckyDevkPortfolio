const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Setiabudi, South Jakarta',
      period: '2025 – Present',
      current: true,
      achievements: [
        'Developed Kasirku Vending Machine Flazz (BCA) system for card testing and dispenser operations with configurable scheduling using Python and QML',
        'Develop Vending Machine Ticketing (BAG) supporting cash, E-wallet and QRIS payments with secure dynamic decryption and validation',
        'Develop Kasirku Gateway Dashboard as a full-stack application using Nuxt.js (Vue) and Golang with RBAC',
        'Designed multiple internal dashboard modules (Merchant, Sites ,Terminal, Analytics, Card Operator)',
        'Developed backend services for MrBrown public facility system using Golang and Gin, handling business logic, data aggregation, and bank settlement reporting (DKI, Mandiri, BNI, BCA, BRI) with ACID-compliant transactions.',
        'Built vm-service-android backend in Golang with secure encryption/decryption workflows and dynamic key derivation',
        'Developed PWA for parkour membership renewal using Next.js',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Gondang, Mojokerto, East Java',
      period: 'Jun 2022 – Dec 2022',
      current: false,
      achievements: [
        'Developed and maintained web interfaces using HTML, CSS, and JavaScript',
        'Assisted in backend development using PHP for data processing',
        'Contributed to internal tools that improved workflow efficiency',
        'Collaborated with team members to implement features and troubleshoot issues',
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
            My professional journey building software solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - centered on desktop, left on mobile */}
          <div className="absolute left-3 sm:left-1/2 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-700 transform sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-go-cyan rounded-full border-2 sm:border-4 border-dark-900 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 bg-go-cyan rounded-full animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-10 sm:pl-12 md:pl-12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-dark-800 border border-dark-700 rounded-xl p-4 sm:p-5 md:p-6 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-go-cyan text-sm sm:text-base">{exp.company}</p>
                      </div>
                      <span className={`self-start px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                        exp.current
                          ? 'bg-go-cyan/20 text-go-cyan border border-go-cyan/30'
                          : 'bg-dark-700 text-gray-400'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                          <span className="text-go-cyan mt-0.5 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
